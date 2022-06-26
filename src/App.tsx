import "./App.css"
import Header from "./components/header/Header"
import Basic from "./components/basic/Basic"
import Links from "./components/links/Links"
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work"
import Education from "./components/education/Education"
import Submit from "./components/submit/Submit"

import ContextProvider from './context/ContextProvider'


function App() {
  return (
    <ContextProvider>
      <Header/>
      <Basic/>
      <Links/>
      <Intro/>
      <Work/>
      <Education/>
      <Submit/>
    </ContextProvider>
  )
}

export default App
