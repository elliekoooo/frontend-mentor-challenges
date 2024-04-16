import React from 'react';


const YourInfo: any = () => {
  return (
    <div className='my-5'>
      <div className='is-size-2 has-text-weight-bold'>
        Personal info      
      </div>
      <span>Please provide your name, email address and phone number.</span>

      <form className='my-6 pr-6 mr-6'>
        <div className='field my-3'>
          <label className='label'>Name</label>
          <div className='control'>
            <input className='input' type='text' placeholder='e.g. Stephen King' ></input>
          </div>
        </div>
        <div className='field my-3'>
          <label className='label'>Email Address</label>
          <div className='control'>
            <input className='input' type='email' placeholder='e.g. stephenking@lorem.com' ></input>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Phone Number</label>
          <div className='control'>
            <input className='input' type='text' placeholder='e.g. +1 234 567 890' ></input>
          </div>
        </div>
        <div className='field is-grouped is-grouped-right'>
          <p className='control is-vcentered'>
            <button className='button is-medium is-link'>
              <span className='is-size-6'>Next step</span>
            </button>
          </p>
        </div>
      </form>

    </div>
  );
}

export default YourInfo;
