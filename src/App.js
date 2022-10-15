import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import React, { useEffect, useState } from "react";

function App() {
    // const [offset, setOffset] = useState(0);
    //
    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);
    //
    // if(offset >90){
    //     document.getElementById('navbar').classList.remove('navbar-active');
    //     document.getElementById('navbar').classList.add('navbar');
    // } else if(offset < 90){
    //     document.getElementById('navbar').classList.add('navbar-active');
    //     document.getElementById('navbar').classList.remove('navbar');
    // }
    return (
      <div className={'main'}>
        <Navbar />
        <Main />
      </div>
  );
}

export default App;
