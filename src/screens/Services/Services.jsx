import React, { useState } from "react";
import dropdownData from "../../data/DropdownData";
import data from "../../data/ServicesListData";
import MultiDropDown from "./components/MultiDropDown/MultiDropDown";
import ServiceHeader from "./components/ServiceHeader/ServiceHeader";
import ServiceSearch from "./components/ServiceSearch/ServiceSearch";
import ServicesList from "./components/ServicesList/ServicesList";
import "./Services.scss";

const Services = () => {
    const [services, setServices] = useState([]);
    const [dropdown, setDropdown] = useState([]);

    React.useEffect(() => {
        setServices(data);
        setDropdown(dropdownData);
    }, []);

    const handleLike = (id) => {
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

    const handleDislike = (id) => {
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
                <div className="d-flex justify-content-between mb-5">
                    {dropdown.map((drop, key) => (
                        <MultiDropDown key={key} />
                    ))}
                </div>
                <ServiceHeader title={"lorem ipsum"} />

                <ServiceSearch />

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.map((service, index) => (
                        <ServicesList
                            key={index}
                            onLike={() => handleLike(service.id)}
                            onDislike={() => handleDislike(service.id)}
                            image={service.image}
                            connector={service.connector}
                            likes={service.likes}
                            organization={service.organization}
                            version={service.version}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
