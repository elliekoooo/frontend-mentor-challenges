import React from "react";


const Validation = (input:any) => {
    const _input = input.target;
    const value = _input.value;
    let message:string = "";

    if(_input.name === 'day' && !(value > 0 && value < 30)){
        message = "Must be a valid day";

    }else if(_input.name === 'month' && !(value > 0 && value < 13)){
        message = "Must be a valid month";

    }else if(_input.name === 'year' && (value > 2025)){
        message = "Must be in the past";
    }

    return {
        name : _input.name,
        message: message
    };
};


export default Validation;