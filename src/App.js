import { Route, Switch } from 'react-router-dom'
import '../src/assets/styles/scss/style.scss'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/about.jsx'
import { ContactUs } from './pages/contact-us.jsx'
import { Home } from './pages/home.jsx'
import { Footer } from './cmps/Footer.jsx'
import { Mini } from './pages/mini.jsx'
import { Medium } from './pages/medium.jsx'
import { Big } from './pages/big'
import { Games } from './pages/games'
import { Stickers } from './pages/stickers'


export function App() {
  return (<>
    <div className="app">
      <AppHeader />
      <div className="not-up-section">
        <Switch>
          <Route component={ContactUs} path="/contact-us" />
          <Route component={About} path="/about" />
          <Route component={Stickers} path="/stickers" />
          <Route component={Games} path="/games" />
          <Route component={Big} path="/big" />
          <Route component={Medium} path="/medium" />
          <Route component={Mini} path="/mini" />
          <Route component={Home} path="/" />
        </Switch>
        <Footer />
      </div>
    </div>
  </>)
}