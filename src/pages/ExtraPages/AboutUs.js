import React from 'react'
import BlackNavigation from '../../components/BlackNavigation/BlackNavigation'
import { useMediaQuery } from 'react-responsive'


const AboutUs = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 600px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <div>
         <BlackNavigation title="About Us" />
        
         <div className="pdl-generic-content_container">
           {/* <div>
           <h1>Device Test!</h1>
      {isDesktopOrLaptop && <>
        <p>You are a desktop or laptop</p>

        {isBigScreen && <p>You also have a huge screen</p>}
        {isTabletOrMobile && <p>You are sized like a tablet or mobile phone though</p>}
      </>}
      {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are retina</p>}

           </div> */}
  <div className="pdl-generic-content_wrapper pdl-generic-content_container--max">
    {isTabletOrMobile ? (
      <h1>mobile</h1>
    ) : (
      <div className="pdl-generic-content_full">
      <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
        <div className="kwm-tile kwm-colors--primary">
          <div className="kwm-tile_image-container" style={{backgroundImage: 'url("https://i5.peapod.com/c/J5/J5ARI.jpg")'}}>
            <div className="kwm-message_container kwm-message_container--left">
              <div className="kwm-message_content">
                <div className="kwm-message">
                  <div className="kwm-message_headline">About Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}

    <div className="pdl-generic-content_full">
      <div className="copy-block spyglass-nav-group_wrapper pdl-generic-content_container--max">
        <div className="copy-block_content copy-block_text-only">
          <div className="copy-block_description">
            <div>Optima Mart is an Indian chain of grocery stores headquartered in New Delhi, India. We aren’t like every other Kirana or grocery store as we specializes in gourmet foods, organic food, unusual frozen food, imported and domestic food, and “alternative" food items. With having the already domestic food products, we will focus more on private-label products contain no artificial flavors, no artificial preservatives, no colors derived from anything other than naturally available products, no genetically modified ingredients, no partially hydrogenated oils (adding trans fat), and no MSG. We bring the local world cuisine at affordable rates which are easily accessible.
             <br/>
              <h2 className="text-center">Also, key factors that make us different are</h2>
              <br/>
              <ul>
                <li>We buy direct from suppliers whenever possible, we bargain hard to get the best price, and then pass the savings on to you</li>
                <li>We buy in volume and contract early to get the best prices.</li>
                <li>Most grocers charge their suppliers fees for putting an item on the shelf. This results in higher prices... so we don’t do it.</li>
                <li>We keep our costs low—because every penny we save is a penny you save.</li>
                <li>Our online grocery store has fresh fruits and vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items &amp; personal care products. We even have a range of every staple and international cuisine product to meet your needs along with organic products for fresh and packaged food items. With our offerings, we have the best online food shop &amp; online grocery shopping platform available for all your grocery products as well as physical grocery stores in select cities.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            
        </div>
    )
}

export default AboutUs
