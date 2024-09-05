import 'bulma/css/bulma.css'
import './App.css'
import React, { useState } from 'react';
import arrow from 'assets/images/icon-arrow.svg'

type dateNums = {
    day: number,
    month: number,
    year: number
}

const curr = new Date();

const isPositive = (num: number): number => {
  return Math.sign(num);
};
    
const calculate = (_date: dateNums) => {
    const currDate:dateNums = {day: curr.getDate(), month: curr.getMonth()+1, year: curr.getFullYear() };
    const inputDate:dateNums = _date;

    const diffDay:number = currDate.day - inputDate.day;
    const diffMonth:number = currDate.month - inputDate.month;
    const diffYear:number = currDate.year - inputDate.year;

    const diff:dateNums = {
      day: isPositive(diffDay) === -1 ? diffDay+30 : diffDay,
      month: isPositive(diffMonth) === -1 ? diffMonth+12 : diffMonth,
      year: isPositive(diffMonth) === -1 ? diffYear-1 : diffYear
    }

    return diff;  
};

function App() {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  
  const getDate = (e: any) => {
    setDate((prev:any) => {
      return {
        ...prev, [e.target.name]: e.target.value
      };
    });
  };

  return (
      <section className='section is-flex is-justify-content-center is-align-items-center'>
        <div className='box is-rounded'>
          <div className='columns is-gap-2 mx-3 my-5'>
            <div className='column is-12'>
              <div className='field'>
                <label className='label is-small has-text-grey'>DAY</label>
                <div className='control'>
                  <input className='input' name='day' type='text' onChange={getDate}></input>
                </div> 
              </div>
            </div>
            <div className='column is-3'>
              <div className='field'>
                <label className='label is-small has-text-grey'>MONTH</label>
                <div className='control'>
                  <input className='input' name='month' type='text' onChange={getDate}></input>
                </div>
              </div>
            </div>
            <div className='column is-3'>
              <div className='field'>
                <label className='label is-small has-text-grey'>YEAR</label>
                <div className='control'>
                  <input className='input' name='year' type='text' onChange={getDate}></input>
                </div>
              </div>
            </div>
          </div>
          <div className='columns mr-6 my-1 is-gapless'>
            <div className='column is-11 line'></div>
            <div className='column is-1'>
              <figure className='image is-64x64 px-3 py-3 circle purple'>
                <img src={arrow}></img>
              </figure>
            </div>
          </div>
          <div className='font is-italic is-size-1 has-text-weight-bold mx-5'>
            <p className=''>
              <span className='font-purple'>{calculate(date).year}</span> years
            </p>
            <p className=''>
            <span className='font-purple'>{calculate(date).month}</span> months
            </p>
            <p className=''>
            <span className='font-purple'>{calculate(date).day}</span> days
            </p>
          </div>
        </div>
      </section>
  )
}

export default App;
