import React, { useState } from 'react';
import Nav from '../components/Nav';

function Onboarding() {
    const [isEmployee, setIsEmployee] = useState(true);

    const handleSubmit = () => {
        console.log('submitted');
    }

    const handleChange = () => {
        console.log('changed');
    }

    return (
        <div>
            <Nav showAuthModel={false} setShowAuthModel={() => { }} />

            <div className="onboarding">
                <h2>Create an Account</h2>

                <h3>Are you an employer or potential employee?</h3>
                <div className="multi-input-container">
                    <input type="radio"
                        id="empoyerSelection"
                        name="empSelection"
                        value="Employer"
                        onChange={() => { setIsEmployee(false) }} />
                    <label htmlFor="empoyerSelection">Employer</label>

                    <input type="radio"
                        id="employeeSelection"
                        name="empSelection"
                        value="Potential Employee"
                        onChange={() => { setIsEmployee(true) }}
                        defaultChecked={true} />
                    <label htmlFor="employeeSelection">Potential Employee</label>
                </div>

                {/* Actual Information to be stored in whichever DB specified */}
                <form onSubmit={handleSubmit}>
                    <div className="multi-input-container">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            required={true}
                            value={""}
                            onChange={handleChange} />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            required={true}
                            value={""}
                            onChange={handleChange} />
                    </div>

                    <label>Birthday</label>
                    <div className="multi-input-container">
                        <input type="number"
                            id="dobMonth"
                            name="dobMonth"
                            placeholder="MM"
                            required={true}
                            value={""}
                            onChange={handleChange} />
                        <input type="number"
                            id="dobDay"
                            name="dobDay"
                            placeholder="DD"
                            required={true}
                            value={""}
                            onChange={handleChange} />
                        <input type="number"
                            id="dobYear"
                            name="dobYear"
                            placeholder="YYYY"
                            required={true}
                            value={""}
                            onChange={handleChange} />
                        {/* ADD IMAGEURL AND FIELD SELECTIONS HERE */}

                        {/* DATA FIELDS DIVERGE HERE */}
                        {!isEmployee ?
                            <div>
                                Employer
                            </div> :
                            <div>
                                Employee
                            </div>}

                    </div>
                    <input type="submit" className="secondary-button" />
                </form>
            </div>
        </div>
    );
}

export default Onboarding;