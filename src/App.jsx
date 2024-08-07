import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Quickfacts from "./Components/Quickfacts"
import Requirements from "./Components/Requirements"
import StudyInCanada from "./Components/StudyInCanada"
import Tabs from "./Components/tabs"
import Exams from "./Components/Exams"
import PopularPrograms from "./PopularPrograms"
import TopUniversities from "./TopUniversities"
import Guidance from "./Components/guidance"
import Documents from "./Components/Documents"
import Expert from "./Components/Expert"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <StudyInCanada/>
     <Quickfacts/>
     <Tabs/>
     <PopularPrograms/>
     <TopUniversities/>
     <Requirements/>
     <Exams/>
     <Guidance/>
     <Documents/>
     <Expert/>
     <Footer/>
    </>
  )
}

export default App
