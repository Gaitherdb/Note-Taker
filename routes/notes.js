const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const dbNotes = require('../db/db.json');


console.log(dbNotes);
// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

notes.delete('/:id', (req, res) => {
    if (req.body && req.params.id) {
        console.info(`${req.method} request received to delete a note`);
        const id = req.params.id;
        console.info('duck');
        console.info(dbNotes);
        console.info('penguin');
        for (let i = 0; i < dbNotes.length; i++) {
            const currentNote = dbNotes[i];
            if (currentNote.id == id) {
                dbNotes.splice(i, 1);
                console.info(dbNotes);
                writeToFile('./db/db.json', dbNotes);
                res.json('Note deleted successfully');
                console.info('Note deleted for real')
                console.info(dbNotes);
            }
        }
    };
});

module.exports = notes;

// dbNotes.map(e => {

//     if(e.id == id){

//     }})
  // let keep = dbNotes.filter(db => db !== currentNote);
                // dbNotes.splice()