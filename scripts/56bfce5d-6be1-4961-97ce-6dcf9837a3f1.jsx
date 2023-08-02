// Create a reference to the Photoshop application
var photoshop = new ExternalObject("lib:Adobe Photoshop 2020");

// Create a reference to the File System Object
var fso = new ActiveXObject("Scripting.FileSystemObject");

// Get the path of the photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\heart.jpg";

// Get the path of the edited photos folder
var editedPhotosPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\";

// Open the photo
var docRef = photoshop.Open(photoPath);

// Set the opacity to 50%
docRef.activeLayer.opacity = 50;

// Save the edited photo to the edited photos folder as a JPEG file
var fileName = fso.GetBaseName(photoPath) + ".jpg";
var savePath = editedPhotosPath + fileName;
docRef.SaveAs(savePath, photoshop.JPEGSaveOptions, true);

// Close the photo
docRef.Close(SaveOptions.DONOTSAVECHANGES);

// Quit the Photoshop application
photoshop.Quit();