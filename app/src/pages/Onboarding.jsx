import React, { useState } from 'react';
import Nav from '../components/Nav';
import SkillSelector from '../components/SkillSelector';

function Onboarding() {
    const [isEmployee, setIsEmployee] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dobYear: "",
        dobMonth: "",
        dobDay: "",
        imgUrl: "",
        field: "",
        education: "",
        skills: [],
        about: "",
        offers: []
    });

    const handleSubmit = () => {
        console.log('submitted');
    };

    const handleChange = (e) => {
        console.log(e);
        const value = e.target.value;
        const name = e.target.name;
        console.log(value, name);

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
        // console.log(formData);
    };

    const turnToEmployer = () => {
        setIsEmployee(false);
        setFormData((prev) => {
            const { about, ...rest } = prev;
            return {
                company: "",
                ...rest
            };
        });
    };

    const turnToEmployee = () => {
        setIsEmployee(true);
        setFormData((prev) => {
            const { company, ...rest } = prev;
            return {
                about: "",
                ...rest
            };
        });
    };

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
                        value={false}
                        onChange={turnToEmployer} />
                    <label htmlFor="employerSelection">Employer</label>

                    <input type="radio"
                        id="employeeSelection"
                        name="empSelection"
                        value={true}
                        onChange={turnToEmployee}
                        defaultChecked={true} />
                    <label htmlFor="employeeSelection">Potential Employee</label>
                </div>
                <hr width="75%" />

                {/* Actual Information to be stored in whichever DB was specified */}
                <form onSubmit={handleSubmit}>
                    <section>
                        <div className="text-input-container">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    required={true}
                                    value={formData.firstName}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required={true}
                                    value={formData.lastName}
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
                                value={formData.dobMonth}
                                onChange={handleChange} />
                            <input type="number"
                                id="dobDay"
                                name="dobDay"
                                placeholder="DD"
                                required={true}
                                value={formData.dobDay}
                                onChange={handleChange} />
                            <input type="number"
                                id="dobYear"
                                name="dobYear"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dobYear}
                                onChange={handleChange} />
                        </div>

                        <h2>Field of Work</h2>
                        <div className="multi-input-container">
                            <div>
                                <input type="radio"
                                    id="fieldCS"
                                    name="field"
                                    value="Computer Science"
                                    onChange={handleChange}
                                    required={true} />
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
                        {/* PERCHANCE ADD AN ATTACHMENT FOR RESUME */}

                        {/* Change labels based on employer or employee */}
                        {!isEmployee ? <h2>Preferred Education</h2> : <h2>Education</h2>}
                        <div className="multi-input-container">
                            <div>
                                <input type="radio"
                                    id="educationHS"
                                    name="education"
                                    value="HS Degree"
                                    onChange={handleChange}
                                    required={true} />
                                <label htmlFor="educationHS">High School Degree</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="educationA"
                                    name="education"
                                    value="Associates Degree"
                                    onChange={handleChange} />
                                <label htmlFor="educationA">Associate's Degree</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="educationB"
                                    name="education"
                                    value="Bachelors Degree"
                                    onChange={handleChange} />
                                <label htmlFor="educationB">Bachelor's Degree</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="educationM"
                                    name="education"
                                    value="Masters Degree"
                                    onChange={handleChange} />
                                <label htmlFor="educationM">Master's Degree</label>
                            </div>
                            <div>
                                <input type="radio"
                                    id="educationP"
                                    name="education"
                                    value="PhD"
                                    onChange={handleChange} />
                                <label htmlFor="educationP">PhD</label>
                            </div>
                        </div>

                        {!isEmployee ? <h2>Preferred Skills</h2> : <h2>Skills</h2>}
                        <SkillSelector field={formData.field} />

                        {!isEmployee ?
                            <div className="text-input-container">
                                <label>Company Name</label>
                                <input type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Company"
                                    required={true}
                                    value={formData.company}
                                    onChange={handleChange} />
                            </div>
                            :
                            <div className="text-input-container">
                                <label>About</label>
                                <input type="text"
                                    id="about"
                                    name="about"
                                    placeholder="About"
                                    required={true}
                                    value={formData.about}
                                    onChange={handleChange} />
                            </div>
                        }
                        <h1>isEmployee is: {isEmployee ? <p>true</p> : <p>false</p>}</h1>
                        <input type="submit" className="secondary-button" />
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Onboarding;