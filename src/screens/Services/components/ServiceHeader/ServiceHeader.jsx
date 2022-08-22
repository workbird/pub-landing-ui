import React from "react";
import Modal from "./../../../Common/Modal/Modal";
import ModalContent from "./../../../ModalContent/ModalContent";

export default function ServiceHeader({ title }) {
    const [isShown, setIsShown] = React.useState(false);

    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <h2 className="text-white text-uppercase">{title}</h2>
            <div className="services-btns">
                <span
                    onClick={() => setIsShown((prev) => !prev)}
                    className="services-btn"
                    href="#"
                >
                    Custom Services
                </span>
            </div>

            <Modal
                isShown={isShown}
                toggleModal={() => setIsShown((prev) => !prev)}
            >
                <ModalContent onClose={() => setIsShown((prev) => !prev)} />
            </Modal>
        </div>
    );
}
