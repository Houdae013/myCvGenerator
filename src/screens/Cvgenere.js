import React, { useState, useEffect, useRef, FormEvent  } from 'react';
import './Cvgenere.css';

const Cvgenere = () => {
    const [cvData, setCvData] = useState(null);
function fillTechnicalSkillsList(technicalSkills, technicalSkillsPercentages) {
    return technicalSkills.map((skill, index) => (
        <li key={index}>
            {skill}
            <div className="barre">
                <div className="remplissage" style={{ width: `${technicalSkillsPercentages[index] || 0}%` }}></div>
            </div>
        </li>
    ));
}

function fillPersonalSkillsList(personalSkills, personalSkillsPercentages) {
    return personalSkills.map((skill, index) => (
        <li key={index}>
            {skill}
            <div className="barre">
                <div className="remplissage" style={{ width: `${personalSkillsPercentages[index] || 0}%` }}></div>
            </div>
        </li>
    ));
}

    useEffect(() => {
        const storedData = localStorage.getItem('cvData');
        if (storedData) {
            setCvData(JSON.parse(storedData));
        }
    }, []);

    return (
        <div className="container">
            {cvData && (
                <>
                    <section className="introduction">
                        <img src={cvData.photo} alt="photo" width="200" height="200" className="pdp" />
                        <section className="intro">
                            <h1>{`${cvData.nom} ${cvData.prenom}`}</h1>
                            <ul className="informations">
                                <li>{cvData.age}</li>
                                <li>{cvData.poste}</li>
                                <li>{`${cvData.pays}, ${cvData.ville}`}</li>
                            </ul>
                        </section>
                    </section>

                    <section className="zone-cote">
                        <section>
                            <h1>Contacts:</h1>
                            <ul className="contacts">
                                <li><a href={`mailto:${cvData.email}`}>{cvData.email}</a></li>
                                <li><a href={`tel:${cvData.phone}`}>{cvData.phone}</a></li>
                            </ul>
                            <ul className="socials">
                                <li className="linkedin"><a href={cvData.linkedin} target="_blank" rel="noopener noreferrer"><img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="Logo Linkedin" width="60" height="50" /></a></li>
                                <li className="github"><a href={cvData.github} target="_blank" rel="noopener noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-512/free-github-169-1174970.png?f=webp&w=30" alt="Logo github" width="60" height="50" /></a></li>
                            </ul>
                        </section>
                        <br />
                        <hr />
                        <section className="comptech">
    <h1>Compétences techniques:</h1>
    <ul>
        {cvData.technicalSkills.map((skill, index) => (
            <li key={index}>
                {skill}
                <div className="barre">
                    <div className="remplissage" style={{ width: `${cvData.technicalSkillsPercentages[index] || 0}%` }}></div>
                </div>
            </li>
        ))}
    </ul>
</section>

<section className="comppers">
    <h1>Compétences personnelles:</h1>
    <ul>
        {cvData.personalSkills.map((skill, index) => (
            <li key={index}>
                {skill}
                <div className="barre">
                    <div className="remplissage" style={{ width: `${cvData.personalSkillsPercentages[index] || 0}%` }}></div>
                </div>
            </li>
        ))}
    </ul>
    <br />
    <hr />
</section>

                        <br />
                        <hr />
                        <section className="compling">
                            <h1>Compétences linguistiques:</h1>
                            <ul>
                                {cvData.languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </section>
                        <br />
                        <hr />
                    </section>

                    <section className="corps">
                        <section className="cadre">
                            <section className="profile">
                                <h1>Profile</h1>
                                <p>{cvData.profile}</p>
                            </section>
                            <section className="formations">
                                <h1>Formations et diplômes:</h1>
                                <ul>
                                    {cvData.formation.map((formation, index) => (
                                        <li key={index}>
                                            <h3>{formation.institution}</h3>
                                            <h3>{formation.diplome}</h3>
                                            <h4>{formation.duree}</h4>
                                            <p>{formation.infosupp}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="certifications">
                                <h1>Certifications:</h1>
                                <ul>
                                    {cvData.certifications.map((certification, index) => (
                                        <li key={index}>
                                            <h3>{certification.cert}</h3>
                                            <h3>{certification.date}</h3>
                                            <h4>{certification.identifiant}</h4>
                                            <p>{certification.infosupp}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="experiences">
                                <h1>Expériences:</h1>
                                <ul>
                                    {cvData.experiences.map((experience, index) => (
                                        <li key={index}>
                                            <h3>{experience.exp}</h3>
                                            <h3>{experience.duree}</h3>
                                            <p>{experience.infosupp}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    </section>

                    <section className="pied">
                        <hr />
                        <p>Édité par {`${cvData.nom} ${cvData.prenom}`}</p>
                        <p>Dernière modification : {document.lastModified}</p>
                        <p>&copy; All Rights Reserved</p>
                    </section>
                </>
            )}
        </div>
    );
};

export default Cvgenere;
