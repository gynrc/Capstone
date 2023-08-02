//Create a reference to the Photoshop application
var photoshop = new ExternalObject("lib:Adobe Photoshop 2020");

//Create a reference to the File System Object
var fso = new ActiveXObject("Scripting.FileSystemObject");

//Create a reference to the file
var file = fso.GetFile("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\pp.jpg");

//Open the file in Photoshop
var doc = photoshop.Open(file);

//Create a reference to the active document
var activeDoc = app.activeDocument;

//Convert the photo to black and white
activeDoc.activeLayer.duplicate();
activeDoc.activeLayer.name = "Black and White";
activeDoc.activeLayer.mode = DocumentMode.GRAYSCALE;

//Save the edited photo to the editedphotos folder as a JPEG file
var saveFile = fso.CreateTextFile("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\pp.jpg", true);
activeDoc.saveAs(saveFile, JPEGSaveOptions, true);

//Close the application
activeDoc.close(SaveOptions.DONOTSAVECHANGES);