import React from 'react';

type process = {
  order: number
  name: string
}

const Sidebar:any = (array:process[]) => {

var array2:process[] = [
    {order: 0, name: 'your info'},
    {order: 1, name: 'select plan'},
    {order: 2, name: 'add-ons'},
    {order: 3, name: 'summary'}
  ]
   
  return (
    <div className='has-text-white px-6 py-3'>
      {array2.map((res:any) => (
        <div className='is-flex py-2'>
          <div className='circle has-text-centered mr-3 my-2'>
            {res.order+1}
          </div>
          <div key={res.order} className='py-1'>
            <div className='is-size-7'>STEP {res.order}</div>
            <div className='has-text-weight-bold is-uppercase'> {res.name} </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;