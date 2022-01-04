import React from 'react'
import { ItemList } from '../cmps/ItemList.jsx'
import { miniService } from '../services/mini-service.js'

export class Mini extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const items = miniService.query()
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