import React, { useState } from 'react'
import Modal from "./Modal"
import logo from "../components/nav/logo.png"
import { Button } from "antd";
import firebase from "firebase/app";
import "firebase/auth";

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

const Confirmation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState();

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setName({
      [name]: value,
    });
  };

  function setLanguageCode() {
    // [START auth_set_language_code]
    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    // [END auth_set_language_code]
  }

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

   const onSignInSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    let phoneNumber = "+91" + this.state.mobile;
    console.log("yellow" + phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        let user = result.user;
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };


  return (
    <>
      <div className="container">
        <div className>
          <div className="forms_input-container"><label htmlFor="phone" className="forms_label"> Phone Number </label>
            <input onChange={onChangeHandler} name="mobile" type="tel" name="phone" required="required" maxLength={20} aria-describedby="phone-description" autoComplete="on" placeholder="Ex: 12345-67890" pattern="\d*" className="forms_input" />
            <div id="phone-description" />
          </div>
        </div>
        <Button onClick={onSignInSubmit} className="button button--prime button-width--med"> Save </Button>

        <div className>
          <div className="forms_input-container mt-5"><label htmlFor="phone" className="forms_label"> OTP </label>
            <input  id="phone" type="tel" name="phone" required="required" maxLength={20} aria-describedby="phone-description" autoComplete="on" placeholder="Ex: 12345-67890" pattern="\d*" className="forms_input" />
            <div id="phone-description" />
          </div>
        </div>

        <Button onClick={onSubmitOtp} className="button button--prime button-width--med"> Check OTP </Button>


      </div>

      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)} header="Welcome to Optima Mart">
          <section className="modal_content modal_content--scrollable">
            <div className="st_container st_container--page" forgot-flow-type="username">
              <div className="st_logo">
                <div className>
                  <img src={logo} alt="" />
                </div>
              </div>
              <h1 className="st_title">
                We are a chain of retail marts in North India here to cater to your everday needs within your budget
            </h1>
              <p className="st_sub-title">
                Shop online or in store with the new Optima Mart experience.
            </p>
              <div className="st-rounded-box">
                <h2 className="st-rounded-box_title st-rounded-box_title--no-subtitle">
                  Why chose us?
              </h2>
                <ul className="st-rounded-box_list">
                  <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                      <title lang="en">Icon Check</title>
                      <desc />
                      <g fill stroke>
                        <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                        </path>
                      </g>
                    </svg></div>
                  </span>
                  Same day grocery Pickup & Delivery
                </li>
                  <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                      <title lang="en">Icon Check</title>
                      <desc />
                      <g fill stroke>
                        <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                        </path>
                      </g>
                    </svg></div>
                  </span>
                  Free Home delivery
                </li>
                  <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                      <title lang="en">Icon Check</title>
                      <desc />
                      <g fill stroke>
                        <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                        </path>
                      </g>
                    </svg></div>
                  </span>
                  Best Prices available on the web, GUARANTEED!
                </li>
                  <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                      <title lang="en">Icon Check</title>
                      <desc />
                      <g fill stroke>
                        <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                        </path>
                      </g>
                    </svg></div>
                  </span>
                  Easy returns & Refunds
                </li>
                </ul>
              </div> <button className="button button--prime button-width--full st_button">
                Create Account
            </button>
              <div className="st_helper-text">
                <p>
                  Sign up to receive weekly offers and discount codes
              </p>
              </div>
              {/**/}
            </div>
            {/**/}
          </section>
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}

export default Confirmation;
