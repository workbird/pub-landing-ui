import React, { useState } from "react";
import dropdownData from "../../data/DropdownData";
import data from "../../data/ServicesListData";
import MultiDropDown from "./components/MultiDropDown/MultiDropDown";
import ServiceHeader from "./components/ServiceHeader/ServiceHeader";
import ServiceSearch from "./components/ServiceSearch/ServiceSearch";
import ServicesList from "./components/ServicesList/ServicesList";
import "./Services.scss";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    const [dropdown, setDropdown] = useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        setServices(data);
        setDropdown(dropdownData);
    }, []);

    const handleLike = (id, e) => {
        e.stopPropagation();
        const servece = services.find((service) => service.id === id);
        const likes = servece.likes + 1;
        const newServices = services.map((service) => {
            if (service.id === id) {
                return { ...service, likes };
            }
            return service;
        });
        setServices(newServices);
    };

    const handleDislike = (id, e) => {
        e.stopPropagation();
        const servece = services.find((service) => service.id === id);
        const likes = servece.likes - 1;
        const newServices = services.map((service) => {
            if (service.id === id) {
                return { ...service, likes };
            }
            return service;
        });
        setServices(newServices);
    };

    return (
        <div className="services">
            <div className="container py-5">
                <div className="multiDropDownItems">
                    {dropdown.map((drop, key) => (
                        <MultiDropDown key={key} />
                    ))}
                </div>
                <ServiceHeader title={"Service Hub"} />

                <ServiceSearch />

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.map((service, index) => (
                        <ServicesList
                            key={index}
                            onLike={(e) => handleLike(service.id, e)}
                            onDislike={(e) => handleDislike(service.id, e)}
                            image={service.image}
                            connector={service.connector}
                            likes={service.likes}
                            organization={service.organization}
                            version={service.version}
                            onClick={() =>
                                navigate(`/dashboard?id=${service.id}`)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
