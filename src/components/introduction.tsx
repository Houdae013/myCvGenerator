import React from 'react';
import './introduction.css';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="introduction-container">
      <h2>Introduction</h2>
      <h2>Bienvenue sur mon site personnel ! </h2>
      <p>Ce site a été conçu pour vous offrir une expérience simple et efficace, vous permettant de découvrir mon parcours professionnel et de créer votre propre CV en quelques étapes faciles.</p>
      <h3>Fonctionnalités du site :</h3>
        <h3>1 - Mon CV :</h3> 
        <p>Accédez à la page dédiée à mon CV pour explorer en détail mon parcours académique et professionnel, mes compétences, mes expériences, et mes réalisations. Cette section vous donnera une vue d'ensemble de mon profil et de mes qualifications.
        </p>
        <br/>
        <h3>2 - Générateur de CV :</h3> 
        <p>Grâce à notre générateur de CV, vous pouvez facilement créer votre propre CV personnalisé. Il vous suffit de remplir un formulaire détaillé avec vos informations personnelles, vos compétences, vos expériences et vos formations. Une fois le formulaire complété, notre outil générera automatiquement un CV professionnel que vous pourrez télécharger et utiliser pour vos candidatures.
        </p>
      <br/>
      <br/>
      <p>Nous avons conçu ce site pour qu'il soit intuitif et convivial, vous permettant de naviguer sans effort entre les différentes sections. Que vous souhaitiez en savoir plus sur mon parcours ou créer votre propre CV, tout est à portée de main.</p>
      <h2>Merci de visiter mon site, et bonne création de CV !</h2>
    </section>
  );
}

export default Introduction;
