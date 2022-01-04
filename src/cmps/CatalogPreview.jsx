import React from 'react'
import { Link } from "react-router-dom";

// export function CatalogPreview({ catalog }) {
//     return (
//         <section className="catalog-preview">
//             <Link to="/catalog.englishName">
//                 <h2>{catalog.englishName}</h2>
//                 <h2>{catalog.name}</h2>
//                 <img src={catalog.src} alt="" /></Link>
//         </section>
//     )
// }

export class CatalogPreview extends React.Component {
    render() {
        var catalogName = this.props.catalog.englishName
        console.log('catalogName', catalogName);
        return (
            <section className="catalog-preview">
                <Link to={`/${catalogName}`}>
                    <h2>{this.props.catalog.name}</h2>
                
                    <img src={this.props.catalog.src} alt="" /></Link>
            </section>
        )
    }
}