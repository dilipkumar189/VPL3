const Sponsor = require("../models/sponsor");
const { uploadFile, deleteFile } = require("../utils/cloudinary");
const foodSpon = require("../models/foodSponsor");
const otherSpon = require("../models/otherSponsor");


// ----- Sponsor Type ------
const addSponsorType = async (req, res) => {
    const { sponsorType } = req.body;
    
    try {
        const existingSponsorType = await Sponsor.findOne({ sponsorType });
        
        if (existingSponsorType) {
            return res.status(400).json({ message: "This sponsor type already exists" });
        }

        const newSponType = new Sponsor({ sponsorType });
        const saveSpon = await newSponType.save();

        res.status(201).json(saveSpon);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
};


const getSponsorType = async (req, res) => {
    try {
        const spData = await Sponsor.find();
        res.status(200).json(spData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const deleteSponsorType = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSponsor = await Sponsor.findByIdAndDelete(id);
        
        if (!deletedSponsor) {
            return res.status(404).json({ message: "Sponsor type not found" });
        }
        
        res.status(200).json({ message: "Sponsor type deleted successfully", deletedSponsor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const editSponsorType = async (req, res) => {
    const { id } = req.params;
    const update = req.body; // Directly use the request body
    
    console.log('Request body:', req.body);

    if (Object.keys(update).length === 0) {
        return res.status(400).json({ message: "No update data provided" });
    }

    try {
        // Check if updating sponsorType and if it already exists
        if (update.sponsorType) {
            const existingSponsorType = await Sponsor.findOne({ 
                sponsorType: update.sponsorType, 
                _id: { $ne: id } 
            });
            
            if (existingSponsorType) {
                return res.status(400).json({ message: "This sponsor type already exists" });
            }
        }

        // Find and update the sponsor type
        const updatedSponsor = await Sponsor.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true, runValidators: true }
        );

        if (!updatedSponsor) {
            return res.status(404).json({ message: "Sponsor type not found" });
        }

        res.status(200).json(updatedSponsor);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
};

                // ----- Food Sponsor -----

const addFoodSpon = async (req, res) => {
    try {
        const { sponDay, fullName, village, amount } = req.body;
        // Upload image to Cloudinary
        const result = await uploadFile(req.file.path);
        const spImage = result.secure_url
        
        const newFoodSpon = new foodSpon({
            sponDay, fullName, village, amount, spImage
        });
       
        const savedFoodSpon = await newFoodSpon.save();
        console.log(newFoodSpon)
        res.status(201).json(savedFoodSpon); 
    } catch (error) {
        console.error("Error adding food sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};


const getFoodSpon = async (req,res)=>{
    try {
        const foodData = await foodSpon.find();
        console.log(foodData)
        res.status(202).json(foodData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const deleteFoodSpon = async (req, res) => {
    try {
        const { id } = req.params;

        const sponsor = await foodSpon.findById(id);

        if (!sponsor) {
            return res.status(404).json({ message: "Food sponsor not found" });
        }

        const publicId = sponsor.spImage.split('/').pop().split('.')[0];
        const cloudinaryResult = await deleteFile(publicId);

        if (cloudinaryResult.result !== 'ok') {
            throw new Error('Failed to delete image from Cloudinary');
        }
        await foodSpon.findByIdAndDelete(id);

        res.status(200).json({ message: "Food sponsor and associated image deleted successfully" });
    } catch (error) {
        console.error("Error deleting food sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};

const editFoodSponsor = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // Find the existing food sponsor
        const existingFoodSponsor = await foodSpon.findById(id);
        if (!existingFoodSponsor) {
            return res.status(404).json({ message: "Food Sponsor not found" });
        }

        // Handle file upload if a new image is provided
        if (req.file) {
            // Delete old image from Cloudinary
            if (existingFoodSponsor.spImage) {
                await deleteFile(existingFoodSponsor.spImage);
            }
            
            // Upload new image
            const result = await uploadFile(req.file.path);
            updates.spImage = result.secure_url;
        }

        // Update only the fields that are provided in the request
        Object.keys(updates).forEach((update) => {
            existingFoodSponsor[update] = updates[update];
        });

        // Save the updated food sponsor
        const updatedFoodSponsor = await existingFoodSponsor.save();

        res.status(200).json(updatedFoodSponsor);
    } catch (error) {
        console.error("Error updating food sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};

                    // ---- other sponsor ----

const addOtherSpon = async (req, res) => {
    try {
        const { sponType, fullName, village, amount } = req.body;

        // Upload image to Cloudinary
        const result = await uploadFile(req.file.path);
        const spOtherImage = result.secure_url

        const newOtherSpon = new otherSpon({
            sponType, fullName, village, amount, spOtherImage
        });

        const savedSpon = await newOtherSpon.save();
        console.log(newOtherSpon)
        res.status(201).json(savedSpon); 
    } catch (error) {
        console.error("Error adding food sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};



const getOtherSpon = async (req,res)=>{
    try {
        const otherData = await otherSpon.find();
        console.log(otherData)
        res.status(202).json(otherData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const deleteOtherSpon = async (req, res) => {
    try {
        const { id } = req.params;

        const sponsor = await otherSpon.findById(id);

        if (!sponsor) {
            return res.status(404).json({ message: "Other sponsor not found" });
        }

        const publicId = sponsor.spOtherImage.split('/').pop().split('.')[0];
        const cloudinaryResult = await deleteFile(publicId);

        if (cloudinaryResult.result !== 'ok') {
            throw new Error('Failed to delete image from Cloudinary');
        }
        await otherSpon.findByIdAndDelete(id);

        res.status(200).json({ message: "Other sponsor and associated image deleted successfully" });
    } catch (error) {
        console.error("Error deleting other sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};

const editOtherSponsor = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // Find the existing other sponsor
        const existingOtherSponsor = await otherSpon.findById(id);
        if (!existingOtherSponsor) {
            return res.status(404).json({ message: "Other Sponsor not found" });
        }

        // Handle file upload if a new image is provided
        if (req.file) {
            // Delete old image from Cloudinary
            if (existingOtherSponsor.spOtherImage) {
                await deleteFile(existingOtherSponsor.spOtherImage);
            }
            
            // Upload new image
            const result = await uploadFile(req.file.path);
            updates.spOtherImage = result.secure_url;
        }

        // Update only the fields that are provided in the request
        Object.keys(updates).forEach((update) => {
            existingOtherSponsor[update] = updates[update];
        });

        // Save the updated other sponsor
        const updatedOtherSponsor = await existingOtherSponsor.save();

        res.status(200).json(updatedOtherSponsor);
    } catch (error) {
        console.error("Error updating other sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addSponsorType,
    getSponsorType,
    deleteSponsorType,
    editSponsorType,
    addFoodSpon,
    getFoodSpon,
    deleteFoodSpon,
    editFoodSponsor,
    addOtherSpon,
    getOtherSpon,
    deleteOtherSpon,
    editOtherSponsor
};