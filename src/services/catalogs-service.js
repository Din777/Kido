export const catalogsService = {
    query
}

var catalogs = [
    { id: 'c101', name: 'חוברות מיני', englishName: 'mini', src: 'https://res.cloudinary.com/suny/image/upload/v1614183732/InstaApp/buzz_wpw2xr.jpg' },
    { id: 'c102', name: 'חוברות בינוניות',englishName: 'medium', src: 'https://res.cloudinary.com/suny/image/upload/v1611162935/InstaApp/monkey_sou3nq.jpg' },
    { id: 'c103', name: 'חוברות גדולות',englishName: 'big', src: 'https://res.cloudinary.com/suny/image/upload/v1617818931/InstaApp/buzz-2_jsvqbw.jpg' },
    { id: 'c104', name: 'משחקים',englishName: 'games', src: 'https://res.cloudinary.com/suny/image/upload/v1611162690/InstaApp/kot_mucgl5.jpg' },
    { id: 'c105', name: 'מדבקות איכות',englishName: 'stickers', src: 'https://res.cloudinary.com/suny/image/upload/v1611759282/InstaApp/book_shell_bs1y5j.jpg' }
]

function query() {
    // return Promise.resolve(catalogs)
    return catalogs
}