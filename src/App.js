import { Route, Switch } from 'react-router-dom'
import { ItemApp } from './pages/item-app.jsx'
import '../src/assets/styles/scss/style.scss'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/about.jsx'
import { ContactUs } from './pages/contact-us.jsx'
import { Home } from './pages/home.jsx'
import { Footer } from './cmps/Footer.jsx'


export function App() {
  return (<>
    <div className="app">
      <AppHeader />
      <div className="not-up-section">
        <Switch>
          <Route component={ContactUs} path="/contact-us" />
          <Route component={About} path="/about" />
          <Route component={ItemApp} path="/mini" />
          <Route component={Home} path="/" />
        </Switch>
        {/* <ItemApp />
      <About />
    <ContactUs /> */}
        <Footer />
      </div>
    </div>
  </>)
}