import React from "react";
import "./Modal.scss";
import * as ReactDOM from "react-dom";

function ModalView({ isShown, toggleModal, children }) {
    const backdropModalRef = React.useRef(null);
    const modalRef = React.useRef(null);

    const handleHide = (e) => {
        e.stopPropagation();
        toggleModal();
    };

    React.useEffect(() => {
        if (!isShown) {
            backdropModalRef.current.classList.remove("show");
            modalRef.current.classList.remove("show");
            const timer = setTimeout(() => {
                backdropModalRef.current.style.display = "none";
                modalRef.current.style.display = "none";
            }, 300);
            return () => clearTimeout(timer);
        }

        if (isShown) {
            backdropModalRef.current.style.display = "block";
            modalRef.current.style.display = "block";
            const timer = setTimeout(() => {
                backdropModalRef.current.classList.add("show");
                modalRef.current.classList.add("show");
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isShown]);

    return (
        <>
            <div
                onClick={toggleModal}
                className={`backdrop `}
                ref={backdropModalRef}
            />
            <div
                onMouseDown={handleHide}
                className={`cs-modal `}
                ref={modalRef}
            >
                <div
                    onMouseDown={(e) => {
                        e.stopPropagation();
                    }}
                    className="cs-modal__content"
                >
                    {children}
                </div>
            </div>
        </>
    );
}

export default function Modal({ ...props }) {
    return ReactDOM.createPortal(
        <ModalView {...props} />,
        document.getElementById("modal")
    );
}
