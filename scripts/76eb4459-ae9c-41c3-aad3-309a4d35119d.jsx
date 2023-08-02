// Convert to Black and White
// Path to photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\17280657.jpg";
// Open the photo
var docRef = app.open(File(photoPath));
// Convert to Black and White
docRef.activeLayer.mode = DocumentMode.GRAYSCALE;
// Save the edited photo
var savePath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\17280657.jpg";
docRef.saveAs(File(savePath), JPEGSaveOptions, true);
// Close the app
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);