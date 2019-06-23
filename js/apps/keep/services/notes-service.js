import { storageService } from '../../../storage.service.js';
import { utilService } from '../../../util.service.js';

const NOTE_KEY = 'notes';
var noteDB = [];
var noteColors = [];

export const noteService = {
    query,
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