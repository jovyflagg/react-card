import profilepic from "./images/profilepic.jpg";
import LinkInBio from "./components/LinkInBio";
import Style from "./style.css";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="profile">
        <img src={profilepic} />
        <h1>Jane Smith</h1>
        <p>Hi Friends! I linked everything in my feed and all my favorites and latest
        here. Happy scrolling!</p>
        </div>
      
      <LinkInBio />
      <Footer />
    </div>
  );
}

export default App;
