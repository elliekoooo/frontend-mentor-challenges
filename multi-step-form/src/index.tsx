import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from 'components/Sidebar';
import 'bulma/css/bulma.css';
import "./styles/global.css"
import Content from 'components/Content';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='container my-6 py-6'>
      <div className='box'>
        <div className='columns'>
          <div className='side column mx-3 my-3 is-3'>
            <Sidebar></Sidebar>
          </div>
          <div className='column is-9'>
            <Content></Content>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

