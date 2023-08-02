// Create a reference to the active document
var doc = app.activeDocument;

// Blur the active document
doc.activeLayer.applyGaussianBlur(5);

// Get the path of the active document
var docPath = doc.path;

// Create a new file object
var file = new File(docPath + "/editedphotos/sunset.jpg");

// Save the active document as a JPEG
doc.saveAs(file, JPEGSaveOptions, true);

// Close the active document
doc.close(SaveOptions.DONOTSAVECHANGES);