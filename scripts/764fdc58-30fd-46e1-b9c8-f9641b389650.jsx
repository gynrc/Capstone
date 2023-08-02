// Include the File System Object
var fso = new FileSystemObject();

// Get the path to the photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\tunnel.jpg";

// Open the photo in Photoshop
var photoshopApp = new ExternalObject("lib:Adobe Photoshop");
var photoDoc = photoshopApp.open(photoPath);

// Crop the photo
photoDoc.selection.selectAll();
photoDoc.selection.crop(50, 50, 100, 100);

// Save the edited photo to the editedphotos folder as JPEG file type
var savePath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\tunnel.jpg";
photoDoc.saveAs(savePath, JPEG);

// Close the app
photoDoc.close(SaveOptions.DONOTSAVECHANGES);