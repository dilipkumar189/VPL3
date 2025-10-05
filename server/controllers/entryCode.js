// const TeamEntryCode = require("../models/TeamEntryCode");

const EntryCode = require("../models/entryCode");

// Insert 12 codes (run once)
const insertCodes = async (req, res) => {
  try {
    const codes = [
      { code: "JOD-RAJ-01", village: "Rajeshpur" },
      { code: "PALI-ASH-02", village: "Ashapura" },
      { code: "BALI-MAN-03", village: "Mandli" },
      { code: "UDA-SUR-04", village: "Surajgarh" },
      { code: "JAI-DEV-05", village: "Devpura" },
      { code: "NAG-OM-06", village: "Ompura" },
      { code: "BEE-RAK-07", village: "Rakeshpur" },
      { code: "KOT-ANU-08", village: "Anupgarh" },
      { code: "TON-MOH-09", village: "Mohangarh" },
      { code: "BAR-VIN-10", village: "Vinpura" },
      { code: "AJM-HAR-11", village: "Haripura" },
      { code: "SIK-SAT-12", village: "Satpura" },
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
    if (!code) return res.status(400).json({ message: "Code is required" });

    code = code.trim(); // remove spaces

    // case-insensitive search
    const entryCode = await EntryCode.findOne({ code: new RegExp(`^${code}$`, "i") });

    if (!entryCode) return res.status(404).json({ message: "❌ Invalid code" });
    if (entryCode.used) return res.status(400).json({ message: "⚠️ Code already used" });

    res.status(200).json({
      message: "✅ Code is valid, you can create a team",
      village: entryCode.village,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { insertCodes, getCodes, validateCode };
