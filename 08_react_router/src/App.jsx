import { About } from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import { Home } from "./Components/Home/Home"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
