import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='upperContainer'>
          <div className='logoContainer'>
            <img src='https://i.imgur.com/g34KSmX.png' alt='cerf' />
          </div>
          <div className='navContainer'>
            <div className='navItem'>Sobre Nós</div>
            <div className='navItem'>Serviços</div>
            <div className='navItem'>Equipe</div>
            <div className='navItem'>Blog</div>
            <div className='navItem'>Contato</div>
         </div>
      </div>
      </header>
    </div>
  );
}

export default App;
