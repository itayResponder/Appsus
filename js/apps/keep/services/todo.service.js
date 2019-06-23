
// CRUDL
export default {
    getEmptyTodo,
    query,
    add,
    toggle
}

var gTodos = [];

function query() {
    return gTodos;
}

function add(todo) {
    todo.id = makeId();
    gTodos.unshift(todo)
}

function toggle(todo) {
    todo.isDone = !todo.isDone;
}

function getEmptyTodo(txt = '') {
    return { txt, isDone: false, priority: 0 }
}

function makeId(length = 5)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}