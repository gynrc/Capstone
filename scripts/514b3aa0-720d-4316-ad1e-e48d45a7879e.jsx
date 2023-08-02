//Define Variables
var photoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\balloon.jpg";
var editedPhotoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\balloon.jpg";

//Open Photo
var docRef = app.open(File(photoPath));

//Convert to Black and White
docRef.activeLayer.duplicate();
docRef.activeLayer.mode = DocumentMode.GRAYSCALE;

//Save Photo
var saveOptions = new JPEGSaveOptions();
saveOptions.embedColorProfile = true;
saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
saveOptions.matte = MatteType.NONE;
saveOptions.quality = 12;
docRef.saveAs(File(editedPhotoPath), saveOptions, true, Extension.LOWERCASE);

//Close Photo
docRef.close(SaveOptions.DONOTSAVECHANGES);