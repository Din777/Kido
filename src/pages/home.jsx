import React from 'react'
import { CatalogsList } from "../cmps/CatalogsList"
import { catalogsService } from "../services/catalogs-service"

export class Home extends React.Component{
    state={
       catalogs: []
    }

    componentDidMount() {
        const catalogs = catalogsService.query()
        this.setState({ catalogs })
        console.log('catalogs:', catalogs)
    }

    render() {
        const { catalogs } = this.state
        return (
            <section className="home-page middle-layout">
                <div className="catalogs-list">
                    <CatalogsList catalogs={catalogs} />
                </div>
            </section>
        )
    }
}