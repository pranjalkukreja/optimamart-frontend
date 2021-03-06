import React, { useEffect, useState } from 'react'
import { saveUserName, saveUserLastName, saveUserUnitAddress, saveUserCityAddress, saveUserStateAddress, saveUserZipAddress, saveUserPhoneNumber, saveUserAddress } from "../../functions/user"
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


import { Button } from "antd";


const AddressForm = () => {

    const { user } = useSelector((state) => ({ ...state }));
    let history = useHistory();



    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const [address, setAddress] = useState(user.address);
    const [unitAddress, setUnitAddress] = useState(user.unitAddress);
    const [city, setCity] = useState(user.cityAddress);
    const [userState, SetUserState] = useState("New Delhi");
    const [zipCode, setZipCode] = useState(user.ZipAddress);
    const [phoneNumber, setPhoneNumber] = useState(user.PhoneNumber);







    const handleName = () => {
        saveUserName(user.token, name).then((res) => {
            if (res.data.ok) {
                toast.success("Details saved");
            }
        });
    }

    const handleLastName = () => {
        saveUserLastName(user.token, lastName).then((res) => {
            if (res.data.ok) {
            }
        });
    }

    const handleUserAddress = () => {
        saveUserAddress(user.token, address).then((res) => {
            if (res.data.ok) {
            }
        });
    }

    const handleUnitAddress = () => {
        saveUserUnitAddress(user.token, unitAddress).then((res) => {
            if (res.data.ok) {
            }
        });
    }

    const handleCity = () => {
        saveUserCityAddress(user.token, city).then((res) => {
            if (res.data.ok) {
            } else {

            }
        });
    }

    const handleUserState = () => {
        saveUserStateAddress(user.token, userState).then((res) => {
            if (res.data.ok) {
            }
        });
    }

    const handleUserZip = () => {
        saveUserZipAddress(user.token, zipCode).then((res) => {
            if (res.data.ok) {
            }
        });
    }
    const handleUserNumber = () => {
        saveUserPhoneNumber(user.token, phoneNumber).then((res) => {
            if (res.data.ok) {
            }
        });
    }

    const handleSave = () => {
        handleName();
        handleLastName();
        handleUserAddress();
        handleUnitAddress();
        handleCity();
        handleUserState();
        handleUserZip();
        handleUserNumber();

        window.location.reload();
    }

    const handleCart = () => {
        history.push("/cart")
    }

    return (
        <div>
            <form className="form trailer--double">
                <div className="forms_input-container"><label htmlFor="firstName-input" className="forms_label"> First Name </label>
                    <input onChange={(e) => { setName(e.target.value) }} type="firstName" defaultValue={user.name} type="text" required="required" maxLength={20} autoComplete="on" placeholder pattern className="forms_input" />
                    <div id="firstName-input-description" />
                </div>
                <div className="forms_input-container"><label htmlFor="lastName-input" className="forms_label"> Last Name </label>
                    <input onChange={(e) => { setLastName(e.target.value) }} defaultValue={user.lastName} type="text" required="required" maxLength={30} aria-describedby="lastName-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                    <div id="lastName-input-description" />
                </div>
                <div className="forms_input-container"><label htmlFor="addressLine1-input" className="forms_label"> Street Address </label>
                    <input onChange={(e) => { setAddress(e.target.value) }} defaultValue={user.address} type="text" required="required" maxLength={30} aria-describedby="addressLine1-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                    <div id="addressLine1-input-description" />
                </div>
                <div className="forms_input-container"><label htmlFor="addressLine2-input" className="forms_label"> Apartment or Suite (optional) </label>
                    <input onChange={(e) => { setUnitAddress(e.target.value) }} defaultValue={user.unitAddress} type="text" maxLength={30} aria-describedby="addressLine2-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                    <div id="addressLine2-input-description" />
                </div>
                <div className="forms_input-container"><label htmlFor="city-input" className="forms_label"> City </label>
                    <input onChange={(e) => { setCity(e.target.value) }} defaultValue={user.cityAddress} type="text" required="required" maxLength={30} aria-describedby="city-input-description" autoComplete="on" placeholder pattern className="forms_input" />
                    <div id="city-input-description" />
                </div>
                <div className="form_container_horizontal-divider">
                    <div className="form_container_horizontal-divider_half">
                        <div className="form_container_select-wrapper">
                            <div><label htmlFor="state-select" className="forms_label">State</label>
                                <div className="select"><select onChange={(e) => { SetUserState(e.target.value) }} defaultValue={user.StateAddress} required="required" className="select_select">
                                    <option value disabled="disabled" className="select_option"> - Select One - </option>
                                    <option className="select_option" value="New Delhi"> New Delhi </option>
                                    <option className="select_option" value="Haryana"> Haryana </option>
                                    <option className="select_option" value="Uttar Pradesh"> Uttar Pradesh </option>
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
                        <div className="forms_input-container"><label className="forms_label"> Zip Code </label>
                            <input onChange={(e) => { setZipCode(e.target.value) }} defaultValue={user.ZipAddress} type="number" required="required" maxLength={6} aria-describedby="zip-input-description" autoComplete="on" placeholder pattern="\d*" className="forms_input" />
                            <div id="zip-input-description" />
                        </div>
                    </div>
                </div>
                <div className>
                    <div className>
                        <div className="forms_input-container"><label htmlFor="phone" className="forms_label"> Phone Number </label>
                            <input onChange={(e) => { setPhoneNumber(e.target.value) }} defaultValue={user.PhoneNumber} id="phone" type="tel" name="phone" required="required" maxLength={20} aria-describedby="phone-description" autoComplete="on" placeholder="Ex: 12345-67890" pattern="\d*" className="forms_input" />
                            <div id="phone-description" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="">
                <Button onClick={handleSave} disabled={!name || !lastName || !address || !zipCode || !city || !phoneNumber} className="button button--prime button-width--med"> Save </Button>
                <Button onClick={handleCart} style={{float: 'right'}} className="button button--prime button-width--med"> Go to Cart </Button>

            </div>
        </div>
    );
};

export default AddressForm;
