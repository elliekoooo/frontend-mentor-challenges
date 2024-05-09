import React from 'react';


const array2 = [
    {
        name: 'Arcade',
        plan: {
            'monthly': {
                'price': '9',
            },
            'yearly': {
                'price': ''
            } 
        },
    },
    {
        name: 'Advanced',
        plan: {
            'monthly': {
                'price': '12',
            },
            'yearly': {
                'price': ''
            } 
        }
    },
    {
        name: 'Pro',
        plan: {
            'monthly': {
                'price': '15',
            },
            'yearly': {
                'price': ''
            } 
        }
    }
]

const SelectPlan:any = (array: {}[]) => {
    return (
        <div className='container'>
            <div className='is-size-3 has-text-weight-bold'>
                Select your plan      
            </div>
            <span>You have the opinion of monthly or yearly billing</span>
            <form className='my-6 pr-6 mr-6'>
                <div className='field'>
                    <div className='columns is-centered'>
                        {array2.map(a => {
                        return <div className='column is-3 mx-1'>
                                <div className='box is-rounded'>
                                    <figure className='image is-32x32 mb-6 pb-6'>
                                        <img className='is-rounded' src={"../images/icon-"+a.name+".svg"} />
                                    </figure>
                                    <div className='has-text-weight-semibold has-text-link'>
                                        {a.name}
                                    </div>
                                    <span className='is-size-7 has-text-grey'>
                                        ${a.plan['monthly']['price']}/mo
                                    </span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='field my-6'>
                    <div className='columns is-centered has-text-link has-text-weight-bold'>
                        <div className='column is-size-7 is-flex is-justify-content-center is-align-items-center py-0 is-9 has-background-info-light'>
                            <span className='mx-3'>Monthly</span>
                            <input id='planner' type='checkbox' name='planner' className='switch is-rounded is-small' checked></input>
                            <label htmlFor="planner"></label>
                            <span className='mx-3'>Yearly</span>
                        </div>
                    </div>
                </div>
                <div className='field'>
                    <div className='columns is-centered'>
                        <div className='column px-0 is-9 is-flex is-justify-content-space-between'>
                            <div className='control'>
                                <button className='button is-medium is-link'>
                                    <span className='is-size-6'>Go back</span>
                                </button>
                            </div>
                            <div className='control'>
                                <button className='button is-medium is-link'>
                                    <span className='is-size-6'>Next steps</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default SelectPlan;