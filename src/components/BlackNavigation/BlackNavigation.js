import react from 'react'
import { Link, useHistory } from "react-router-dom";

const BlackNavigation = ({ title }) => {
  let history = useHistory();

  return (
    <div>
      <div className="title-bar">
        <div className="title-bar_left">
         
          <button className="title-bar_back-button" onClick={() => history.goBack()}><span className="element-invisible"> Back </span>
            <div className="title-bar_back-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Back" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
              <title lang="en">Back</title>
              <desc />
              <g fill stroke="white">
                <polyline fill="none" strokeWidth={2} strokeLinecap="square" transform="translate(15.242750, 16.485250) rotate(-180.000000) translate(-15.242750, -16.485250)" points="11 8 19.4855 16.485 11 24.9705" />
              </g>
            </svg></div>
          </button>
          {/**/}
        </div>
        <h1 className="title-bar_text"> {title} </h1>
        <div className="title-bar_right">
          {/**/}
          {/**/}
          {/**/}
        </div>
      </div>
    </div>

  )
}

export default BlackNavigation;