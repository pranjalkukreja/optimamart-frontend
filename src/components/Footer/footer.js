import React, { useState } from "react";
import Modal from 'react-modal';


const Footer = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);


    return (
        <footer className="site-footer">
        <div className="site-footer_max-width-container">
          <div className="spyglass-nav-group_wrapper site-footer_link-section">
            {/**/}
            <div id="site-footer_robot-col-id-2" className="site-footer_col site-footer_col_2">
              <div>
                <div className="accordion-list">
                  <div className="accordion-list_parent-bar"><a className="accordion-list_parent">About</a></div>
                  <div>
                    <ul className="accordion-list_child-link-list--is-expanded">
                      <li className="accordion-list_child"><a href="/about-us" className="accordion-list_child-link"> About Us </a></li>
                      {/* <li className="accordion-list_child"><a href aria-label="footer private brands" className="accordion-list_child-link"> Private Brands </a></li> */}
                      {/* <li className="accordion-list_child"><a href aria-label="footer store departments" className="accordion-list_child-link"> Store Departments </a></li> */}
                      {/* <li className="accordion-list_child"><a href aria-label="footer news & media" className="accordion-list_child-link"> News &amp; Media </a></li> */}
                      {/* <li className="accordion-list_child"><a href aria-label="footer community" className="accordion-list_child-link"> Community </a></li> */}
                      {/* <li className="accordion-list_child"><a href aria-label="footer a+ school rewards" className="accordion-list_child-link"> A+ School Rewards </a></li> */}
                      {/* <li className="accordion-list_child"><a href aria-label="footer guiding stars" className="accordion-list_child-link"> Guiding Stars </a></li> */}
                      {/* <li className="accordion-list_child"><a href aria-label="footer security" className="accordion-list_child-link"> Security </a></li> */}
                      <li className="accordion-list_child"><a target="_blank" href="/shop" aria-label="footer products" className="accordion-list_child-link"> Products </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="site-footer_robot-col-id-3" className="site-footer_col site-footer_col_3">
              <div>
                <div className="accordion-list">
                  <div className="accordion-list_parent-bar"><a className="accordion-list_parent">Customer Support</a></div>
                  <div>
                    <ul className="accordion-list_child-link-list--is-expanded">
                      <li className="accordion-list_child"><a onClick={() => setIsModalVisible(true)} aria-label="footer contact us" className="accordion-list_child-link"> Contact Us </a></li>
                      {/* <li className="accordion-list_child"><a href aria-label="footer help" className="accordion-list_child-link"> Help </a></li>
                      <li className="accordion-list_child"><a href aria-label="footer coupon policy" className="accordion-list_child-link"> Coupon Policy </a></li>
                      <li className="accordion-list_child"><a href aria-label="footer food safety" className="accordion-list_child-link"> Food Safety </a></li>
                      <li className="accordion-list_child"><a href aria-label="footer product recalls" className="accordion-list_child-link"> Product Recalls </a></li>
                      <li className="accordion-list_child"><a target="_blank" href="https://refer.stopandshop.com/consumer_global_footer" aria-label="footer refer-a-friend" className="accordion-list_child-link"> Refer-a-friend </a></li>
                      <li className="accordion-list_child"><a href aria-label="footer covid-19" className="accordion-list_child-link"> COVID-19 </a></li>
                      <li className="accordion-list_child"><a href aria-label="footer business delivery" className="accordion-list_child-link"> Business Delivery </a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div id="site-footer_robot-col-id-4" className="site-footer_col site-footer_col_4">
              <div>
                <div className="accordion-list">
                  <div className="accordion-list_parent-bar"><a className="accordion-list_parent">Company</a></div>
                  <div>
                    <ul className="accordion-list_child-link-list--is-expanded">
                      <li className="accordion-list_child"><a href aria-label="footer careers" className="accordion-list_child-link"> Careers </a></li>
                      <li className="accordion-list_child"><a target="_blank" href="https://www.ssneac.com" aria-label="footer associate connect" className="accordion-list_child-link"> Associate Connect </a></li>
                      <li className="accordion-list_child"><a target="_blank" href="https://www.rangeme.com/aholddelhaizeusbrands" aria-label="footer new suppliers" className="accordion-list_child-link"> New Suppliers </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="social-media-callouts spyglass-nav-group_wrapper">
            {/**/} <a target="_blank" href="https://www.pinterest.com/" aria-label="Our Pinterest">
              <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Pinterest" viewBox="0 0 30 30" role="presentation" aria-hidden="true" focusable="false" className>
                  <title lang="en">Pinterest</title>
                  <desc />
                  <g fill stroke>
                    {/**/}
                    <path d="M0 9.328c0-5.766 5.281-9.328 10.625-9.328 4.906 0 9.375 3.375 9.375 8.547 0 4.859-2.484 10.25-8.016 10.25-1.313 0-2.969-0.656-3.609-1.875-1.188 4.703-1.094 5.406-3.719 9l-0.219 0.078-0.141-0.156c-0.094-0.984-0.234-1.953-0.234-2.938 0-3.187 1.469-7.797 2.188-10.891-0.391-0.797-0.5-1.766-0.5-2.641 0-1.578 1.094-3.578 2.875-3.578 1.313 0 2.016 1 2.016 2.234 0 2.031-1.375 3.938-1.375 5.906 0 1.344 1.109 2.281 2.406 2.281 3.594 0 4.703-5.187 4.703-7.953 0-3.703-2.625-5.719-6.172-5.719-4.125 0-7.313 2.969-7.313 7.156 0 2.016 1.234 3.047 1.234 3.531 0 0.406-0.297 1.844-0.812 1.844-0.078 0-0.187-0.031-0.266-0.047-2.234-0.672-3.047-3.656-3.047-5.703z">
                    </path>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </g>
                </svg></div>
            </a><a target="_blank" href="https://www.facebook.com/optimamart" aria-label="Our Facebook">
              <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Facebook" viewBox="0 0 30 30" role="presentation" aria-hidden="true" focusable="false" className>
                  <title lang="en">Facebook</title>
                  <desc />
                  <g fill stroke>
                    <path d="M16.625 5.25h4.375v-5.25h-4.375c-3.377 0-6.125 2.748-6.125 6.125v2.625h-3.5v5.25h3.5v14h5.25v-14h4.375l0.875-5.25h-5.25v-2.625c0-0.474 0.401-0.875 0.875-0.875z" />
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </g>
                </svg></div>
            </a><a target="_blank" href="https://www.instagram.com/optima.mart/" aria-label="Our Instagram">
              <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Instagram" viewBox="0 0 30 30" role="presentation" aria-hidden="true" focusable="false" className>
                  <title lang="en">Instagram</title>
                  <desc />
                  <g fill stroke>
                    {/**/}
                    {/**/}
                    <g>
                      <path d="M14 2.521c3.741 0 4.184 0.016 5.655 0.082 1.367 0.060 2.105 0.29 2.598 0.481 0.651 0.252 1.121 0.558 1.608 1.045 0.492 0.492 0.793 0.957 1.050 1.608 0.191 0.492 0.421 1.236 0.481 2.598 0.066 1.477 0.082 1.92 0.082 5.655s-0.016 4.184-0.082 5.655c-0.060 1.367-0.29 2.105-0.481 2.598-0.252 0.651-0.558 1.121-1.045 1.608-0.492 0.492-0.957 0.793-1.608 1.050-0.492 0.191-1.236 0.421-2.598 0.481-1.477 0.066-1.92 0.082-5.655 0.082s-4.184-0.016-5.655-0.082c-1.367-0.060-2.105-0.29-2.598-0.481-0.651-0.252-1.121-0.558-1.608-1.045-0.492-0.492-0.793-0.957-1.050-1.608-0.191-0.492-0.421-1.236-0.481-2.598-0.066-1.477-0.082-1.92-0.082-5.655s0.016-4.184 0.082-5.655c0.060-1.367 0.29-2.105 0.481-2.598 0.252-0.651 0.558-1.121 1.045-1.608 0.492-0.492 0.957-0.793 1.608-1.050 0.492-0.191 1.236-0.421 2.598-0.481 1.471-0.066 1.914-0.082 5.655-0.082zM14 0c-3.801 0-4.277 0.016-5.77 0.082-1.487 0.066-2.51 0.306-3.396 0.651-0.924 0.361-1.706 0.837-2.483 1.619-0.782 0.777-1.258 1.559-1.619 2.477-0.345 0.891-0.585 1.909-0.651 3.396-0.066 1.498-0.082 1.974-0.082 5.775s0.016 4.277 0.082 5.77c0.066 1.488 0.306 2.51 0.651 3.396 0.361 0.924 0.837 1.706 1.619 2.483 0.777 0.777 1.559 1.258 2.477 1.613 0.891 0.345 1.909 0.585 3.396 0.651 1.493 0.066 1.969 0.082 5.77 0.082s4.277-0.016 5.77-0.082c1.488-0.066 2.51-0.306 3.396-0.651 0.919-0.355 1.701-0.837 2.477-1.613s1.258-1.559 1.613-2.477c0.345-0.891 0.585-1.909 0.651-3.396 0.066-1.493 0.082-1.969 0.082-5.77s-0.016-4.277-0.082-5.77c-0.066-1.488-0.306-2.51-0.651-3.396-0.345-0.93-0.82-1.712-1.602-2.488-0.777-0.777-1.559-1.258-2.477-1.613-0.891-0.345-1.909-0.585-3.396-0.651-1.498-0.071-1.974-0.088-5.775-0.088v0z">
                      </path>
                      <path d="M14 6.809c-3.97 0-7.191 3.221-7.191 7.191s3.221 7.191 7.191 7.191 7.191-3.221 7.191-7.191c0-3.97-3.221-7.191-7.191-7.191zM14 18.665c-2.576 0-4.665-2.089-4.665-4.665s2.089-4.665 4.665-4.665c2.576 0 4.665 2.089 4.665 4.665s-2.089 4.665-4.665 4.665z">
                      </path>
                      <path d="M23.155 6.524c0 0.927-0.752 1.679-1.679 1.679s-1.679-0.752-1.679-1.679c0-0.927 0.752-1.679 1.679-1.679s1.679 0.752 1.679 1.679z" />
                    </g>
                    {/**/}
                    {/**/}
                    {/**/}
                  </g>
                </svg></div>
            </a><a target="_blank" href="https://twitter.com/" aria-label="Our Twitter">
              <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Twitter" viewBox="0 0 30 30" role="presentation" aria-hidden="true" focusable="false" className>
                  <title lang="en">Twitter</title>
                  <desc />
                  <g fill stroke>
                    {/**/}
                    {/**/}
                    {/**/}
                    <path d="M32 6.118c-1.098 0.5-2.372 0.864-3.707 1.028 1.294-0.816 2.315-2.078 2.81-3.579-1.187 0.678-2.583 1.231-4.071 1.532-1.286-1.26-2.985-2.053-4.87-2.053-3.629 0-6.572 2.942-6.572 6.572 0 0.526 0.062 1.038 0.179 1.529-5.478-0.327-10.289-2.926-13.514-6.871-0.585 0.913-0.915 2.051-0.915 3.267 0 2.268 1.149 4.269 2.897 5.45-1.074-0.021-2.093-0.321-2.983-0.823 0.033 0.044 0.033 0.072 0.033 0.1 0.001 3.166 2.241 5.809 5.223 6.43-0.475 0.154-1.069 0.238-1.683 0.238-0.438 0-0.867-0.043-1.281-0.125 0.906 2.636 3.314 4.511 6.168 4.566-2.21 1.752-5.044 2.81-8.126 2.81-0.007 0-0.015 0-0.022-0-0 0-0.002 0-0.004 0-0.55 0-1.093-0.033-1.625-0.098 2.904 1.856 6.378 2.956 10.11 2.956 0.006 0 0.013 0 0.019 0 12.075 0 18.678-10.004 18.678-18.679q0-0.427-0.019-0.849c1.29-0.94 2.377-2.066 3.246-3.352z">
                    </path>
                    {/**/}
                    {/**/}
                  </g>
                </svg></div>
            </a><a target="_blank" href="https://www.youtube.com/" aria-label="Our Youtube">
              <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Youtube" viewBox="0 0 32 30" role="presentation" aria-hidden="true" focusable="false" className>
                  <title lang="en">Youtube</title>
                  <desc />
                  <g fill stroke>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    <path d="M31.68 9.655s-0.313-2.205-1.272-3.176c-1.216-1.275-2.581-1.28-3.206-1.356-4.477-0.324-11.195-0.324-11.195-0.324h-0.014s-6.717 0-11.195 0.324c-0.626 0.075-1.989 0.081-3.206 1.356-0.959 0.971-1.272 3.176-1.272 3.176-0.189 1.539-0.305 3.336-0.32 5.158l-0 2.449c0.015 1.843 0.131 3.64 0.342 5.409s0.29 1.975 1.249 2.947c1.216 1.275 2.816 1.234 3.528 1.368 2.56 0.245 10.88 0.32 10.88 0.32s6.724-0.010 11.202-0.334c0.626-0.075 1.989-0.081 3.206-1.356 0.96-0.971 1.272-3.176 1.272-3.176 0.189-1.539 0.305-3.336 0.32-5.158l0-2.447c-0.016-1.843-0.132-3.641-0.343-5.409zM12.696 20.204v-8.992l8.646 4.512z">
                    </path>
                  </g>
                </svg></div>
            </a></div>
          {/**/}
          <div className="site-legal-block spyglass-nav-group_wrapper">
            {/**/}
            <div className="site-legal-block_terms-group">
              <div><a href aria-label="footer legal terms"> Legal Terms </a>
                {/**/}
              </div>
              <div><a href aria-label="footer privacy statement"> Privacy Statement </a>
                {/**/}
              </div>
            </div>
            <div className="site-legal-block_copyright"><span>©2021 Optima Mart LLC All Rights Reserved</span></div>
          </div>
        </div>
        <Modal
        isOpen={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        style={{
          overlay: {
            position: 'fixed',
            padding: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '30%',
            left: '30%',
            right: '30%',
            bottom: '30%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            // padding: '20px'
          }
        }}
      >
        <div className="help-view_info-container">{/**/} {/**/} <div className="help-article_container">{/**/} {/**/} <p className="help-article_copy select-text"><span id="clickId" /></p><h3>CUSTOMER CARE</h3>
    <p><a className="text-link" href="tel:+919811777782">+91-98117-77782</a></p>
    <p>For questions about Online Pickup&nbsp;or home delivery:</p><table>
      <caption>Hours</caption>
      <thead>
        <tr><th>Days</th><th>Hours</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Sun - Sat</td>
          <td>7a-10p IST</td>
        </tr>
      </tbody>
    </table>
    <p>For all other Customer Care questions:</p><p>
    </p><table>
      <thead>
        <tr><th>Days</th><th>Hours</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Mon - Fri</td>
          <td>8a-11p IST</td>
        </tr>
        <tr>
          <td>Sat</td>
          <td>8a-11p IST</td>
        </tr>
        <tr>
          <td>Sun</td>
          <td>8a-11p IST</td>
        </tr>
      </tbody>
    </table>
 </div> {/**/} {/**/} {/**/} {/**/}</div>

      </Modal>

      </footer>



    )

}

export default Footer;