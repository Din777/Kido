export const itemService = {
    query
}

var items = [
    { id: '501', name: '1 עד 10 קו-קט', price: 98, src: 'https://res.cloudinary.com/suny/image/upload/v1639044356/Kido/501_nitgzq.jpg' },
    { id: '502', name: 'הצייר הפעוט', price: 101, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/502_qqv9xu.jpg' },
    { id: '503', name: 'מספר וצבע', price: 77, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/503_ghnl8b.jpg' },
    { id: '504', name: 'ציור בריבוע', price: 89, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/504_a9yqrv.jpg' },
    { id: '505', name: 'דגמי בוקי', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/505_uh6e9y.jpg' },
    { id: '507', name: 'מבוך קט', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/507_bpbbgw.jpg' },
    { id: '508', name: 'חיות מחמד', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/508_rb4qvd.jpg' },
    { id: '509', name: 'קו-חץ', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/509_g5xjeo.jpg' },
    { id: '510', name: '1 עד 10 קו-קט', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044367/Kido/510_dsy7ku.jpg' }
]

function query() {
    // return Promise.resolve(items)
    return items
}