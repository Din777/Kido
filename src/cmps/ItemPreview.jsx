export function ItemPreview({ item }) {
    return (
        <section className="item-preview">
            {/* <h3>מק"ט: {item.id}</h3>
            <h3>שם מוצר: {item.name}</h3> */}
            <img src={item.src} alt="" />
        </section>
    )

}