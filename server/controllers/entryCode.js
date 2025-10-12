// const TeamEntryCode = require("../models/TeamEntryCode");

const EntryCode = require("../models/entryCode");

// Insert 12 codes (run once)
const insertCodes = async (req, res) => {
  try {
    const codes = [
      { code: "bhavesh", village: "Bagra" }
    ];

    const inserted = await EntryCode.insertMany(codes, { ordered: false });

    res.status(201).json({
      message: "✅ Codes inserted successfully",
      data: inserted,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all codes
const getCodes = async (req, res) => {
  try {
    const codes = await EntryCode.find();
    res.status(200).json(codes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Validate code before team creation
// const validateCode = async (req, res) => {
//   try {
//     const { code } = req.body;

//     console.log("Received code:", code);
//     const entryCode = await EntryCode.findOne({ code });

//     if (!entryCode) {
//       return res.status(404).json({ message: "Invalid code" });
//     }

//     if (entryCode.used) {
//       return res.status(400).json({ message: "⚠️ Code already used" });
//     }

//     res.status(200).json({
//       message: "✅ Code is valid, you can create a team",
//       village: entryCode.village,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const validateCode = async (req, res) => {
  try {
    let { code } = req.body;
    console.log("Received code:", `"${code}"`);

    if (!code || !code.trim()) {
      return res.status(400).json({ message: "Code is required" });
    }

    code = code.trim();

    // Find entry and populate only if team is valid
    const entryCode = await EntryCode.findOne({ code: code })

    if (!entryCode) {
      return res.status(404).json({ message: "Invalid code" });
    }

    // Ensure team is either a valid ObjectId or null
    if (!entryCode.team || entryCode.team === "null") {
      entryCode.team = null;
    }

    res.status(200).json({
      message: "Code is valid, you can create a team",
      village: entryCode.village,
      isUsed: !!entryCode.team,
      team: entryCode.team || null,
    });
  } catch (error) {
    console.error("Validation error:", error);
    return res.status(500).json({ error: "Server error", details: error.message });
  }
};



module.exports = { insertCodes, getCodes, validateCode };
