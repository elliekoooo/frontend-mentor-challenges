export const errorMessage = {
    day: 'Must be a valid day',
    month: 'Must be a valid month',
    year: 'Must be in the past'
} as const;

const currDate = new Date();
const Validation = (input:any) => {
    const _input = input.target;
    const value = _input.value;
    let message:string = "";

    if(_input.name === 'day' && !(value > 0)){
        message = errorMessage.day;

    }else if(_input.name === 'month' && !(value > 0 && value < 13)){
        message = errorMessage.month;

    }else if(_input.name === 'year' && (value > currDate.getFullYear())){
        message = errorMessage.year;
    }

    return message;
};

export default Validation;