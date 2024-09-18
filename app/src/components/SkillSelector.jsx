import React, { useState, useEffect } from 'react';
import skillsData from '../skills.json';

function SkillSelector({ field, sendData }) {
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;

        //Rather add the skill or remove the skill
        if (e.target.checked) {
            setData((prev) => [...prev, e.target.value]);
        }
        else {
            setData((prev) => {
                const [value, ...rest] = prev;
                return rest;
            });
        }
    };

    //Whenever data changes, send it up
    useEffect(() => {
        sendData(data);
    }, [data]);


    const importedSkills = skillsData[field || "Computer Science"];

    return (
        <div className="multi-input-container">
            {importedSkills.map(skill => {
                return (
                    <div key={field + skill}>
                        <input type="checkbox"
                            id={skill}
                            name="skills"
                            value={skill}
                            onChange={handleChange} />
                        <label htmlFor={skill}>{skill}</label>
                    </div>
                );
            })}
        </div>
    );
}

export default SkillSelector;