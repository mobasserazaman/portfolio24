import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useRef, useState } from "react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Downloads from "./components/Downloads";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {

  const [content, setContent] = useState('Profile');
  const downloadsRef = useRef();

  function handleSetContent(content){
    console.log(content)
    if(content === 'Downloads'){
      //open Modal
      downloadsRef.current.open();
    }else{
      setContent(content);
    }
  }

  let show = <Profile/>
  if(content === 'Profile'){
    show = <Profile/>
  }else if(content === 'Experience'){
    show = <Experience/>
  }else if(content === 'Skills'){
    show = <Skills/>
  }else if(content === 'Projects'){
    show = <Projects/>
  }else if(content === 'About'){
    show = <About/>
  }else if(content === 'Contact'){
    show = <Contact/>
  }

  return (
    <main className="flex my-20 h-screen">
    <Sidebar onSelect={handleSetContent}/>
    <div className="text-stone-500 w-3/4">
      <Downloads ref={downloadsRef}/>
      {show}
    </div>
    </main>


  );
}

export default App;
