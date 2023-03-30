import Card from "./Card";
import amazonLogo from '../images/amazon.jpeg'
import blogLogo from '../images/blog.jpg'
import tiktokLogo from '../images/tiktok.jpg'
import igfeedLogo from '../images/shopigfeed.jpeg'

function LinkInBio() {
  return (
    <div className="links">
      <Card image={amazonLogo} title="MY AMAZON STOREFRONT" />
      <Card image={igfeedLogo} title="SHOP MY IG FEED" />
      <Card image={blogLogo} title="LATEST BLOG POST" />
      <Card image={tiktokLogo} title="TIKTOK" />
    </div>
)
}

export default LinkInBio
