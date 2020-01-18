import React from 'react';
import api from '../../services/axios';

import './style.css';

export default function DevItem({ dev, onDelete }) {

  // const [username, setUsername] = useState('');

  async function handleDelete(e) {
    e.preventDefault();
    onDelete(dev.github_username);
  }

  return (
    <li key={dev._id} className="dev-item">
      <button onClick={handleDelete} id="delete">Delete</button>
              
      
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.map(tech =>(tech + ' '))}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
      <button id="update">Edit</button>
    </li>
  );
}