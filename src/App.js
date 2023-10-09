import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import WorkDone from "./components/workdone/WorkDone";
import Testimonials from "./components/testimonials/Testimonials";
import './App.scss'
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const[openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="sections">
        <Banner/>
        <WorkDone/>
        <Testimonials/>
        <Contact/>
      </div>
    </div >
  );
}

export default App;
