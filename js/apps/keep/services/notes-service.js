import { storageService } from '../../../storage.service.js';
import { utilService } from '../../../util.service.js';

const NOTE_KEY = 'notes';
var noteDB = [];

export const noteService = {
    query,
    add,
    changeBGC,
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
    note.bgc = 'white'
    noteDB.unshift(note);
    storageService.store(NOTE_KEY, noteDB);
    // location.reload();
}

function changeBGC(id, color) {
    const note = noteDB.find(note => note.id === id)
    note.bgc = color
    storageService.store(NOTE_KEY, noteDB);
}

function getNoteData() {
    return [
        {
            id: utilService.makeId(),
            txt: 'hey im working',
            bgc: 'white'
        },
        {
            id: utilService.makeId(),
            txt: 'hey dasdas working',
            bgc: 'grey'
        },
        {
            id: utilService.makeId(),
            img: 'https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536__340.jpg',
            bgc: 'red'
            
        },
    ]
}