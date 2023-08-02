// blur this photo
// the path to photo is C:\Users\canda\Desktop\Capstone2023-shortcuts\uploads\heart.jpg
// do not Include the File System Object and Save edited photo to the editedphotos folder as JPEG file type and close the app

// open the photo
var docRef = app.open(File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\heart.jpg"));

// blur the photo
docRef.activeLayer.applyGaussianBlur(5);

// save the photo
var saveFile = File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\heart.jpg");
docRef.saveAs(saveFile, JPEGSaveOptions, true);

// close the app
app.quit();