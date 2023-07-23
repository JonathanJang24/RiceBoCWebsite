import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error404 from './pages/404/404'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import MinistryPage from './pages/MinistryPage/MinistryPage'
import Browse from './pages/Browse/Browse'

const PageRouter = () => {
    return(
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error404/>}/>
          <Route path="/ministry/:id" element={<MinistryPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    )
}

export default PageRouter