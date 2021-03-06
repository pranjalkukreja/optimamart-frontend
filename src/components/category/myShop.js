import React, { useEffect, useState } from "react";

const MyShop = () => {

    return (
        <>

<div className="my-shop-menu visible-above-1200 menu menu--large menu--with-sidebar">
    {/**/}
    <div className="menu_main-content">
      <nav>
        <div className="menutip menutip--left" />
        <ul className="my-shop-menu_nav">
          <li className="nav-item nav-item--with-image"><a id="nav-Savings" href="#" className="nav-item_link">
              {/**/}
              <div className="nav-item_image-container">
                <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Savings" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--prime">
                    <title lang="en">Savings</title>
                    <desc />
                    <g fill stroke>
                      <g>
                        <g id="Savings_GM" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <path id="Stroke-1" d="M26.153,15.5765 C26.153,21.4177847 21.4177847,26.153 15.5765,26.153 C9.73555064,26.153 5,21.4176201 5,15.5765 C5,9.73537986 9.73555064,5 15.5765,5 C21.4177847,5 26.153,9.73521525 26.153,15.5765 Z M24.153,15.5765 C24.153,10.8397847 20.3132153,7 15.5765,7 C10.840104,7 7,10.8399655 7,15.5765 C7,20.3130345 10.840104,24.153 15.5765,24.153 C20.3132153,24.153 24.153,20.3132153 24.153,15.5765 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Stroke-5" d="M14.87885,10.201 L14.87885,11.759 C14.87885,12.3112847 15.3265653,12.759 15.87885,12.759 C16.4311347,12.759 16.87885,12.3112847 16.87885,11.759 L16.87885,10.201 C16.87885,9.64871525 16.4311347,9.201 15.87885,9.201 C15.3265653,9.201 14.87885,9.64871525 14.87885,10.201 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Stroke-7" d="M14.87885,19.3941 L14.87885,20.9521 C14.87885,21.5043847 15.3265653,21.9521 15.87885,21.9521 C16.4311347,21.9521 16.87885,21.5043847 16.87885,20.9521 L16.87885,19.3941 C16.87885,18.8418153 16.4311347,18.3941 15.87885,18.3941 C15.3265653,18.3941 14.87885,18.8418153 14.87885,19.3941 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Dollar" d="M13.5434,20.3941 L16.2869,20.3941 C17.8935669,20.3941 19.1959,19.0920026 19.1959,17.4856 C19.1959,15.8788153 17.8936847,14.5766 16.2869,14.5766 L15.2944,14.5766 C14.792648,14.5766 14.3859,14.1697784 14.3859,13.6676 C14.3859,13.1658847 14.7926847,12.7591 15.2944,12.7591 L17.4369,12.7591 C17.9891847,12.7591 18.4369,12.3113847 18.4369,11.7591 C18.4369,11.2068153 17.9891847,10.7591 17.4369,10.7591 L15.2944,10.7591 C13.6881153,10.7591 12.3859,12.0613153 12.3859,13.6676 C12.3859,15.2742669 13.6879974,16.5766 15.2944,16.5766 L16.2869,16.5766 C16.7891153,16.5766 17.1959,16.9833847 17.1959,17.4856 C17.1959,17.987352 16.7890784,18.3941 16.2869,18.3941 L13.5434,18.3941 C12.9911153,18.3941 12.5434,18.8418153 12.5434,19.3941 C12.5434,19.9463847 12.9911153,20.3941 13.5434,20.3941 Z" fill="#001919" fillRule="nonzero" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div> Savings
            </a>
            {/**/}
          </li>
          <li className="nav-item nav-item--with-image"><a id="nav-Past-Purchases" href="#" className="nav-item_link">
              {/**/}
              <div className="nav-item_image-container">
                <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Past Purchases" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--prime">
                    <title lang="en">Past Purchases</title>
                    <desc />
                    <g fill stroke>
                      <g>
                        <g id="Past-Purchases_GM" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <path id="Stroke-1" d="M25.7383529,26.5101168 C25.7656984,27.0805473 25.3105856,27.558 24.7395,27.558 L7,27.558 C6.42891437,27.558 5.97380163,27.0805473 6.00114706,26.5101168 L6.77714706,10.3226168 C6.80270088,9.78955944 7.24233052,9.3705 7.776,9.3705 L23.9635,9.3705 C24.4971695,9.3705 24.9367991,9.78955944 24.9623529,10.3226168 L25.7383529,26.5101168 Z M23.0102898,11.3705 L8.72921015,11.3705 L8.0490866,25.558 L23.6904134,25.558 L23.0102898,11.3705 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Stroke-5" d="M16.8699,21.98455 L16.8699,14.93605 C16.8699,14.3837653 16.4221847,13.93605 15.8699,13.93605 C15.3176153,13.93605 14.8699,14.3837653 14.8699,14.93605 L14.8699,21.98455 C14.8699,22.5368347 15.3176153,22.98455 15.8699,22.98455 C16.4221847,22.98455 16.8699,22.5368347 16.8699,21.98455 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Stroke-7" d="M13.8928726,18.5931591 C13.5023847,18.2025984 12.8692197,18.2025394 12.4786591,18.5930274 C12.0880984,18.9835153 12.0880394,19.6166803 12.4785274,20.0072409 L15.1625274,22.6917409 C15.553041,23.0823273 16.1862568,23.0823568 16.5768068,22.6918068 L19.2613068,20.0073068 C19.6518311,19.6167825 19.6518311,18.9836175 19.2613068,18.5930932 C18.8707825,18.2025689 18.2376175,18.2025689 17.8470932,18.5930932 L15.8697659,20.5704206 L13.8928726,18.5931591 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Stroke-3" d="M21.24125,10.3705 L21.24125,9.3715 C21.24125,6.40471525 18.8365347,4 15.86975,4 C12.9033703,4 10.49875,6.40481025 10.49875,9.3715 L10.49875,10.3705 C10.49875,10.9227847 10.9464653,11.3705 11.49875,11.3705 C12.0510347,11.3705 12.49875,10.9227847 12.49875,10.3705 L12.49875,9.3715 C12.49875,7.50934438 14.0079751,6 15.86975,6 C17.7319653,6 19.24125,7.50928475 19.24125,9.3715 L19.24125,10.3705 C19.24125,10.9227847 19.6889653,11.3705 20.24125,11.3705 C20.7935347,11.3705 21.24125,10.9227847 21.24125,10.3705 Z" fill="#001919" fillRule="nonzero" />
                          <path id="Line" d="M11.25035,11.3705 L20.8969564,11.3705 C21.4492412,11.3705 21.8969564,10.9227847 21.8969564,10.3705 C21.8969564,9.81821525 21.4492412,9.3705 20.8969564,9.3705 L11.25035,9.3705 C10.6980653,9.3705 10.25035,9.81821525 10.25035,10.3705 C10.25035,10.9227847 10.6980653,11.3705 11.25035,11.3705 Z" fill="#001919" fillRule="nonzero" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div> Past Purchases
            </a>
            {/**/}
          </li>
          <li className="nav-item nav-item--with-image"><a id="nav-Recommended-For-You" href="#" className="nav-item_link">
              {/**/}
              <div className="nav-item_image-container">
                <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Recommended For You" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--prime">
                    <title lang="en">Recommended For You</title>
                    <desc />
                    <g fill stroke>
                      <g>
                        <g id="For-You_GM" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <path id="Combined-Shape" d="M10.1661184,13.9382844 C12.4086821,13.1096104 13.9200289,10.9523626 13.7026864,6.69279819 C13.6073871,5.83652644 14.210365,5.11376348 15.1010234,5.01573727 C17.4610599,4.86432152 19.34155,5.63292963 19.34155,8.08668546 L19.34155,12.1026855 L23.72505,12.1026855 L23.920319,12.1219357 C24.4600689,12.2294009 24.8832333,12.3576867 25.4071399,12.6572811 C26.7505194,13.4254883 27.430554,14.7949757 27.0143892,16.6332944 L25.6868222,23.5922659 C25.6285579,24.0582057 25.4440352,24.6907535 25.0409055,25.3357129 C24.3439643,26.4507354 23.2187007,27.1431855 21.68505,27.1431855 L12.32255,27.1431855 C11.8468273,27.1431855 11.2033127,27.035913 10.5380195,26.7032042 C10.3715057,26.6199317 10.2139389,26.526244 10.0661694,26.4222449 C9.67229215,26.8447136 9.10976233,27.1093855 8.4775,27.1093855 L6.1705,27.1093855 C4.97552271,27.1093855 4,26.1533103 4,24.9393855 L4,15.6103855 C4,14.4152662 4.956222,13.4398855 6.1705,13.4398855 L8.4775,13.4398855 C9.04544927,13.4398855 9.56651237,13.664569 9.955674,14.0289208 C10.0237182,13.9956245 10.0939079,13.9653464 10.1661184,13.9382844 Z M8.4775,15.4398855 L6.1705,15.4398855 C6.06976935,15.4398855 6,15.5110527 6,15.6103855 L6,24.9393855 C6,25.0396261 6.07117831,25.1093855 6.1705,25.1093855 L8.4775,25.1093855 C8.57796068,25.1093855 8.648,25.0379851 8.648,24.9393855 L8.648,15.6103855 C8.648,15.5271702 8.56071525,15.4398855 8.4775,15.4398855 Z M10.64805,16.1451855 L10.64805,23.4681855 C10.64805,24.2457198 10.9243567,24.6602573 11.4325805,24.9144167 C11.7702248,25.0832705 12.1296477,25.1431855 12.32255,25.1431855 L21.68505,25.1431855 C22.4920243,25.1431855 22.9968857,24.8325105 23.3449445,24.275658 C23.5688148,23.9174924 23.6769171,23.5469152 23.7122108,23.2810766 L25.056662,16.2256901 C25.2771415,15.250372 25.0250527,14.742703 24.4143147,14.3934544 C24.1522802,14.2436108 23.9201059,14.1667095 23.6228566,14.1026855 L18.84305,14.1026855 C17.9904927,14.1026855 17.34155,13.4223124 17.34155,12.6011855 L17.34155,8.08668546 C17.34155,7.33617533 16.748812,7.00562018 15.7131463,6.99498227 C15.8387408,11.9213701 13.811666,14.7223559 10.8658222,15.8118954 C10.7305136,15.8635731 10.64805,15.9858816 10.64805,16.1451855 Z" fill="#001919" fillRule="nonzero" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div> Recommended For You
            </a>
            {/**/}
          </li>
          <li className="nav-item nav-item--with-image"><a id="nav-GO-Rewards" href="#" className="nav-item_link">
              {/**/}
              <div className="nav-item_image-container">
                <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="{{brand.rewardsProgramName}}" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--prime">
                    <title lang="en">{'{'}{'{'}brand.rewardsProgramName{'}'}{'}'}</title>
                    <desc />
                    <g fill stroke>
                      <g>
                        <g id="Rewards_GM" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <path id="Stroke-1" d="M12.0565153,12.1372601 L16.0019307,3.62131166 L19.9479489,12.1372601 L29.2661797,13.258486 L22.3863921,19.6427698 L24.2002538,28.851931 L16.0020179,24.2814145 L7.80438479,28.851931 L9.6176382,19.6427979 L2.73780436,13.2584712 L12.0565153,12.1372601 Z M13.4024847,13.9897399 L7.26219564,14.7285288 L11.7953618,18.9352021 L10.6006152,25.003069 L16.0019821,21.9915855 L21.4037462,25.003069 L20.2086079,18.9352302 L24.7418203,14.728514 L18.6020511,13.9897399 L16.0020693,8.37868834 L13.4024847,13.9897399 Z" fill="#001919" fillRule="nonzero" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div> GO Rewards
            </a>
            {/**/}
          </li>
          <li className="nav-item nav-item--with-image"><a id="nav-Shopping-List" href="#" className="nav-item_link">
              {/**/}
              <div className="nav-item_image-container">
                <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping List" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--prime">
                    <title lang="en">Shopping List</title>
                    <desc />
                    <g fill stroke>
                      <g>
                        <g opco="STSH" strokeWidth={3}>
                          <path d="M20.425 11.457c-0.552 0-1-0.448-1-1v-4.624h-11.258v20.876h16.882v-15.252h-4.624zM27.049 27.709c0 0.552-0.448 1-1 1h-18.882c-0.552 0-1-0.448-1-1v-22.876c0-0.552 0.448-1 1-1h13.202c0.265-0.017 0.542 0.072 0.763 0.293l5.624 5.624c0.221 0.221 0.31 0.498 0.293 0.763v17.196zM23.634 9.457l-2.209-2.21v2.21h2.209zM11.81 16.178c-0.552 0-1-0.448-1-1s0.448-1 1-1h9.333c0.552 0 1 0.448 1 1s-0.448 1-1 1h-9.333zM11.81 20.262c-0.552 0-1-0.448-1-1s0.448-1 1-1h9.333c0.552 0 1 0.448 1 1s-0.448 1-1 1h-9.333zM11.81 24.345c-0.552 0-1-0.448-1-1s0.448-1 1-1h9.333c0.552 0 1 0.448 1 1s-0.448 1-1 1h-9.333z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div> Shopping List
            </a>
            {/**/}
          </li>
          <li className="nav-item nav-item--with-image"><a id="nav-Recipes" href="https://recipecenter.stopandshop.com/savory/recipes" target="_blank" className="nav-item_link">
              {/**/}
              <div className="nav-item_image-container">
                <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Recipes" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--prime">
                    <title lang="en">Recipes</title>
                    <desc />
                    <g fill stroke>
                      <g>
                        <g>
                          <path d="M15.324 13.398l-10.005 10.005c-0.425 0.425-0.425 1.111-0.005 1.536l2.307 2.306c0.425 0.425 1.116 0.425 1.541-0l10.005-10.005c1.51 0.268 3.075-0.201 4.19-1.315l4.622-4.623-1.414-1.414-4.622 4.623c-0.725 0.725-1.779 0.977-2.746 0.684-0.377-0.118-0.797-0.015-1.083 0.271l-9.722 9.721-1.014-1.014 9.722-9.722c0.286-0.292 0.387-0.706 0.27-1.087-0.293-0.964-0.040-2.018 0.684-2.743l4.622-4.622-1.414-1.414-4.622 4.622c-1.116 1.116-1.584 2.684-1.315 4.19zM18.789 17.143c-0.060-0.006-0.121-0.018-0.18-0.037 0.066 0.020 0.133 0.039 0.2 0.056l-0.020-0.019z">
                          </path>
                          <path d="M20.005 13.973l5.385-5.385-1.414-1.414-5.385 5.385z" />
                          <path d="M15.11 16.441l1.414-1.414-9.337-9.337-0.707 0.707c-0.592 0.592-1.007 1.232-1.245 1.913-0.763 2.187 0.308 4.353 2.439 6.405 0.552 0.532 1.14 1.017 1.729 1.45 0.355 0.261 0.635 0.449 0.804 0.554 0.076 0.053 0.281 0.196 0.555 0.391 0.457 0.326 0.936 0.678 1.41 1.041l0.794 0.608 1.216-1.588-0.794-0.608c-0.494-0.378-0.991-0.744-1.466-1.082-0.286-0.204-0.502-0.354-0.625-0.438-0.162-0.102-0.4-0.261-0.711-0.489-0.521-0.383-1.043-0.814-1.526-1.279-1.626-1.565-2.369-3.068-1.938-4.305 0.041-0.119 0.094-0.238 0.158-0.356l7.829 7.829z">
                          </path>
                          <path d="M22.359 25.15l-6.965-6.965-1.414 1.414 8.38 8.38 3.558-3.558-8.379-8.38-1.415 1.414 6.966 6.966z" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div> Recipes
            </a>
            {/**/}
          </li>
          {/**/}
        </ul>
      </nav>
    </div>
    <aside className="menu_sidebar">
      <div className="large-tile_container spyglass-nav-group_wrapper">
        {/**/}<a href="#" className="large-tile large-tile--clickable"><img src="https://i5.peapod.com/c/ZJ/ZJIIZ.jpg" alt="Healthy meal on the table" className="large-tile_image" />
          <div className="large-tile_content">
            <h2 className="h6-bold large-tile_text-block">Make the most of a fresh start</h2>
            <div className="large-tile_description">
              <p className="large-tile_text-block"><span>This year, eat better without breaking the bank.</span></p>
            </div>
            <div className="large-tile_cta"><button className="btn btn--secondary btn--block"> Shop Now </button></div>
          </div>
          {/**/}
        </a></div>
    </aside>
  </div>

        </>
    )


}

export default MyShop;