import { storageService } from '../../../storage.service.js';
import { utilService } from '../../../util.service.js';

const NOTE_KEY = 'notes';
var noteDB = [];
var noteColors = [];

export const noteService = {
    query,
    add,
    changeBGC
}

function query() {
    let note = storageService.load(NOTE_KEY);
    if (!note || note.length === 0) {
        note = getNoteData();
        storageService.store(NOTE_KEY, note)
    }
    noteDB = note;
    return Promise.resolve(noteDB);
}

function add(note) {
    noteDB.unshift(note);
    storageService.store(NOTE_KEY, noteDB);
}

function changeBGC(id) {
    const note = noteDB.find(note => note.id === id)
    console.log(note)
}

function getNoteData() {
    return [
        {
            txt: 'hey im working'
        },
        {
            txt: 'hey im working great'
        },
        {
            txt: 'hey im working verry verrry greaaaat'
        },

    ]
}