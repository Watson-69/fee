import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Store from './store.jsx'
// import Showlist from './showlist.jsx'
// import {ShowList2} from './ShowList2.jsx'
// import {RfDemo} from './RfDemo.jsx'
import { Footer } from './Footer.jsx' 
import Stamp from './Stamp.jsx' 
import { Header } from './Header.jsx'
import './index3.css'
// import {Notes} from './Notes.jsx'
import Notes from './Notes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Notes></Notes>
    <Footer />
    <Stamp />
  </StrictMode>,
)