import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";
import Heroimg from "../Images/12.jpg"
function Home(){
  return(
    <>
     <Navbar/>
    <Hero 
     cName="hero"
     heroImg={Heroimg}
     title="Your Journey Your Story"
     text="Choose your Favorite Destination"
     buttonText="Travel Plan"
     url="/"
     btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}
export default Home;