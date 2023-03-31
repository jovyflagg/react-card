import Card from "./Card";
import amazonLogo from '../images/amazon.jpeg'
import blogLogo from '../images/blog.jpg'
import tiktokLogo from '../images/tiktok.jpg'
import igfeedLogo from '../images/shopigfeed.jpeg'

function LinkInBio() {

  let note = "(Coming Soon)";
  return (
    <div className="links">
      <Card image={amazonLogo} title="MY AMAZON STOREFRONT" note={note} />
      <Card image={igfeedLogo} title="SHOP MY IG FEED" note={note}/>
      <Card image={blogLogo} title="LATEST BLOG POST" note={note}/>
      <Card image={tiktokLogo} title="TIKTOK" note={note}/>
    </div>
)
}

export default LinkInBio
