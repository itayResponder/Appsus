import { storageService } from '../../../storage.service.js'
import { utilService } from '../../../util.service.js'

const EMAIL_KEY = 'email';
var emailDB = [];
export const emailService = {
    query,
    getById,
    emailRead,
    deleteEmail,
    changeReadStatus,
    countUnread,
    sortEmails,
    addEmail,
}


function query() {
    let email = storageService.load(EMAIL_KEY);
    if (!email || email.length === 0) {
        email = getEmailData();
        storageService.store(EMAIL_KEY, email)
    }
    emailDB = email;
    return Promise.resolve(emailDB);
}


function getById(id) {
    if (!emailDB.length) emailDB = storageService.load(EMAIL_KEY)
    return Promise.resolve(emailDB.find(email => email.id === id))
}

function emailRead(id) {
    getById(id)
    .then(email => {
        email.message.isRead = true
        storageService.store(EMAIL_KEY, emailDB)
    })
}

function deleteEmail(id) {
    const emailIdx = emailDB.findIndex(email => email.id === id)
    emailDB.splice(emailIdx,1)
    storageService.store(EMAIL_KEY, emailDB)
}

function changeReadStatus(id) {
    const email = emailDB.find(email => email.id === id)
    email.message.isRead = !email.message.isRead
    storageService.store(EMAIL_KEY, emailDB)
} 

function countUnread() {
    console.log('email-service-count',emailDB.filter(email => email.message.isRead === false).length);
    return emailDB.filter(email => email.message.isRead === false).length
}

function sortEmails(condition) {
    console.log(condition)
    if (condition === 'date') utilService.sortByDate(emailDB)
    if (condition==='name') utilService.sortByTitle(emailDB)
}

function addEmail(name, subject, desc, date) {
    var email = {
        'id': utilService.makeId(),
        from: {
            name,
            thumbnail: '',
            email: 'jihri@tizi.com'
        },
        date,
        message: {
            subject,
            desc,
            isRead: false
        }
    }
    emailDB.push(email);
    storageService.store(EMAIL_KEY, emailDB);
}

function getEmailData() {
    return [
        {
            'id': utilService.makeId(),
            'from': {
                'name': 'itay',
                'thumbnail': '',
                'email': 'jihri@tizi.com'
            },
            'date': Date.now(),
            'message': {
                'subject': 'how to get beautiful life',
                'desc': 'working with oriel',
                'isRead': false
            }

        },
        {
            'id': utilService.makeId(),
            'from': {
                'name': 'jonas',
                'thumbnail': '',
                'email': 'jihri@tizi.com'
            },
            'date': Date.now(),
            'message': {
                'subject': 'Lets make gums',
                'desc': 'working with oriel',
                'isRead': false
            }
        },
        {
            'id': utilService.makeId(),
            'from': {
                'name': 'tal',
                'thumbnail': '',
                'email': 'jihri@tizi.com'
            },
            'date': Date.now(),
            'message': {
                'subject': 'My problems',
                'desc': 'working with oriel',
                'isRead': false
            }
        },
        {
            'id': utilService.makeId(),
            'from': {
                'name': 'itay',
                'thumbnail': '',
                'email': 'jihri@tizi.com'
            },
            'date': Date.now(),
            'message': {
                'subject': 'you can get out from murder',
                'desc': 'working with oriel',
                'isRead': true
            }
        },
    ]
}