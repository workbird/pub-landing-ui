import React from "react";
import { MdClose } from "react-icons/md";
import "./ModalContent.scss";

export default function ModalContent({ onClose }) {
    const [startDate, setStartDate] = React.useState(new Date());
    const [startDate2, setStartDate2] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState(new Date());
    const [startTime2, setStartTime2] = React.useState(new Date());

    return (
        <div>
            <div className="modal-popup">
                <h4>Get Started</h4>
                <span className="modal-icon" onClick={onClose}>
                    <MdClose />
                </span>
            </div>

            <div className="modal-body">
                <div className="inner-body d-flex justify-content-between align-items-center saveBtn">
                    <input
                        type="text"
                        className=" py-2"
                        placeholder="Need to call back"
                    />
                    <button className="modal-btn  py-2">Save</button>
                </div>

                <div className="d-flex justify-content-between mt-4 align-items-center gap-4 dateTime">
                    <input
                        className="date py-2"
                        type="date"
                        placeholder="Start Date"
                        // value={startDate}
                        onChange={(date) => setStartDate(date)}
                    />

                    <input
                        className="date py-2"
                        type="time"
                        name="start-time"
                        placeholder="Start Time"
                        // value={startTime}
                        onChange={(date) => setStartTime(date)}
                    />

                    <p className="text-white  m-0">to</p>

                    <input
                        className="date py-2"
                        onChange={(date) => setStartDate2(date)}
                        type="date"
                        placeholder="End Date"
                        // value={startDate2}
                    />
                    <input
                        className="date py-2"
                        type="time"
                        name="end-time"
                        placeholder="End Time"
                        // value={startTime2}
                        onChange={(date) => setStartTime2(date)}
                    />
                </div>
            </div>
            <div className="modal-ftr">
                <input type="text" className=" py-2" placeholder="First Name" />
                <input type="text" className=" py-2" placeholder="Last Name" />
                <input type="text" className=" py-2" placeholder="Email" />
                <input type="text" className=" py-2" placeholder="Phone" />
                <textarea
                    className=" py-2 item1"
                    id="exampleFormControlTextarea1"
                    placeholder="Add description"
                    rows="4"
                ></textarea>
            </div>
        </div>
    );
}
