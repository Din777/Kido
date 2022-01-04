export const bigService = {
    query
}

var items = [
    { id: 'bg401', catalogId: '1131', name: 'דגמי בוקי', price: 98, src: 'https://res.cloudinary.com/suny/image/upload/v1639044356/Kido/501_nitgzq.jpg' },
    { id: 'bg402', catalogId: '1132', name: 'חפש את המילים - 1', price: 101, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/502_qqv9xu.jpg' },
    { id: 'bg403', catalogId: '1133', name: 'קו-קו עד 260', price: 77, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/503_ghnl8b.jpg' },
    { id: 'bg404', catalogId: '1134', name: 'דגמי בוקי', price: 89, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/504_a9yqrv.jpg' },
    { id: 'bg405', catalogId: '1135', name: 'חפש את המילים - 2', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/505_uh6e9y.jpg' },
    { id: 'bg406', catalogId: '1136', name: 'דגמי בוקי', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/507_bpbbgw.jpg' },
    { id: 'bg407', catalogId: '1138', name: 'דגמי בוקי לקטנטנים', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/508_rb4qvd.jpg' },
    { id: 'bg408', catalogId: '1139', name: 'חשבץ = תשבץ חשבוני', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/509_g5xjeo.jpg' },
    { id: 'bg409', catalogId: '1142', name: 'פסיפס מספר וצבע', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044367/Kido/510_dsy7ku.jpg' }
]

function query() {
    // return Promise.resolve(items)
    return items
}