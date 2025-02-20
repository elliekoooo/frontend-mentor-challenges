const Modal = ({isOpen ,  closeModal } : any) => {

    if(!isOpen) return null;

    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}  onClick={handleBackdropClick}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button className="modal-close is-large" aria-label="close" onClick={closeModal}>닫기</button>
                </header>
                <section className="modal-card-body">
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