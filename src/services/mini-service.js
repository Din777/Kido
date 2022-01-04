export const miniService = {
    query
}

var items = [
    { id: 'mn301', catalogId: '501', name: '1 עד 10 קו-קט', price: 98, src: 'https://res.cloudinary.com/suny/image/upload/v1639044356/Kido/501_nitgzq.jpg' },
    { id: 'mn302', catalogId: '502', name: 'הצייר הפעוט', price: 101, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/502_qqv9xu.jpg' },
    { id: 'mn303', catalogId: '503', name: 'מספר וצבע', price: 77, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/503_ghnl8b.jpg' },
    { id: 'mn304', catalogId: '504', name: 'ציור בריבוע', price: 89, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/504_a9yqrv.jpg' },
    { id: 'mn305', catalogId: '505', name: 'דגמי בוקי', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/505_uh6e9y.jpg' },
    { id: 'mn306', catalogId: '507', name: 'מבוך קט', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/507_bpbbgw.jpg' },
    { id: 'mn307', catalogId: '508', name: 'חיות מחמד', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/508_rb4qvd.jpg' },
    { id: 'mn308', catalogId: '509', name: 'קו-חץ', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/509_g5xjeo.jpg' },
    { id: 'mn309', catalogId: '510', name: '1 עד 10 קו-קט', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044367/Kido/510_dsy7ku.jpg' }
]

function query() {
    // return Promise.resolve(items)
    return items
}