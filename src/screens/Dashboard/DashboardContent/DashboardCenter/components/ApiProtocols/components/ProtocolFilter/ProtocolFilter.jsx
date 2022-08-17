import "./ProtocolFilter.scss";

const ProtolFilter = ({ onSelect, selected, title, data }) => (
    <div class="dropdown">
        <button
            class="btn btn-secondary dropdown-toggle dropToggler"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            {title}
        </button>
        <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
        >
            {data?.map((protocol) => (
                <li key={protocol._id} onClick={() => onSelect(protocol)}>
                    <span
                        class={`dropdown-item ${
                            selected === protocol.label ? "active" : ""
                        }`}
                    >
                        {protocol.label}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

export default ProtolFilter;
