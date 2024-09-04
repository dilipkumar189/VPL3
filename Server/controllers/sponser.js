const Sponser = require("../models/sponserType");

exports.addSponserType = async (req, res) => {
    const sptype = req.body; 

    try {
        const spType = new Sponser(sptype);
        const savedSponserType = await spType.save();

        console.log(savedSponserType);
        res.status(201).json({
            message: "Sponsor type added successfully",
            data: savedSponserType
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({
            message: "An error occurred while adding the sponsor type",
            error: error.message
        });
    }
}