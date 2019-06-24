
import { storageService } from '../../../storage.service.js';
import { utilService } from '../../../util.service.js';
import { EventBus, NOTE_UPDATED } from '../../../event-bus.js';

const NOTE_KEY = 'notes';
let noteDB = [];

export const noteService = {
    query
}

function query() {
    let note = storageService.load(NOTE_KEY);

    noteDB = note || [];
    return Promise.resolve(noteDB);
}

export const updateNote = (note) => {
    const idx = noteDB.findIndex(({ id }) => id === note.id);

    noteDB = [
        ...noteDB.slice(0, idx),
        note,
        ...noteDB.slice(idx + 1),
    ];
    storageService.store(NOTE_KEY, noteDB)
};

export const getById = (idToFind) => {
    const note = noteDB.find(({ id }) => id === idToFind);

    return Promise.resolve(note);
}

export const createTodo = ({ title, todos, theme }) => {
    noteDB = [{
        id: utilService.makeId(),
        date: Date.now(),
        type: 'TODO',
        title,
        todos,
        theme,
    }, ...noteDB];
    storageService.store(NOTE_KEY, noteDB)
    EventBus.$emit(NOTE_UPDATED);
}

export const createText = ({ title, text, theme }) => {
    noteDB = [{
        id: utilService.makeId(),
        date: Date.now(),
        type: 'TEXT',
        title,
        text,
        theme,
    }, ...noteDB];
    storageService.store(NOTE_KEY, noteDB)
    EventBus.$emit(NOTE_UPDATED);
}

export const remove = (id) => {
    const idx = noteDB.findIndex(note => note.id === id)
    noteDB.splice(idx, 1)
    storageService.store(NOTE_KEY, noteDB);
}


export const createImg = ({ title, url, theme }) => {
    noteDB = [{
        id: utilService.makeId(),
        date: Date.now(),
        type: 'IMAGE',
        url,
        title,
        theme,
    }, ...noteDB];
    storageService.store(NOTE_KEY, noteDB)
    EventBus.$emit(NOTE_UPDATED);
}