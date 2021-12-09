import { CatalogPreview } from "./CatalogPreview"

export function CatalogsList({ catalogs }) {
    return (
        catalogs.map(catalog => {
            return <CatalogPreview key={catalog.id} catalog={catalog} />
        })
    )
}