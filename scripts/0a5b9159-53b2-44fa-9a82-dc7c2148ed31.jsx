// Create a new document
var docRef = app.documents.add();

// Get the path of the photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\eclipse.jpg";

// Open the photo
var photoRef = app.open(File(photoPath));

// Convert the photo to black and white
photoRef.activeLayer.mode = DocumentMode.GRAYSCALE;

// Save the edited photo
var savePath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\eclipse.jpg";
photoRef.saveAs(File(savePath), new JPEGSaveOptions(), true);

// Close the photo
photoRef.close(SaveOptions.DONOTSAVECHANGES);

// Close the new document
docRef.close(SaveOptions.DONOTSAVECHANGES);