// blur this photo
// the path to photo is C:\Users\canda\Desktop\Capstone2023-shortcuts\uploads\tunnel.jpg
// do not Include the File System Object and Save edited photo to the editedphotos folder as JPEG file type and close the app

// Create a new document
var docRef = app.documents.add();

// Open the photo
var photoRef = app.open(File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\tunnel.jpg"));

// Blur the photo
photoRef.activeLayer.applyGaussianBlur(5);

// Save the edited photo to the editedphotos folder as JPEG file type
photoRef.saveAs(File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\tunnel.jpg"), JPEGSaveOptions, true);

// Close the app
app.quit();