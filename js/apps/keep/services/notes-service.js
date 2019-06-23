import { storageService } from '../../../storage.service.js';
import { utilService } from '../../../util.service.js';

const NOTE_KEY = 'notes';
var noteDB = [];
var noteColors = [];

export const noteService = {
    query,
    add,
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

function getNoteData() {
    return [
        {
            txt: 'hey im working'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536__340.jpg'
        },
        {
            list: 'hey im working verry verrry greaaaat'
        },

    ]
}