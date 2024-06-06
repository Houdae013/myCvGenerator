import React, { useState, useEffect, useRef, FormEvent   } from 'react';
import './CVGenerator.css';

const Page1 = () => {
  
  const [nomError, setNomError] = useState('');
const [prenomError, setPrenomError] = useState('');
const [ageError, setAgeError] = useState('');
const [emailError, setEmailError] = useState('');
const [showAutreLangue, setShowAutreLangue] = useState(false);
  const [autreLangueText, setAutreLangueText] = useState('');
  const [showAge, setShowAge] = useState(false);
  const [age, setAge] = useState('');
  const [showVille, setShowVille] = useState(false);
  const [ville, setVille] = useState('');
  const [showPays, setShowPays] = useState(false);
  const [pays, setPays] = useState('');

  function isValidName(lastName, firstName) {
    const nameRegex = /^[A-Z]+$/;
    const firstNameRegex = /^[A-Z][a-z]*$/;

    if (!nameRegex.test(lastName) || !firstNameRegex.test(firstName)) {
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|fr)$/;
    return emailPattern.test(email);
  }

  function isValidAge(age) {
    return !isNaN(age) && age >= 18;
  }
  function validateNom(value) {
    const nameRegex = /^[A-Z]+$/;
    const firstNameRegex = /^[A-Z][a-z]*$/;

    if (!nameRegex.test(value)) {
      setNomError("Veuillez saisir un nom en majuscules.");
    } else {
      setNomError('');
    }
  }
  function validatePrenom(value) {
    const firstNameRegex = /^[A-Z][a-z]*$/;

    if (!firstNameRegex.test(value)) {
      setPrenomError("Veuillez saisir un prénom commençant par une majuscule et ne contenant pas de chiffres ni de caractères spéciaux.");
    } else {
      setPrenomError('');
    }
  }
  function validateAge(value) {
    if (isNaN(value) || value < 18) {
      setAgeError("L'âge ne doit pas être inférieur à 18 ans.");
    } else {
      setAgeError('');
    }
  }

  function validateEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|fr)$/;
    if (!emailPattern.test(value)) {
      setEmailError("Veuillez saisir une adresse email valide (seulement les domaines .com ou .fr sont autorisés).");
    } else {
      setEmailError('');
    }
  }
  function handleAutreLangueCheckboxChange(event) {
    setShowAutreLangue(event.target.checked);
    if (!event.target.checked) {
      setAutreLangueText(''); // Efface le contenu du champ de texte lorsque la case à cocher est désélectionnée
    }
  }
  function handleAgeCheckboxChange(event) {
    setShowAge(event.target.checked);
    if (!event.target.checked) {
      setAge(''); // Efface le contenu du champ de texte lorsque la case à cocher est désélectionnée
    }
  }
  function handleVilleCheckboxChange(event) {
    setShowVille(event.target.checked);
    if (!event.target.checked) {
      setVille(''); // Efface le contenu du champ de texte lorsque la case à cocher est désélectionnée
    }
  }

  function handlePaysCheckboxChange(event) {
    setShowPays(event.target.checked);
    if (!event.target.checked) {
      setPays(''); // Efface le contenu du champ de texte lorsque la case à cocher est désélectionnée
    }
  }

  function validateForm() {
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
      let isValid = true;
  
   
    // Assurez-vous de faire de même pour les autres champs et d'initialiser les erreurs à '' au début de votre fonction.
    

    
    return isValid;
  }

    function addFieldcomp(skillType) {
  const skillsContainer = document.getElementById(skillType);
  const newSkillInput = document.createElement('div');
  newSkillInput.classList.add('skill-input');
  newSkillInput.innerHTML = `
    <input type="text" name="${skillType}[]" placeholder="Nom de la compétence">
    <input type="number" name="${skillType}Percentage[]" placeholder="Pourcentage de maîtrise (0-100)">
  `;
  skillsContainer.appendChild(newSkillInput);
}
function addFieldform(formation) {
      const formsContainer = document.getElementById(formation);
      const newFormInput = document.createElement('div');
      newFormInput.classList.add('formation-input');
      newFormInput.innerHTML = `
        <input type="text" name="institution[]" placeholder="Nom de l'institution">
        <input type="text" name="diplome[]" placeholder="Diplôme">   
        <input type="text" name="duree[]" placeholder="Durée de la formation">
        <input type="text" name="infosupp[]" placeholder="Informations supplémentaires">
      `;
      formsContainer.appendChild(newFormInput);
    }

    function addFieldcert(certifications) {
      const certsContainer = document.getElementById(certifications);
      const newCertInput = document.createElement('div');
      newCertInput.classList.add('certifications-input');
      newCertInput.innerHTML = `
      <input type="text" name="cert[]" placeholder="Nom de la certification">
        <input type="text" name="date[]" placeholder="Date">   
        <input type="text" name="identifiant[]" placeholder="Identifiant">
        <input type="text" name="infosupp[]" placeholder="Informations supplémentaires"> 
      `;
      certsContainer.appendChild(newCertInput);
    }

    function addFieldexp(experiences) {
      const expsContainer = document.getElementById(experiences);
      const newExpInput = document.createElement('div');
      newExpInput.classList.add('experiences-input');
      newExpInput.innerHTML = `
      <input type="text" name="exp[]" placeholder="Titre">
      <input type="text" name="duree[]" placeholder="Durée">   
      <input type="text" name="infosupp[]" placeholder="Informations supplémentaires"> 
      `;
      expsContainer.appendChild(newExpInput);
    }

    function addField(sectionId, inputType) {
      const section = document.getElementById(sectionId);
      const input = document.createElement(inputType === 'textarea' ? 'textarea' : 'input');
      input.name = `${sectionId}[]`;
      if (inputType === 'textarea') {
        input.rows = 4;
      } else {
        input.type = 'text';
      }
      section.appendChild(input);
    }
     /*la fct handleOtherOption nous affiche un champs de texte lorsqu'on selectionne l'option other*/
     function handleOtherOption(selectId, inputContainerId) {
      const selectElement = document.getElementById(selectId);
      const inputContainer = document.getElementById(inputContainerId);
      selectElement.addEventListener('change', function () {
        if (selectElement.value === 'other') {
          inputContainer.style.display = 'block';
        } else {
          inputContainer.style.display = 'none';
        }
      });
    }
    
    let selectedLanguages = [];
    function saveData(event) {
      event.preventDefault(); // Empêche le rechargement de la page
  
      if (!validateForm()) {
        return;
      }

      const technicalSkills = [];
  const technicalSkillsInputs = document.querySelectorAll('input[name="technicalSkills[]"]');
  const technicalSkillsPercentageInputs = document.querySelectorAll('input[name="technicalSkillsPercentage[]"]');
  technicalSkillsInputs.forEach((input, index) => {
    const skill = input.value;
    const percentage = parseFloat(technicalSkillsPercentageInputs[index].value);
    technicalSkills.push({ skill, percentage });
  });

  const otherLanguageInput = document.getElementById('autreLangueText');
  if (otherLanguageInput && otherLanguageInput.value.trim() !== '') {
    selectedLanguages.push(otherLanguageInput.value.trim());
  }
  
      

      const photoFile = document.getElementById('photoFile').files[0];
      const photoURL = document.getElementById('photoURL').value;
      let photoData = '';
      
      /*nous permet de traiter la photo si c'est un url ou un fichier*/
      if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
          photoData = event.target.result;
          storeData(photoData);
        };
        reader.readAsDataURL(photoFile);
      } else {
        photoData = photoURL;
        storeData(photoData);
      }
    }

    function storeData(photoData) {
      const ageElement = document.getElementById('age');
    let ageValue;
    if (ageElement.value === 'other') {
      ageValue = document.getElementById('otherAge').value;
      if (ageValue < 18) {
        alert("L'âge ne doit pas être inférieur à 18 ans.");
        return;
      }
    } else {
      ageValue = ageElement.value;
    }
      const paysValue = document.getElementById('pays').value === 'other' ? document.getElementById('otherPays').value : document.getElementById('pays').value;
      const villeValue = document.getElementById('ville').value === 'other' ? document.getElementById('otherVille').value : document.getElementById('ville').value;
      const nom = document.getElementById('nom').value;
      const prenom = document.getElementById('prenom').value;
      
      // Vérification du nom et du prénom
      

      const cvData = {
  photo: photoData,
  nom: nom,
  prenom: prenom,
  profile: document.getElementById('profile').value,
  age: ageValue,
  poste: document.getElementById('poste').value,
  pays: paysValue,
  ville: villeValue,
  email: document.getElementById('email').value,
  phone: document.getElementById('phone').value,
  linkedin: document.getElementById('linkedin').value,
  github: document.getElementById('github').value,
  technicalSkills: Array.from(document.getElementsByName('technicalSkills[]')).map(input => input.value),
  technicalSkillsPercentages: Array.from(document.getElementsByName('technicalSkillsPercentage[]')).map(input => input.value),
  personalSkills: Array.from(document.getElementsByName('personalSkills[]')).map(input => input.value),
  personalSkillsPercentages: Array.from(document.getElementsByName('personalSkillsPercentage[]')).map(input => input.value),
  languages: selectedLanguages,
  formation: Array.from(document.getElementsByName('institution[]')).map((input, index) => ({
          institution: input.value,
          diplome: document.getElementsByName('diplome[]')[index].value,
          duree: document.getElementsByName('duree[]')[index].value,
          infosupp: document.getElementsByName('infosupp[]')[index].value
        })),
  certifications: Array.from(document.getElementsByName('cert[]')).map((input, index) => ({
          cert: input.value,
          date: document.getElementsByName('date[]')[index].value,
          identifiant: document.getElementsByName('identifiant[]')[index].value,
          infosupp: document.getElementsByName('infosupp[]')[index].value
        })),
  experiences: Array.from(document.getElementsByName('exp[]')).map((input, index) => ({
          exp: input.value,
          duree: document.getElementsByName('duree[]')[index].value,
          infosupp: document.getElementsByName('infosupp[]')[index].value
        }))
};


      localStorage.setItem('cvData', JSON.stringify(cvData));
      window.location.href = 'Cvgenere'; // Redirige vers la page CV
    }

  // Fonction pour afficher ou masquer le champ de texte Autre en fonction de la case à cocher
 

    document.addEventListener('DOMContentLoaded', function () {
      handleOtherOption('age', 'otherAgeContainer');
      handleOtherOption('pays', 'otherPaysContainer');
      handleOtherOption('ville', 'otherVilleContainer');
      document.getElementById('formcv').addEventListener('submit', function(event) {
        // Empêcher la soumission du formulaire si l'e-mail n'est pas valide
       
        saveData(event);
      });
    });
    return (
      <div className="container">
        <h1>CV Generator</h1>
        <form onSubmit={saveData}>
          <h1>Remplissez les champs suivants:</h1>
          <h2>Informations personnelles</h2>
          <label for="photoFile">Photo (fichier):</label>
          <input type="file" id="photoFile" name="photoFile" />
          <label for="photoURL">Photo (URL):</label>
          <input type="url" id="photoURL" name="photoURL" />
          <label htmlFor="nom">Nom:</label>
<input type="text" id="nom" name="nom" required  onChange={(e) => validateNom(e.target.value)}/>
{nomError && <span className="error">{nomError}</span>}



          <label for="prenom">Prénom:</label>
          <input type="text" id="prenom" name="prenom" required onChange={(e) => validatePrenom(e.target.value)} />
          {prenomError && <span className="error">{prenomError}</span>}
        
          <label for="age">Âge:</label>
          <select id="age" name="age"  onChange={(e) => validateAge(e.target.value)}>
            <option value="">Sélectionnez votre âge</option>
            {/* Vous pouvez ajouter plus d'options ici */}
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="other">Autre</option>
            
          </select>
          <label>
          <input
            type="checkbox"
            id="ageCheckbox"
            onChange={handleAgeCheckboxChange}
          />
          Autre âge
        </label>
        {showAge && (
          <input
            type="number"
            id="otherAge"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onBlur={(e) => validateAge(e.target.value)}
            style={{ display: 'block' }}
          />
        )}
        {ageError && <span className="error">{ageError}</span>}

       
  
          <label for="poste">Poste:</label>
          <input type="text" id="poste" name="poste" required/>
  
          <label for="pays">Pays:</label>
          <select id="pays" name="pays" >
            <option value="">Sélectionnez votre pays</option>
            {/* Ajoutez les options pour les pays ici */}
            <option value="France">France</option>
            <option value="Belgique">Belgique</option>
            <option value="Suisse">Suisse</option>
            <option value="Canada">Canada</option>
            <option value="Maroc">Maroc</option>
            <option value="other">Autre</option>
          
          </select>
          <label>
          <input
            type="checkbox"
            id="paysCheckbox"
            onChange={handlePaysCheckboxChange}
          />
          Autre pays
        </label>
        {showPays && (
          <input
            type="text"
            id="otherPays"
            value={pays}
            onChange={(e) => setPays(e.target.value)}
            style={{ display: 'block' }}
          />
        )}
        
  
          <label for="ville">Ville:</label>
          <select id="ville" name="ville" >
            <option value="">Sélectionnez votre ville</option>
            {/* Ajoutez les options pour les villes ici */}
            <option value="Paris">Paris</option>
            <option value="Bruxelles">Bruxelles</option>
            <option value="Genève">Genève</option>
            <option value="Montréal">Montréal</option>
            <option value="Rabat">Rabat</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Tanger">Tanger</option>
            <option value="Agadir">Agadir</option>
            <option value="other">Autre</option>
          
          </select>
          <label>
          <input
            type="checkbox"
            id="villeCheckbox"
            onChange={handleVilleCheckboxChange}
          />
          Autre ville
        </label>
        {showVille && (
          <input
            type="text"
            id="otherVille"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            style={{ display: 'block' }}
          />
        )}
          {/* Contact Information */}
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => validateEmail(e.target.value)} />
        
        {emailError && <span className="error">{emailError}</span>}
  
          <label for="phone">Numéro de téléphone:</label>
          <input type="tel" id="phone" name="phone" required />
          <label for="linkedin">LinkedIn:</label>
          <input type="url" id="linkedin" name="linkedin" />
          <label for="github">GitHub:</label>
          <input type="url" id="github" name="github" />
  
          <label for="profile">Rédigez un paragraphe sur vous:</label>
          <textarea id="profile" name="profile" rows="4" required></textarea>
  
          {/* Technical Skills */}
          <h2>Compétences techniques:</h2>
          <br />
          <div id="technicalSkills">
            <input
              type="text"
              name="technicalSkills[]"
              placeholder="Nom de la compétence"
              required
            />
            <input
              type="number"
              name="technicalSkillsPercentage[]"
              placeholder="Pourcentage de maîtrise (0-100)"
              required
            />
          </div>
          <button type="button" onClick={() => addFieldcomp('technicalSkills')}>
            Ajouter
          </button>
  
          {/* Personal Skills */}
          <h2>Compétences personnelles:</h2>
          <br />
          <div id="personalSkills">
            <input
              type="text"
              name="personalSkills[]"
              placeholder="Nom de la compétence"
              required
            />
            <input
              type="number"
              name="personalSkillsPercentage[]"
              placeholder="Pourcentage de maîtrise (0-100)"
              required
            />
          </div>
          <button type="button" onClick={() => addFieldcomp('personalSkills')}>
            Ajouter
          </button>
  
          {/* Languages */}
          <h2>Langues:</h2>
          <br />
          <div id="languages">
            <label>
              <input type="checkbox" name="languages[]" value="francais" />
              Français
            </label>
            <br />
            <label>
              <input type="checkbox" name="languages[]" value="arabe" />
              Arabe
            </label>
            <br />
            <label>
              <input type="checkbox" name="languages[]" value="anglais" />
              Anglais
            </label>
            <br />
            <label>
              <input type="checkbox" name="languages[]" value="japonais" />
              Japonais
            </label>
            <br />
            <label>
              <input type="checkbox" name="languages[]" value="espagnol" />
              Espagnol
            </label>
            <br />
            <label>
              <input type="checkbox" name="languages[]" value="turk" />
              Turk
            </label>
            <br />
            <label>
              <input type="checkbox" name="languages[]" value="allemand" />
              Allemand
            </label>
            <br />
             
            <label>
          <input
            type="checkbox"
            id="autreLangueCheckbox"
            onChange={handleAutreLangueCheckboxChange}
          />
          Autre Langue
        </label>
        {showAutreLangue && (
          <input
            type="text"
            id="autreLangueText"
            value={autreLangueText}
            onChange={(e) => setAutreLangueText(e.target.value)}
            style={{ display: 'block' }}
          />
        )}
          </div>
          
  
          {/* Education */}
          <h2>Formations:</h2>
          <br />
          <div id="formation" required>
            <input
              type="text"
              name="institution[]"
              placeholder="Nom de l'institution'"
              required
            />
            <input type="text" name="diplome[]" placeholder="Diplôme" required />
            <input
              type="text"
              name="duree[]"
              placeholder="Durée de la formation"
              required
            />
            <input
              type="text"
              name="infosupp[]"
              placeholder="Informations supplémentaires"
            />
          </div>
          <button type="button" onClick={() => addFieldform('formation')}>
            Ajouter
          </button>
  
          {/* Certifications */}
          <h2>Certifications:</h2>
          <br />
          <div id="certifications">
            <input type="text" name="cert[]" placeholder="Nom de la certification" />
            <input type="text" name="date[]" placeholder="Date" />
            <input type="text" name="identifiant[]" placeholder="Identifiant" />
            <input
              type="text"
              name="infosupp[]"
              placeholder="Informations supplémentaires"
            />
          </div>
          <button type="button" onClick={() => addFieldcert('certifications')}>
            Ajouter
          </button>
  
          {/* Experience */}
          <h2>Expériences:</h2>
          <br />
          <div id="experiences">
            <input type="text" name="exp[]" placeholder="Titre" />
            <input type="text" name="duree[]" placeholder="Durée" />
            <input
              type="text"
              name="infosupp[]"
              placeholder="Informations supplémentaires"
            />
          </div>
          <button type="button" onClick={() => addFieldexp('experiences')}>
            Ajouter
          </button>
          
        

          <button type="submit">Générer</button>
        </form>
      </div>
    );
  }
export default Page1;