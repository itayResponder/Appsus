import { storageService } from '../../../storage.service.js';
import { utilService } from '../../../util.service.js';

const NOTE_KEY = 'notes';
var noteDB = [];
var noteColors = [];

export const noteService = {
    query,
    add,
    getNoteData,
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

function add(noteProp, val) {
    let note = {};
    note.id = utilService.makeId();
    if (noteProp === 'txt') {
        note.txt = val;
    } else if (noteProp === 'img') {
        note.img = val;
    } else if (noteProp === 'list') {
        note.list = val;
    } else if (noteProp === 'audio') {
        note.audio = val;
    } else if (noteProp === 'video') {
        note.video = val;
    } else {
        note.list = val.split('\n');
    }
    noteDB.unshift(note);
    storageService.store(NOTE_KEY, noteDB);
}

function getNoteData() {
    return [
        {
            id: utilService.makeId(),
            txt: 'hey im working'
        },
        {
            id: utilService.makeId(),
            img: 'https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536__340.jpg'
        },
        {
            id: utilService.makeId(),
            list: 'hey im working verry verrry greaaaat'
        },

    ]
}