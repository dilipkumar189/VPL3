# VPL Cricket Tournament

## Description

The VPL Cricket Tournament Management System is a comprehensive web application designed to streamline the organization and management of cricket tournaments. This platform offers a range of features to enhance the experience for both organizers and participants. Key functionalities include match scheduling, team management, team entry, sponsor and advertiser management, and a hall of fame showcase.
This application caters to both regular users and administrators, offering tailored features for each role.

The system is built using modern web technologies, ensuring a responsive and user-friendly interface. React and Tailwind CSS power the frontend, providing a smooth and interactive user experience. The backend is constructed with Node.js and Express.js, utilizing MongoDB for efficient data storage and retrieval. Security is prioritized through JWT authentication, while Nodemailer facilitates communication with users.

## Technologies Used

### Frontend

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/-DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/-Nodemailer-339933?style=flat-square&logo=nodemailer&logoColor=white)

### Tools & Deployment

![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Postman](https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![VS Code](https://img.shields.io/badge/-VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

## Getting Started

### 1. Clone the repository:

```
git clone https://github.com/dilipkumar189/VPL3.git
```

### 2. Install dependencies for both frontend and backend:

#### frontend:

```
cd client
npm install
```

#### backend:

```
cd server
npm install
```

### 3. Set up environment variables (create .env file in server root directory)

### 4. Start the Application:

#### frontend:

```
cd client
npm run dev
```

#### backend:

```
cd server
npm start
```





📁 project-structure/
│
├── 📁 config/
│   └── database.js
│
├── 📁 controllers/
│   └── dataController.js
│
├── 📁 middlewares/
│   └── errorHandler.js
│   └── validatePagination.js
│
├── 📁 models/
│   └── dataModel.js
│
├── 📁 routes/
│   └── dataRoutes.js
│
├── 📄 .env
├── 📄 package.json
└── 📄 server.js

📄 config/database.js
```javascript
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle
  connectionTimeoutMillis: 2000, // How long to wait when connecting
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
```

📄 middlewares/validatePagination.js
```javascript
const validatePagination = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const search = req.query.search || '';
  const sortBy = req.query.sortBy || 'id';
  const sortOrder = req.query.sortOrder || 'ASC';

  if (page < 1) {
    return res.status(400).json({ error: 'Page must be at least 1' });
  }

  if (pageSize < 1 || pageSize > 100) {
    return res.status(400).json({ error: 'Page size must be between 1 and 100' });
  }

  req.pagination = {
    page,
    pageSize,
    offset: (page - 1) * pageSize,
    search,
    sortBy,
    sortOrder
  };

  next();
};

module.exports = validatePagination;
```

📄 middlewares/errorHandler.js
```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
};

module.exports = errorHandler;
```

📄 models/dataModel.js
```javascript
const db = require('../config/database');

class DataModel {
  async findAll(pagination) {
    const { pageSize, offset, search, sortBy, sortOrder } = pagination;

    // Dynamic search query
    const searchCondition = search 
      ? `WHERE name ILIKE $3 OR email ILIKE $3` 
      : '';

    const countQuery = `
      SELECT COUNT(*) AS total_rows 
      FROM users 
      ${searchCondition}
    `;

    const dataQuery = `
      SELECT id, name, email, created_at
      FROM users
      ${searchCondition}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT $1 OFFSET $2
    `;

    const queryParams = search 
      ? [pageSize, offset, `%${search}%`]
      : [pageSize, offset];

    try {
      const countResult = await db.query(countQuery, search ? [queryParams[2]] : []);
      const dataResult = await db.query(dataQuery, queryParams);

      const totalRows = parseInt(countResult.rows[0].total_rows);

      return {
        totalRows,
        totalPages: Math.ceil(totalRows / pageSize),
        currentPage: Math.floor(offset / pageSize) + 1,
        pageSize,
        data: dataResult.rows
      };
    } catch (error) {
      throw new Error(`Database query error: ${error.message}`);
    }
  }

  async exportToCsv(pagination) {
    // Logic for CSV export with filtering
    const { search, sortBy, sortOrder } = pagination;

    const query = `
      SELECT id, name, email, created_at
      FROM users
      WHERE name ILIKE $1 OR email ILIKE $1
      ORDER BY ${sortBy} ${sortOrder}
    `;

    const result = await db.query(query, [`%${search}%`]);
    return result.rows;
  }
}

module.exports = new DataModel();
```

📄 controllers/dataController.js
```javascript
const DataModel = require('../models/dataModel');
const { Parser } = require('json2csv');

class DataController {
  async getPaginatedData(req, res, next) {
    try {
      const result = await DataModel.findAll(req.pagination);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async exportDataToCsv(req, res, next) {
    try {
      const data = await DataModel.exportToCsv(req.pagination);
      
      const fields = ['id', 'name', 'email', 'created_at'];
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(data);

      res.header('Content-Type', 'text/csv');
      res.attachment('data_export.csv');
      res.send(csv);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DataController();
```

📄 routes/dataRoutes.js
```javascript
const express = require('express');
const router = express.Router();
const DataController = require('../controllers/dataController');
const validatePagination = require('../middlewares/validatePagination');

router.get('/', 
  validatePagination, 
  DataController.getPaginatedData
);

router.get('/export', 
  validatePagination, 
  DataController.exportDataToCsv
);

module.exports = router;
```

📄 server.js
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const dataRoutes = require('./routes/dataRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
```

📄 .env
```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
PORT=3000
```

📄 package.json
```json
{
  "dependencies": {
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "helmet": "^7.0.0",
    "json2csv": "^5.0.7",
    "pg": "^8.11.0"
  },
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Features Implemented:
1. Flexible Pagination
2. Search Functionality
3. Sorting
4. CSV Export
5. Error Handling
6. Performance Optimizations
   - Connection Pooling
   - Compression
   - Helmet for security
   - Parameterized Queries

API Endpoints:
- `GET /api/data?page=1&pageSize=10&search=john&sortBy=name&sortOrder=ASC`
- `GET /api/data/export?search=john&sortBy=name&sortOrder=ASC`

Recommended Frontend Request:
```javascript
const fetchData = async (page, pageSize, search, sortBy, sortOrder) => {
  const response = await axios.get('/api/data', {
    params: { page, pageSize, search, sortBy, sortOrder }
  });
  return response.data;
};
```

Key Points:
- Modular architecture
- Separation of concerns
- Secure and performant
- Easily extensible

Recommended Next Steps:
1. Add authentication middleware
2. Implement more advanced filtering
3. Add caching layer (Redis)
4. Create comprehensive error logging

Would you like me to elaborate on any specific aspect of the implementation?






📁 src/
│
├── 📁 components/
│   ├── ui/
│   │   ├── table.jsx
│   │   ├── button.jsx
│   │   ├── input.jsx
│   │   └── select.jsx
│   │
│   └── DataTable.jsx
│
├── 📁 hooks/
│   └── useDataTable.js
│
├── 📁 services/
│   └── dataService.js
│
└── 📁 pages/
    └── DataTablePage.jsx

📄 src/services/dataService.js
```javascript
import axios from 'axios';

const API_URL = '/api/data';

export const DataService = {
  async fetchData(params) {
    try {
      const response = await axios.get(API_URL, { 
        params: {
          page: params.page || 1,
          pageSize: params.pageSize || 10,
          search: params.search || '',
          sortBy: params.sortBy || 'id',
          sortOrder: params.sortOrder || 'ASC'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async exportData(params) {
    try {
      const response = await axios.get(`${API_URL}/export`, {
        params: {
          search: params.search || '',
          sortBy: params.sortBy || 'id',
          sortOrder: params.sortOrder || 'ASC'
        },
        responseType: 'blob'
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data_export.csv');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error exporting data:', error);
      throw error;
    }
  }
};
```

📄 src/hooks/useDataTable.js
```javascript
import { useState, useEffect } from 'react';
import { DataService } from '../services/dataService';

export const useDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    totalRows: 0,
    totalPages: 0
  });
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('ASC');

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await DataService.fetchData({
        page: pagination.page,
        pageSize: pagination.pageSize,
        search,
        sortBy,
        sortOrder
      });

      setData(result.data);
      setPagination({
        page: result.currentPage,
        pageSize: result.pageSize,
        totalRows: result.totalRows,
        totalPages: result.totalPages
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pagination.page, search, sortBy, sortOrder]);

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, page }));
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleSort = (column) => {
    const isAsc = sortBy === column && sortOrder === 'ASC';
    setSortBy(column);
    setSortOrder(isAsc ? 'DESC' : 'ASC');
  };

  const handleExport = async () => {
    try {
      await DataService.exportData({ search, sortBy, sortOrder });
    } catch (err) {
      console.error('Export failed', err);
    }
  };

  return {
    data,
    loading,
    error,
    pagination,
    search,
    sortBy,
    sortOrder,
    handlePageChange,
    handleSearch,
    handleSort,
    handleExport,
    fetchData
  };
};
```

📄 src/components/DataTable.jsx
```jsx
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  DownloadIcon 
} from "lucide-react";
import { useDataTable } from '../hooks/useDataTable';

export function DataTable() {
  const {
    data,
    loading,
    pagination,
    search,
    sortBy,
    sortOrder,
    handlePageChange,
    handleSearch,
    handleSort,
    handleExport
  } = useDataTable();

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'created_at', label: 'Created At' }
  ];

  return (
    <div className="w-full p-4">
      <div className="flex justify-between mb-4">
        <Input 
          placeholder="Search..." 
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleExport}
        >
          <DownloadIcon className="mr-2 h-4 w-4" /> 
          Export CSV
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead 
                key={column.key}
                onClick={() => handleSort(column.key)}
                className="cursor-pointer hover:bg-gray-100"
              >
                {column.label}
                {sortBy === column.key && (
                  sortOrder === 'ASC' 
                    ? <ArrowUpIcon className="inline h-4 w-4 ml-2" /> 
                    : <ArrowDownIcon className="inline h-4 w-4 ml-2" />
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500">
          Page {pagination.page} of {pagination.totalPages}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
```

📄 src/pages/DataTablePage.jsx
```jsx
import React from 'react';
import { DataTable } from '../components/DataTable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DataTablePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User Data Table</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
    </div>
  );
}
```

Installation Steps:
```bash
# Install shadcn/ui components
npx shadcn-ui@latest init
npx shadcn-ui@latest add table button input card
npm install axios lucide-react
```

Key Features:
1. Pagination
2. Searching
3. Sorting
4. CSV Export
5. Responsive Design
6. Loading States
7. Error Handling

Recommended Shadcn Setup:
- Use `@/components/ui` for UI components
- Install Tailwind CSS
- Configure `tailwind.config.js`

Additional Recommendations:
1. Add error toast notifications
2. Implement more advanced filtering
3. Add loading skeletons
4. Create unit tests

Would you like me to elaborate on any specific aspect of the implementation?</antArtifact>