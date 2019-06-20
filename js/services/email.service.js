import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'


const EMAIL_KEY = 'email';

var emailDB = [];

export const emailService = {
    query
}


function query() {
    const email = storageService.load(EMAIL_KEY);
    if (!email) {
        email = getEmailData();
        storageService.store(EMAIL_KEY, email)
    }
    emailDB = email;
    console.log(emailDB)
    return Promise.resolve(emailDB);
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
                'name':'itay',
                'thumbnail': ''
            },
            'Date': '',
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name':'itay',
                'thumbnail': ''
            },
            'Date': '',
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name':'itay',
                'thumbnail': ''
            },
            'Date': '',
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
        {
            'id': 'OXeMG8wNskc',
            'from': {
                'name':'itay',
                'thumbnail': ''
            },
            'Date': '',
            'massage': {
                'subject': 'My problems',
                'desc': 'working with oriel'
            }
        },
    ]
}