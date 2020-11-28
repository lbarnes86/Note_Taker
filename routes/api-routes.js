let db = require("../db/db.json");
const fs = require('fs');

//add to note array
function addNote(notes){
  let Note = [];
  for (let i = 0; i < notes.length; i++) {
    let writeNote = notes[i];
    writeNote.id = i + 1;
    Note[i] = writeNote;
  }
  return Note;
}
//save 
function writeNote(notes){
  fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
    if (err) throw err;
  });
}

//routing
module.exports = function(app) {
    // API GET request
    app.get("/api/notes", function(req, res) {
      res.json(db);
    });
  
    //API POST
    app.post("/api/notes", function(req, res) {
      //newNote from request
      const newNote = req.body;
      //add new note
      db.push(newNote);
      //set note in array
      db = addNote(db);
      //save note to json file
      writeNote(db);
      //reformated html with new note
      res.json(newNote);
    });

    //API DELETE
    app.delete("/api/notes/:id", function(req, res) {
        
        //define delete note by id
        const deletedNoteID = req.params.id;
        //splice adds or removes items to/from an array *w3schools
        //id -1 due to array starting at 0 and id starting at 1
        const deletedNote = db.splice(deletedNoteID-1, 1);
        //set note in array
        db = addNote(db);
        //save note to json file
        writeNote(db);
        //reformat html with deleted note
        res.json(deletedNote);
    });
  };
