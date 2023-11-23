import './App.css'
import { useEffect } from 'react';
import { Content } from './layout/Content'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { HiChevronUp } from "react-icons/hi";

function App() {
    
  function scrollFunction( mybutton: HTMLElement | null) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton!.style.display = "flex";
    } else {
      mybutton!.style.display = "none";
    }
  }
  useEffect(()=> {
      const mybutton = document.getElementById("myBtn");
      window.onscroll = function() {
        scrollFunction(mybutton)
      };
  },[])
  return (
    <>
      <Header/>  
      <Content/>      
      <Footer/>
      <a href='#mint' id='myBtn' className="hidden fixed bottom-5 right-5 w-10 rounded-full h-10 bg-black items-center justify-center z-50">
          <HiChevronUp className="w-[30px] h-[30px]" />
      </a>
    </>
  )
}

export default App
