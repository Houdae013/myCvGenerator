import React from 'react';
import './contacts.css';
const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="container-contacts">
      
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
  );
}

export default Contacts;
