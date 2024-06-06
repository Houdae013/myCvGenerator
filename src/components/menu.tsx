import React from 'react';
import './button.css';
const ButtonSection: React.FC = () => {
  return (
    <section id="buttons" className="container">
      <h2>Menu:</h2>
      <div className="button-container">
      <button onClick={() => window.location.href='/formulaire'}>Aller au formulaire</button>
      <button onClick={() => window.location.href='/moncv'}>Aller à mon CV</button>
      </div>
    </section>

  );
}

export default ButtonSection;
 