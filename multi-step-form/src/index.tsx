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
    <div className='columns'>
      <div className='column is-3'>
        <Sidebar></Sidebar>
      </div>
      <div className='column is-9'>
        <Content></Content>
      </div>
    </div>
  </React.StrictMode>
);

