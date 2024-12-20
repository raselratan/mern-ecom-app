const fs = require("fs").promises;

const deleteImage = async (imagePath) => {
  try {
    await fs.access(imagePath);
    await fs.unlink(imagePath);
    console.log("Image deleted");
  } catch (err) {
    console.log("Image not found");
  }
};

module.exports = deleteImage;
