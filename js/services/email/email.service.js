import { storageService } from '../main/storage.service.js'
import { utilService } from '../util.service.js'


const EMAIL_KEY = 'email';

var emailDB = [];

export const emailService = {
    query,
    getById
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
    query()
    return Promise.resolve(emailDB.find(email => email.id === id))
}
/* email containes:
id
from
Date
subject
desc
 */

function getEmailData() {
    return [
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name': 'itay',
                'thumbnail': ''
            },
            'date': Date.now(),
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
    ]
}