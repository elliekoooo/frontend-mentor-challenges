import 'bulma/css/bulma.css'
import './App.css'
import { useState } from 'react';
import arrow from 'assets/images/icon-arrow.svg'
import valid, { errorMessage } from 'Validation';

type dateNums = {
    day: number,
    month: number,
    year: number
}

const curr:Date = new Date();
const isPositive = (num: number): number => {
  return Math.sign(num);
};

const countDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

const resetValue = () => {
  return {
    day: '--',
    month: '--',
    year: '--'
  }
};
    
const calculate = (_date: dateNums) => {
    if(_date.day == 0 || _date.month == 0 || _date.year == 0 || errors.day != '' || errors.month != '' || errors.year != ''){
      return resetValue();
    };

    if(countDaysInMonth(_date.year, _date.month) < _date.day){
      errors.day = errorMessage.day;
      return resetValue();
    }

    const currDate:dateNums = { day: curr.getDate(), month: curr.getMonth()+1, year: curr.getFullYear() };
    const inputDate:dateNums = _date;

    const diffDay:number = currDate.day - inputDate.day;
    const diffMonth:number = currDate.month - inputDate.month;
    const diffYear:number = currDate.year - inputDate.year;

    const diff:dateNums = {
      day: isPositive(diffDay) === -1 ? diffDay+30 : diffDay,
      month: isPositive(diffMonth) === -1 ? diffMonth+12 : diffMonth,
      year: isPositive(diffMonth) === -1 ? diffYear-1 : diffYear
    };

    return diff;  
};

let errors: {day?: string, month?: string, year?: string}={};

function App() {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  
  const getDate = (e: any) => {
    setDate((prev:any) => {
      return {
        ...prev, [e.target.name]: e.target.value ?? 0
      };
    });
  };

  return (
      <section className='section is-flex is-justify-content-center is-align-items-center'>
        <div className='box is-rounded'>
          <div className='columns is-mobile mx-3 my-5'>
            <div className='column is-3-desktop is-3-tablet'>
              <div className='field'>
                <label className='label is-small has-text-grey'>DAY</label>
                <div className='control'>
                  <input className='input is-size-5 has-text-weight-bold' name='day' type='number' onChange={getDate} onInput={(e)=>errors['day'] = valid(e)}></input>
                  <span className='is-size-7 has-text-danger'>{errors.day}</span>
                </div> 
              </div>
            </div>
            <div className='column is-3-desktop is-3-tablet'>
              <div className='field'>
                <label className='label is-small has-text-grey'>MONTH</label>
                <div className='control'>
                  <input className='input is-size-5 has-text-weight-bold' name='month' type='number' onChange={getDate} onInput={(e)=>errors['month'] = valid(e)}></input>
                  <span className='is-size-7 has-text-danger'>{errors.month}</span>
                </div>
              </div>
            </div>
            <div className='column is-3-desktop is-3-tablet'>
              <div className='field'>
                <label className='label is-small has-text-grey'>YEAR</label>
                <div className='control'>
                  <input className='input is-size-5 has-text-weight-bold' name='year' type='number' onChange={getDate} onInput={(e)=>errors['year'] = valid(e)}></input>
                  <span className='is-size-7 has-text-danger'>{errors.year}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='divider mx-5'>
            <figure className='image is-64x64 px-4 py-4 purple circle'>
              <img src={arrow}></img>
            </figure>
          </div>
          <div className='mx-1 my-5'>
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
        </div>
      </section>
  )
}

export default App;
