//Create a reference to the Photoshop application
var photoshop = new ExternalObject("lib:Adobe Photoshop CS6");

//Open the photo
var photo = photoshop.Open(File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\night.jpg"));

//Crop the photo
photo.Crop(new Array(0, 0, 500, 500));

//Save the edited photo
photo.SaveAs(File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\night.jpg"), JPEGSaveOptions, true);

//Close the photo
photo.Close(SaveOptions.DONOTSAVECHANGES);

//Close the application
photoshop.Quit();