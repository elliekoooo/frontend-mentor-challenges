import data from "../json/modal-data.json";
import close from "/assets/icon-close-modal.svg";

type modal = {
    title: string;
    price: number;
    left: number;
    content: string;
}

const Modal = ({isOpen ,  closeModal } : any) => {

    if(!isOpen) return null;

    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}  onClick={handleBackdropClick}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <div className="subtitle has-text-weight-bold">Back this project</div>
                    <div>Want to support us in bringing Mastercraft Bamboo Monitor Rise out in the world?</div>
                    {
                        data.map((d:modal, index:number)=> (
                            <div key={index} className="card my-6 py-5 is-shadowless" style={{"border": "0.01rem solid lightgrey"}}>
                                <div className="card-body px-5">
                                    <div className="control">
                                        <label className="radio">
                                            {/* 라디오 버튼 새로 만들어야할듯 */}
                                            <input type="radio" name="select" style={{"transform":"scale(1.5)", "color":"whit"}}></input>
                                            <span className="has-text-weight-bold mx-4">{d.title}</span>
                                        </label>
                                        <span className="has-text-primary mx-3">Pledge ${d.price} or more</span>
                                        <span className="is-pulled-right">
                                            <span className="has-text-weight-bold">{d.left} </span>
                                            <span>left</span>
                                        </span>
                                    </div>
                                    <div className="ml-5 mt-5 has-text-grey">
                                        {d.content}
                                    </div>
                                </div>
                            </div>
                        ))  

                    }
                {/* <button className="modal-close is-large my-4" aria-label="close">
                    <img src={close}></img>
                </button> */}
                </section>

             </div>
        </div>
    );

    function handleBackdropClick(e : React.MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) {
          closeModal();  
        }
      }
};

export default Modal;