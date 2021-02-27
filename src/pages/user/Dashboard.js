import React from 'react'
import UserNav from "../../components/nav/UserNav";
import { Form, Input, Select, Tooltip, Button } from 'antd';
import BlackNavigation from '../../components/BlackNavigation/BlackNavigation';
import AddressForm from '../../components/forms/AddressForm';



const Dashboard = () => {


    return (
        <>
            <div className="container-fluid">
                <BlackNavigation title="Please enter your details" />
                <div className="row">
                    <div className="col-md-2">
                        <UserNav />
                    </div>
                    <div className="col">
                        <div className="account-section_content">
                            <div className="form_container">
                                <div>

                                    <AddressForm />
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