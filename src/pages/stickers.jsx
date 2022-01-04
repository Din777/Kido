import React from 'react'
import { ItemList } from '../cmps/ItemList.jsx'
import { stickersService } from '../services/stickers-service.js'

export class Stickers extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const items = stickersService.query()
        this.setState({ items })
        console.log('items:', items)
    }

    render() {
        const { items } = this.state
        return (
            <section className="item-app middle-layout">
                <h2 className="section-name">מדבקות</h2>
                <div className="item-list">
                    <ItemList items={items} />
                </div>
            </section>
        )
    }
}