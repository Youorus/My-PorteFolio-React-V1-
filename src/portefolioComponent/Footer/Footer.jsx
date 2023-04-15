import React from 'react'
import {  Geo,Telephone,EnvelopeAt } from 'react-bootstrap-icons';
import logo from '../Navbar/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <img style={{width: 100}} src={logo}/>
            <p >&copy; 2023 Exemple Company. Tous droits réservés.</p>
        <div> 
        <ul>
          <li><Geo /> 123 Rue des exemples, Ville, Pays</li>
          <li><Telephone /> +33 6 12 34 56 78</li>
          <li><EnvelopeAt /> contact@exemple.com</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer