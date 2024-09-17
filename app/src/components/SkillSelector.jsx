import React, { useState } from 'react';
import skillsData from '../skills.json';

function SkillSelector({ field }) {
    const [skills, setSkills] = useState([]);

    const handleSkillsChange = () => {
        setSkills((prev) => [...prev, "extra skill"]);
        console.log(skills);
    };

    const importedSkills = skillsData[field || "Computer Science"];

    //     return (<div>
    //         <input type="checkbox"
    //             id={skill}
    //             name="skills"
    //             value={skill}
    //             onChange={handleSkillsChange}
    //             required={true} />
    //         <label htmlFor={skill}>{skillsData[field][index]}</label>
    //     </div>);

    return (
        <div className="multi-input-container">
            {importedSkills.map(skill => {
                return (
                    <div key={field + skill}>
                        <input type="checkbox"
                            id={skill}
                            name="skills"
                            value={skill}
                            onChange={handleSkillsChange}
                            required={true} />
                            <label htmlFor={skill}>{skill}</label>
                    </div>
                );
            }
            )}
        </div>
    );
}

export default SkillSelector;