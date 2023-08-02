// Create a reference to the application
var photoshop = new ActionDescriptor();

// Open the photo
var fileRef = new File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\uploads\\heart.jpg");
photoshop.putPath(charIDToTypeID("null"), fileRef);
executeAction(charIDToTypeID("Opn "), photoshop, DialogModes.NO);

// Convert to Black and White
var desc = new ActionDescriptor();
desc.putClass( charIDToTypeID('T   '), charIDToTypeID('Gry ') );
executeAction( charIDToTypeID('CnvM'), desc, DialogModes.NO );

// Save the edited photo
var saveFile = new File("C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos\\heart.jpg");
photoshop.putPath(charIDToTypeID("In  "), saveFile);
photoshop.putEnumerated(charIDToTypeID("FTcs"), charIDToTypeID("JPEG"), charIDToTypeID("JPEG"));
executeAction(charIDToTypeID("save"), photoshop, DialogModes.NO);

// Close the application
photoshop.putBoolean(charIDToTypeID("Qt  "), true);
executeAction(charIDToTypeID("quit"), photoshop, DialogModes.NO);