import { Component } from 'react'
import { Link } from 'react-router-dom'


export class AppHeader extends Component {

    scrollToTop() {
        window.scrollTo(0, 0)
    }

    toggleMenu() {
        console.log('toggleMenu clicked')
    }

    render() {
        return (
            <section className="app-header">
                <header className="header-layout">
                    <div className="header-container main-layout flex space-between">
                        <div className="header-logo" onClick={this.scrollToTop}>
                            <span className="K">K</span>
                            <span className="I">I</span>
                            <span className="D">D</span>
                            <span className="O">O</span>
                        </div>
                        <input type="text" name="text" placeholder="חיפוש" autoComplete="off" className="search-input flex align-center justify-center" />
                        <div className="header-menu">
                            <ul className="menu-list clean-list">
                                <li><Link to="/">Catalogs</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact-us">Contact us</Link></li>
                            </ul>
                        </div>
                        {/* <button class="menu-btn" onclick={this.toggleMenu}>☰</button> */}
                    </div>
                </header>
            </section>
        )
    }
}