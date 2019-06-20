import { storageService } from '../main/storage.service.js'
import { utilService } from '../util.service.js'


const EMAIL_KEY = 'email';

var emailDB = [];

export const emailService = {
    query,
    getById,
    emailRead
}


function query() {
    let email = storageService.load(EMAIL_KEY);
    if (!email) {
        email = getEmailData();
        storageService.store(EMAIL_KEY, email)
    }
    emailDB = email;
    console.log(emailDB)
    return Promise.resolve(emailDB);
}


function getById(id) {
    console.log('service id', id)
    if (!emailDB.length) emailDB = storageService.load(EMAIL_KEY)
    return Promise.resolve(emailDB.find(email => email.id === id))
}

function emailRead(id) {
    getById(id)
    .then(email => {
        console.log(email.massage.isRead)
        email.massage.isRead = true
        console.log(email.massage.isRead)
    })
}


function getEmailData() {
    return [
        {
            'id': 'OXeMGbwNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel',
                'isRead': false
            }

        },
        {
            'id': 'OXeMGqwNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel',
                'isRead': false
            }
        },
        {
            'id': 'OXeMG8vNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel',
                'isRead': false
            }
        },
        {
            'id': 'OXeaG8wNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel',
                'isRead': true
            }
        },
    ]
}