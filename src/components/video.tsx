import React from 'react';
import './video.css';
import imgf from './imgf.png'; // Importez l'image de cette manière

const VideoSection: React.FC = () => {
  return (
    <section id="photo" className="photo-container">
      <h2>Images de démonstration</h2>
      {/* Utilisez l'URL de l'image importée */}
      <img src={imgf} alt="Image de démonstration" width="1250"
          height="600"/>
    </section>
  );
}

export default VideoSection;
