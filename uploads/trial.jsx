// Create a reference to the Photoshop application
var photoshop = new ActionDescriptor();

// Get the path to the photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\pp.jpg";

// Open the photo
photoshop.open(photoPath);

// Convert the photo to black and white
photoshop.convertToBlackAndWhite();

// Save the edited photo to the editedphotos folder
var savePath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\pp.jpg";
photoshop.saveAs(savePath, JPEG);

// Close the application
photoshop.close();