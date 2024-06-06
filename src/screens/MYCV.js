import React, { useState, useEffect, useRef, FormEvent } from 'react';
import './MYCV.css';

const MYCV = () => {
  const corpsRef = useRef(null);
  const zoneCoteRef = useRef(null);

  useEffect(() => {
    const corpsHeight = corpsRef.current.offsetHeight;
    const zoneCoteHeight = zoneCoteRef.current.offsetHeight;

    if (zoneCoteHeight < corpsHeight) {
      zoneCoteRef.current.style.height = `${corpsHeight}px`;
    } else {
      corpsRef.current.style.height = `${zoneCoteHeight}px`;
    }
  }, []);

  useEffect(() => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerHTML = "Dernière modification : " + lastModified;
  }, []);

  return (
    <div className="container">
		<body>
      <section className="introduction">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQFKBELZwFdIhA/profile-displayphoto-shrink_400_400/0/1708880874461?e=1721260800&v=beta&t=IitN5RasNnXe923v4AkXRkfnjYTzx7T_ntH2-zbptfw"
          alt="photo"
          width="200"
          height="200"
          className="pdp"
        />
        <section className="intro">
          <h1>ELYOUSSOUFI Houda</h1>
          <ul className="informations">
            <li>23 ans</li>
            <li>Elève ingénieur en réseau-télécommunications</li>
            <li>Rabat, Maroc</li>
          </ul>
        </section>
      </section>

      <section className="zone-cote" id="zone-cote" ref={zoneCoteRef}>
        <section>
          <h1>Contacts:</h1>
          <ul className="contacts">
            <li>
              <a href="mailto:houdaelyoussoufi5gmail.com">houdaelyoussoufi5gmail.com</a>
            </li>
            <li>
              <a href="tel:+212644277855">+212 6 44 27 78 55</a>
            </li>
          </ul>
          <ul className="socials">
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/houda-elyoussoufi-a8262a254/"
                target="_blank"
              >
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                  alt="Logo Linkedin"
                  width="80"
                  height="50"
                />
              </a>
            </li>
            <li className="github">
              <a href="https://github.com/Houdae013" target="_blank">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-github-169-1174970.png?f=webp&w=30"
                  alt="Logo github"
                  width="60"
                  height="50"
                />
              </a>
            </li>
          </ul>
        </section>
        <br />
        <hr />
	<section class="comptech">
		<h1>Compétences techniques:</h1>
		<ul>
			<li>Microsoft Power-Point, Word, Excel
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>

			<li>Programmation(Python,C,HTML,CSS)
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Administration BD(Oracle)
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>SQL, PLSQL
				<div class="barre">
					<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Administration système
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Linux, Windows
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Force de proposition
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Prise de parole en public
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Communication et travail d'équipe
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
		</ul>
	</section>
	<br/>
	<hr/>
	
	<section class="comppers">
		<h1>Compétences personnelles:</h1>
		<ul>
			<li>Une bonne capacité d'adaptation
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Polyvalente
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Dynamique et réactive
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Organisée et ponctuelle
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Leadership et esprit d'initiative
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Calme et responsable
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
		</ul>
	</section>
	<br/>
	<hr/>
	
	<section class="compling">
		<h1>Compétences linguistiques</h1>
		<ul>
			<li>Français
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Anglais
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
			<li>Arabe
				<div class="barre">
				<div
  className="remplissage"
  style={{ "--pourcentage": "80%" }}
></div>
				</div>
			</li>
		</ul>
	</section>
	<br/>
	<hr/>
	<section class="prix">
		<h1>Prix et distinctions:</h1>
		<ul>
			<li>
				<p>Finaliste de l'Ultime Débat National - UDN - Section française</p>
				<p>2023</p>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfhDUoD7vtHv-sm2A2hhNb0JzuxSldKA_Aw&s" alt="logo youtube" width="40px" height="40px"/>
				<a href="https://youtu.be/aLynuxhodZI?feature=shared" target="_blank"> vidéo de la finale de l'UDN</a>
			</li>
		</ul>
	</section>
</section>


<section class="corps" id="corps" ref={corpsRef}>
<section class="cadre">

	<section class="profile">
		<h1>Profile</h1>
		<p>Futur ingénieur en réseau-télécommunications de l'Ecole Mohammadia d'ingénieurs.</p>
	</section>
<br/>
<br/>
	<section class="formations">
		<h1>Formations et diplômes:</h1>
		<ul>
			<li>
				<img src="https://www.emi.ac.ma/wp-content/uploads/2023/11/logo-emi.png" alt="logo emi" width="80" height="50"/>
				<h3>Génie -Electrique, Réseaux et Télécoms-/Ecole Mohammadia d'Ingénieurs 
				Rabat</h3>
				<h3>2022-2025</h3>
				<p>En cours...</p>
			</li>
			
			<li><img src="https://www.igmprepa.com/images/config/logo1.png" alt="logo ibnghazi" width="80" height="50"/>
				<h3>Classes Préparatoires aux grandes écoles d'ingénieurs/ Centre Ibn Ghazi Marrakech</h3>
				<h3>2020-2022</h3>
				<p>Deux années préparatoires MPSI/MP.</p>
			</li>
			<li><img src="https://www.uca.ma/public/website/theme-2/img/logo.png" alt="logo fssm" width="80" height="50"/>
				<h3>1ère Année Licence en Biologie-SVTU/Faculté des Sciences Semlalia de Marrakech </h3>
				<h3>2019-2020</h3>
			</li>
			
			<li><img src="https://www.lemeilleur.ma/wp-content/uploads/2021/03/zzlemeilleurtradec-1886.png" alt="logo ariha" width="80" height="50"/>
				<h3>Baccalauréat/ Lycée Groupe Scolaire Ariha Marrakech</h3>
				<h3>2018-2019</h3>
				<p>Baccalauréat Sciences Physiques 
				Option: Bac International Option Français</p>
			</li>
		</ul>
	</section>
	<br/>
	<br/>
	<section class="certifications">
		<h1>Certifications:</h1>
		
		<ul>
			<li><img src="https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_100_100/0/1688482473854/cisco_logo?e=1723680000&v=beta&t=wRztsYmV_UqGK3Lrqm4IMIvBRNJcMPkvhBq-nsumdJg" alt="logo cisco" width="60" height="60"/>
				<h3><a href="https://www.credly.com/badges/9f9b571f-5856-4bab-ba6c-6ff1e3bd44f0/public_url" target="_blank"> Introduction to Networks</a></h3>
				<h3>Cisco - Date de délivrance : mars 2024</h3>
				<p>Identifiant de la certification 9f9b571f-5856-4bab-ba6c-6ff1e3bd44f0</p>
			</li>
			
			<li><img src="https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1630530042036/coursera_logo?e=1723680000&v=beta&t=gOfVfS7IRZR-ZsHG-tlrco3T2j8pITSJmb2tIqRZBYc" alt="logo coursera" width="60" height="60"/>
				<h3><a href="https://www.coursera.org/account/accomplishments/certificate/TA5L93X9C4M6" target="_blank"> Connect and Protect: Networks and Network
				Security</a></h3>
				<h3>Coursera Google Certificate - Date de délivrance : février 2024</h3>
				<p>Identifiant de la certification TA5L93X9C4M6</p>
			</li>
			
			<li><img src="https://media.licdn.com/dms/image/D4E0BAQG0KOJuostucw/company-logo_100_100/0/1712309984584/tryhackme_logo?e=1723680000&v=beta&t=-qMgXy_jBnBua5MjC1IVSbFm093tBCi3nGeWntyXaVQ" alt="logo try hackme" width="60" height="60"/>
				<h3><a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-FL0WXHZOPR.png" target="_blank"> Pre Security Learning Path</a></h3>
				<h3>TryHackMe - Date de délivrance : février 2024</h3>
				<p>Identifiant de la certification THM-FL0WXHZOPR</p>
			</li>
			
		</ul>
	</section>
	<br/>
	<br/>
	<section class="experiences">
		<h1>Expériences:</h1>
		<ul>
			<li><img src="https://media.licdn.com/dms/image/D4E0BAQGiIN0psKjzhQ/company-logo_100_100/0/1691179028721?e=1723680000&v=beta&t=n7wJ-FsFv4De-Fh4qk8yQ8WE1qGzb1d4GA3kIGe9NK0" alt="logo tgdemi" width="60" height="60"/>
				<h3>Cheffe de la section française du club The Great Debaters EMI</h3>
				<h3>2023 - 2024</h3>
			</li>
			
			<li><img src="https://www.oncf.ma/images/logo.png?v4.6" alt="logo oncf" width="80" height="50"/>
				<h3>Stage d'observation / ONCF Marrakech </h3>
				<h3>2023</h3>
				<p>1 juillet 2023 - 1 aôut 2023</p>
			</li>
			<li><img src="https://media.licdn.com/dms/image/D4E0BAQGiIN0psKjzhQ/company-logo_100_100/0/1691179028721?e=1723680000&v=beta&t=n7wJ-FsFv4De-Fh4qk8yQ8WE1qGzb1d4GA3kIGe9NK0" alt="logo tgdemi" width="60" height="60"/>
				<h3>Membre de la cellule conception du club The Great Debaters EMI</h3>
				<h3>2022 - 2023</h3>
			</li>
			
			<li><img src="https://media.licdn.com/dms/image/C4D0BAQEwePwKovLEBQ/company-logo_200_200/0/1630529087752?e=1724284800&v=beta&t=gfmIPs3O1F3GwyiVHbJJvYMx3N3ix73bhM30T2YFORY" alt="logo tgdemi" width="60" height="60"/>
				<h3>Membre de la cellule revue du club Eminence</h3>
				<h3>2022 - 2023</h3>
			</li>
		</ul>
	</section>
</section>
</section>
<section class="pied">
	<hr/>
	<hr/>
	<p>Édité par Houda ELYOUSSOUFI</p>
	<p id="lastModified"></p>
	
	<p>@Copyright-All Right Reserved</p>
</section>
</body>
</div>

)
}
export default MYCV;