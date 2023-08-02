// Resize an image in Photoshop using ExtendScript

// var editedPhotoPath = "C:\\Users\\canda\\Desktop\\Capstone2023-shortcuts\\editedphotos";

// Check if a document is open
if (app.documents.length > 0) {
  // Get the active document
  var doc = app.activeDocument;

  // Set the desired new width and height (in pixels)
  var newWidth = 800;
  var newHeight = 600;

  // Resize the document
  doc.resizeImage(newWidth, newHeight);

  // Save the changes
  doc.save();
} else {
  alert("No document is open in Photoshop.");
}

// Save the edited photo
// var saveOptions = new JPEGSaveOptions();
// doc.saveAs(File(editedPhotoPath), saveOptions, true);

// // Close the photo
// doc.close(SaveOptions.DONOTSAVECHANGES);