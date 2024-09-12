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

                {/* Choose which DB to store record */}
                <h3>Are you an employer or potential employee?</h3>
                <div className="multi-input-container">
                    <input type="radio"
                        id="employerSelection"
                        name="empSelection"
                        value="employer"
                        onChange={() => { setIsEmployee(false) }} />
                    <label htmlFor="employerSelection">Employer</label>

                    <input type="radio"
                        id="employeeSelection"
                        name="empSelection"
                        value="employee"
                        onChange={() => { setIsEmployee(true) }}
                        defaultChecked={true} />
                    <label htmlFor="employeeSelection">Potential Employee</label>
                </div>
                <hr width="75%" />

                {/* Actual Information to be stored in whichever DB was specified */}
                <form onSubmit={handleSubmit}>
                    <section>
                        <div className="name-inputs">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    required={true}
                                    value={""}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required={true}
                                    value={""}
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <h2>Birthday</h2>
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
                        </div>

                        <h2>Field of Work</h2>
                        <div className="multi-input-container">
                            <div>
                                <input type="radio"
                                    id="fieldCS"
                                    name="field"
                                    value="Computer Science"
                                    onChange={handleChange} />
                                <label htmlFor="fieldCS">Computer Science</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="fieldBus"
                                    name="field"
                                    value="Business"
                                    onChange={handleChange} />
                                <label htmlFor="fieldBus">Business</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="fieldBio"
                                    name="field"
                                    value="Biology"
                                    onChange={handleChange} />
                                <label htmlFor="fieldBio">Biology</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="fieldPhys"
                                    name="field"
                                    value="Physics"
                                    onChange={handleChange} />
                                <label htmlFor="fieldPhys">Physics</label>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2><label htmlFor="photo">Profile Photo</label></h2>
                        <input type="url"
                            id="photo"
                            name="imgURL"
                            onChange={handleChange} />
                        <div className="photo-container">

                        </div>

                        {/* Change labels based on employer or employee */}
                        {!isEmployee ? <h2>Preferred Education</h2> : <h2>Education</h2>}
                        <div className="multi-input-container">
                            <input type="radio"
                                id="educationHS"
                                name="education"
                                value="HS Degree"
                                onChange={handleChange} />
                            <label htmlFor="educationHS">High School Degree</label>
                            <input type="radio"
                                id="educationA"
                                name="education"
                                value="Associates Degree"
                                onChange={handleChange} />
                            <label htmlFor="educationA">Associate's Degree</label>
                            <input type="radio"
                                id="educationB"
                                name="education"
                                value="Bachelors Degree"
                                onChange={handleChange} />
                            <label htmlFor="educationB">Bachelor's Degree</label>
                            <input type="radio"
                                id="educationM"
                                name="education"
                                value="Masters Degree"
                                onChange={handleChange} />
                            <label htmlFor="educationM">Master's Degree</label>
                            <input type="radio"
                                id="educationP"
                                name="education"
                                value="PhD"
                                onChange={handleChange} />
                            <label htmlFor="educationP">PhD</label>
                        </div>

                        {!isEmployee ? <h2>Preferred Skills</h2> : <h2>Skills</h2>}
                        <h2>SKILL SELECTOR</h2>

                        {!isEmployee ?
                            <div>
                                <label>Company Name</label>
                                <input type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Company"
                                    required={true}
                                    value={""}
                                    onChange={handleChange} />
                            </div>
                            :
                            <div>
                                <label>About</label>
                                <input type="text"
                                    id="about"
                                    name="about"
                                    placeholder="About"
                                    required={true}
                                    value={""}
                                    onChange={handleChange} />
                            </div>
                        }
                        <input type="submit" className="secondary-button" />
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Onboarding;