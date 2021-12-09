import React from 'react'
import { ItemList } from '../cmps/ItemList.jsx'
import { itemService } from '../services/item-service.js'

export class ItemApp extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const items = itemService.query()
        this.setState({ items })
        console.log('items:', items)
    }

    render() {
        const { items } = this.state
        return (
            <section className="item-app middle-layout">
                <h2 className="section-name">חוברות מיני 17*16 ס"מ</h2>
                <div className="item-list">
                    <ItemList items={items} />
                </div>
            </section>
        )
    }
}