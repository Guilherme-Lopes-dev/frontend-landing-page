import React from 'react';
import './App.css';
import Footer from './home/Footer';
import Section from './home/Section';
import Header from './home/Header';
import useSidebar from './util/useSidebar';
import Sidebar from './home/components/Sidebar'
function App() {

  const {toggleSidebar, sidebar} = useSidebar();

  return (
    <div className="App">
     {!sidebar ? 
     <Sidebar /> :
      <>
      <Header/>
      <Section/>
      <Footer/>
      </>}
      
    </div>
  );
}

export default App;


// é pra ter um <Header></Header> com <Navbar></Navbar>
//<section></section> com 2 <article></article>
//<footer></footer>