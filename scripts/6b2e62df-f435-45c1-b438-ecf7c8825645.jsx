// Convert this text to ExtendScript

// Change to Black and White
var doc = app.activeDocument;
doc.activeLayer.adjustments.blackAndWhite();

// The path to photo
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\3572104.jpg";

// Open the photo
var doc = app.open(File(photoPath));

// Save edited photo to the editedphotos folder as JPEG file type
var savePath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\3572104.jpg";
doc.saveAs(File(savePath), JPEGSaveOptions, true);

// Close the app
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);