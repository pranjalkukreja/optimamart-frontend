import React from 'react'
import UserNav from "../../components/nav/UserNav";
import { Form, Input, Select, Tooltip, Button } from 'antd';
import BlackNavigation from '../../components/BlackNavigation/BlackNavigation';



const Dashboard = () => {

    // const { Option } = Select;

    // const Demo = () => {
    //   const onFinish = values => {
    //     console.log('Received values of form: ', values);
    //   };

    return (
        <>
            <div className="container-fluid">
                <BlackNavigation title="Please enter your details" />
                <div className="row">
                    <div className="col-md-2">
                        <UserNav />
                    </div>
                    <div className="col">
                        <div tabIndex={-1} className="account-section_content account-section_content--modal-height">
                            <div className="form_container my-account">
                                <div>
                                    <div className="headline headline--top-margin trailer--triple" style={{ display: 'none' }}>
                                        <h2 tabIndex={-1} className="headline_heading headline_heading--bold">
                                            Enter your delivery address
        </h2>
                                    </div>
                                    <form noValidate="novalidate" className="form trailer--double">
                                        <div className="forms_input-container"><label htmlFor="firstName-input" className="forms_label"> First Name </label><input id="firstName-input" type="text" name="firstName" required="required" maxLength={20} aria-describedby="firstName-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                                            <div id="firstName-input-description" />
                                        </div>
                                        <div className="forms_input-container"><label htmlFor="lastName-input" className="forms_label"> Last Name </label><input id="lastName-input" type="text" name="lastName" required="required" maxLength={30} aria-describedby="lastName-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                                            <div id="lastName-input-description" />
                                        </div>
                                        <div className="forms_input-container"><label htmlFor="addressLine1-input" className="forms_label"> Street Address </label><input id="addressLine1-input" type="text" name="addressLine1" required="required" maxLength={30} aria-describedby="addressLine1-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                                            <div id="addressLine1-input-description" />
                                        </div>
                                        <div className="forms_input-container"><label htmlFor="addressLine2-input" className="forms_label"> Apartment or Suite (optional) </label><input id="addressLine2-input" type="text" name="addressLine2" maxLength={30} aria-describedby="addressLine2-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                                            <div id="addressLine2-input-description" />
                                        </div>
                                        <div className="forms_input-container"><label htmlFor="city-input" className="forms_label"> City </label><input id="city-input" type="text" name="city" required="required" maxLength={30} aria-describedby="city-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                                            <div id="city-input-description" />
                                        </div>
                                        <div className="form_container_horizontal-divider">
                                            <div className="form_container_horizontal-divider_half">
                                                <div className="form_container_select-wrapper">
                                                    <div><label htmlFor="state-select" className="forms_label">State</label>
                                                        <div className="select"><select id="state-select" required="required" className="select_select">
                                                            <option value disabled="disabled" className="select_option"> - Select One - </option>
                                                            <option className="select_option" value="AL"> Alabama </option>
                                                            <option className="select_option" value="AK"> Alaska </option>
                                                            <option className="select_option" value="AZ"> Arizona </option>
                                                            <option className="select_option" value="AR"> Arkansas </option>
                                                            <option className="select_option" value="CA"> California </option>
                                                            <option className="select_option" value="CO"> Colorado </option>
                                                            <option className="select_option" value="CT"> Connecticut </option>
                                                            <option className="select_option" value="DE"> Delaware </option>
                                                            <option className="select_option" value="DC"> District Of Columbia </option>
                                                            <option className="select_option" value="FL"> Florida </option>
                                                            <option className="select_option" value="GA"> Georgia </option>
                                                            <option className="select_option" value="HI"> Hawaii </option>
                                                            <option className="select_option" value="ID"> Idaho </option>
                                                            <option className="select_option" value="IL"> Illinois </option>
                                                            <option className="select_option" value="IN"> Indiana </option>
                                                            <option className="select_option" value="IA"> Iowa </option>
                                                            <option className="select_option" value="KS"> Kansas </option>
                                                            <option className="select_option" value="KY"> Kentucky </option>
                                                            <option className="select_option" value="LA"> Louisiana </option>
                                                            <option className="select_option" value="ME"> Maine </option>
                                                            <option className="select_option" value="MD"> Maryland </option>
                                                            <option className="select_option" value="MA"> Massachusetts </option>
                                                            <option className="select_option" value="MI"> Michigan </option>
                                                            <option className="select_option" value="MN"> Minnesota </option>
                                                            <option className="select_option" value="MS"> Mississippi </option>
                                                            <option className="select_option" value="MO"> Missouri </option>
                                                            <option className="select_option" value="MT"> Montana </option>
                                                            <option className="select_option" value="NE"> Nebraska </option>
                                                            <option className="select_option" value="NV"> Nevada </option>
                                                            <option className="select_option" value="NH"> New Hampshire </option>
                                                            <option className="select_option" value="NJ"> New Jersey </option>
                                                            <option className="select_option" value="NM"> New Mexico </option>
                                                            <option className="select_option" value="NY"> New York </option>
                                                            <option className="select_option" value="NC"> North Carolina </option>
                                                            <option className="select_option" value="ND"> North Dakota </option>
                                                            <option className="select_option" value="OH"> Ohio </option>
                                                            <option className="select_option" value="OK"> Oklahoma </option>
                                                            <option className="select_option" value="OR"> Oregon </option>
                                                            <option className="select_option" value="PA"> Pennsylvania </option>
                                                            <option className="select_option" value="RI"> Rhode Island </option>
                                                            <option className="select_option" value="SC"> South Carolina </option>
                                                            <option className="select_option" value="SD"> South Dakota </option>
                                                            <option className="select_option" value="TN"> Tennessee </option>
                                                            <option className="select_option" value="TX"> Texas </option>
                                                            <option className="select_option" value="UT"> Utah </option>
                                                            <option className="select_option" value="VT"> Vermont </option>
                                                            <option className="select_option" value="VA"> Virginia </option>
                                                            <option className="select_option" value="WA"> Washington </option>
                                                            <option className="select_option" value="WV"> West Virginia </option>
                                                            <option className="select_option" value="WI"> Wisconsin </option>
                                                            <option className="select_option" value="WY"> Wyoming </option>
                                                        </select>
                                                            <div className="select_caret vector-icon-size--mediumlarge"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Show select" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-stroke--prime">
                                                                <title lang="en">Show select</title>
                                                                <desc />
                                                                <g fill stroke>
                                                                    <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-270.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728">
                                                                    </polyline>
                                                                </g>
                                                            </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form_container_horizontal-divider_half">
                                                <div className="forms_input-container"><label htmlFor="zip-input" className="forms_label"> Zip Code </label><input id="zip-input" type="number" name="zip" required="required" maxLength={5} aria-describedby="zip-input-description" autoComplete="on" placeholder pattern="\d*" className="forms_input" />
                                                    <div id="zip-input-description" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className>
                                            <div className>
                                                <div className="forms_input-container"><label htmlFor="phone" className="forms_label"> Phone Number </label><input id="phone" type="tel" name="phone" required="required" maxLength={20} aria-describedby="phone-description" autoComplete="on" placeholder="Ex: 123-456-7890" pattern="\d*" className="forms_input" />
                                                    <div id="phone-description" />
                                                </div>
                                            </div>
                                        </div>
                                        <p aria-live="polite" className="text--base-strong text--align-center trailer--double panel-collapse text--base-error" />
                                        <div aria-live="polite" className="text--base-strong text--align-center text--base-success trailer--double"> </div>
                                        <div className="text--align-center"><button id="delivery-address-submit-button" type="submit" className="button button--prime button-width--med"> Save </button></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
};

export default Dashboard;