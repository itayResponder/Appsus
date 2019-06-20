import { storageService } from '../../../storage.service.js'
// import { utilService } from '../../../util.service.js';

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


function getEmailData() {
    return [
        {
            'id': 'OXeMGbwNskc',
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
            'id': 'OXeMGqwNskc',
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
            'id': 'OXeMG8vNskc',
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
            'id': 'OXeaG8wNskc',
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