export const mediumService = {
    query
}

var items = [
    { id: 'md201', catalogId: '1101', name: 'קו-קו 1-25 + 1-50', price: 98, src: 'https://res.cloudinary.com/suny/image/upload/v1639044356/Kido/501_nitgzq.jpg' },
    { id: 'md202', catalogId: '1104', name: 'ציורון כולל סרגל ציור', price: 101, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/502_qqv9xu.jpg' },
    { id: 'md203', catalogId: '1106', name: 'קו-קו 1-50 + 1-75', price: 77, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/503_ghnl8b.jpg' },
    { id: 'md204', catalogId: '1108', name: 'קו-קו 1-75 + 1-100', price: 89, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/504_a9yqrv.jpg' },
    { id: 'md205', catalogId: '1110', name: 'קו-חץ', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/505_uh6e9y.jpg' },
    { id: 'md206', catalogId: '1111', name: 'האדריכל הצעיר- כולל סרגל ציור', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/507_bpbbgw.jpg' },
    { id: 'md207', catalogId: '1112', name: 'פרצופון- כולל סרגל ציור', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/508_rb4qvd.jpg' },
    { id: 'md208', catalogId: '1113', name: 'מספר לצבע', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044366/Kido/509_g5xjeo.jpg' },
    { id: 'md209', catalogId: '1114', name: 'שעשועי מבוכים', price: 81, src: 'https://res.cloudinary.com/suny/image/upload/v1639044367/Kido/510_dsy7ku.jpg' }
]

function query() {
    // return Promise.resolve(items)
    return items
}