// blur this photo
// the path to photo is C:\Users\canda\Desktop\Capstone2023-shortcuts\uploads\17280657.jpg
// do not Include the File System Object and Save edited photo to the editedphotos folder as JPEG file type and close the app.

// Create a reference to the active document
var docRef = app.activeDocument;

// Create a new layer
var layerRef = docRef.artLayers.add();

// Select the layer
layerRef.select();

// Load the selection
docRef.selection.load(File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\17280657.jpg"));

// Blur the selection
docRef.selection.gaussianBlur(2);

// Deselect the selection
docRef.selection.deselect();

// Save the edited photo to the editedphotos folder as JPEG file type
var saveFile = File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\17280657.jpg");
docRef.saveAs(saveFile, JPEGSaveOptions, true);

// Close the app
app.quit();