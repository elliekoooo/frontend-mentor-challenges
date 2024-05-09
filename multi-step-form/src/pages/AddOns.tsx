const AddOns:any = () => {
    return (
        <div className='container'>
        <div className='is-size-3 has-text-weight-bold'>
            Pick add-ons      
        </div>
        <span>Add-ons help enhance your gaming experience.</span>
        <form className='my-6 pr-6 mr-6'>
            <div className='field'>
                <div className="columns is-centered">
                    <div className="column is-9">
                        <div className="box">
                            <div className="control">
                                <div className="is-flex">
                                    <div className="is-flex is-justify-content-start is-align-items-center">
                                        <label className="checkbox">
                                            <input type="checkbox"/>
                                        </label>
                                        <div className="mx-5 my-1">
                                            <p className="has-text-link has-text-weight-bold">Online Service</p>
                                            <p className="has-text-grey is-size-7">Access to multiplayer games</p>
                                        </div>
                                    </div>
                                    <div className="is-flex is-justify-content-center is-align-items-center is-size-7 has-text-link">
                                        +1$/mo
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            test
                        </div>
                        <div className="box">
                            test
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
};

export default AddOns;