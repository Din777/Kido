import React from 'react'
import { ItemList } from '../cmps/ItemList.jsx'
import { mediumService } from '../services/medium-service.js'

export class Medium extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const items = mediumService.query()
        this.setState({ items })
        console.log('items:', items)
    }

    render() {
        const { items } = this.state
        return (
            <section className="item-app middle-layout">
                <h2 className="section-name">חוברות בינוניות 14.8*22 ס"מ</h2>
                <div className="item-list">
                    <ItemList items={items} />
                </div>
            </section>
        )
    }
}