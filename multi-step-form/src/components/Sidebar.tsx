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
    <div className='side has-text-white'>
      {array2.map((res:any) => (
        <div key={res.order}>
          <div>STEP {res.order}</div>
          <div> {res.name} </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;