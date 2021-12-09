import { ItemPreview } from "./ItemPreview"

export function ItemList({ items }) {
    return (
        items.map(item => {
            return <ItemPreview key={item.id} item={item} />
        })
    )
}