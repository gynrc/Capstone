//Define Variables
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\night.jpg";
var editedPhotosFolder = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\";

//Open the photo
var docRef = app.open(File(photoPath));

//Crop the photo
docRef.crop([0, 0, docRef.width, docRef.height]);

//Save the edited photo
var saveFile = File(editedPhotosFolder + docRef.name);
saveOptions = new JPEGSaveOptions();
saveOptions.quality = 12;
docRef.saveAs(saveFile, saveOptions, true, Extension.LOWERCASE);

//Close the app
app.quit();