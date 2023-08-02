// Create a reference to the Photoshop application
var photoshop = new ExternalObject("lib:Adobe Photoshop 2020");

// Create a reference to the File System Object
var fso = new ActiveXObject("Scripting.FileSystemObject");

// Get the path of the photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\tunnel.jpg";

// Open the photo
var photoDoc = photoshop.Open(photoPath);

// Blur the photo
var blurFilter = photoshop.ArtLayer.Filter.GaussianBlur(10);

// Save the photo
var savePath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\tunnel.jpg";
photoDoc.SaveAs(savePath, photoshop.JPEGSaveOptions, true);

// Close the photo
photoDoc.Close(photoshop.SaveOptions.DONOTSAVECHANGES);

// Release the references
blurFilter = null;
photoDoc = null;
fso = null;
photoshop = null;