import { Link } from "react-router-dom";

export function CatalogPreview({ catalog }) {
    return (
        <section className="catalog-preview">
            <Link to="/mini">
            <h2>{catalog.name}</h2>
            <img src={catalog.src} alt="" /></Link>
        </section>
    )
}