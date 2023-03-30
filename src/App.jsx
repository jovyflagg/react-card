import profilepic from './images/profilepic.jpg'
import LinkInBio from './components/LinkInBio'
import style from './style.css'

function App() {
  return (
  
  <div className="App">
    <img src={profilepic}/>
    <h1>Viva La Jovy</h1>
    <h3>Hi Fam! I linked everything in my feed and all my favorites and latest here. Happy scrolling!</h3>
    <LinkInBio />
  </div>
  )
}

export default App
