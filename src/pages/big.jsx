import React from 'react'
import { ItemList } from '../cmps/ItemList.jsx'
import { bigService } from '../services/big-service.js'

export class Big extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const items = bigService.query()
        this.setState({ items })
        console.log('items:', items)
    }

    render() {
        const { items } = this.state
        return (
            <section className="item-app middle-layout">
                <h2 className="section-name">חוברות גדולות 20.6*24.2 ס"מ</h2>
                <div className="item-list">
                    <ItemList items={items} />
                </div>
            </section>
        )
    }
}