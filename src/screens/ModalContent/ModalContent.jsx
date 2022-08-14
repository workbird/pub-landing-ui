import React from "react";
import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";

export default function ModalContent({ onClose }) {
    const [startDate, setStartDate] = React.useState(new Date());
    const [startDate2, setStartDate2] = React.useState(new Date());

    return (
        <div>
            <div className="modal-popup">
                <h4>Get Started</h4>
                <span className="modal-icon" onClick={onClose}>
                    <MdClose />
                </span>
            </div>
            <div className="modal-body">
                <div className="inner-body d-flex justify-content-between align-items-center">
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Need to call back"
                    />
                    <button className="modal-btn">Save</button>
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <DatePicker
                        className="date"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                    />

                    <p className="text-white px-2">to</p>

                    <DatePicker
                        className="date"
                        selected={startDate2}
                        onChange={(date) => setStartDate2(date)}
                    />
                </div>
            </div>
            <div className="modal-ftr">
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                />
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Phone"
                />
                <textarea
                    class="form-control item1"
                    id="exampleFormControlTextarea1"
                    placeholder="Add description"
                    rows="4"
                ></textarea>
            </div>
        </div>
    );
}
