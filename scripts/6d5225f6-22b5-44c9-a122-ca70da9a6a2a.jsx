// Create a reference to the Photoshop application
var photoshop = new ActionDescriptor();

// Get the path to the photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\night.jpg";

// Open the photo
photoshop.open(photoPath);

// Crop the photo
photoshop.Crop(0, 0, 0, 0);

// Save the edited photo
var editedPhotoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\night.jpg";
photoshop.SaveAs(editedPhotoPath, JPEG);

// Close the application
photoshop.close();