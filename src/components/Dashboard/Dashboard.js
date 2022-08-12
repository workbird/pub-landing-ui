import React from 'react';
import "./Dashboard.scss";
import DashboardCenter from './DashboardContent/DashboardCenter/DashboardCenter';
import DashboardLeft from './DashboardContent/DashboardLeft/DashboardLeft';
import DashboardRight from './DashboardContent/DashboardRight/DashboardRight';


const Dashboard = () => {
    
    return (
        <div className="grid">
            <div className="left">
                <DashboardLeft/>
            </div>
            <div className="center">
                <DashboardCenter/>
            </div>
            <div className="right">
                <DashboardRight/>
            </div>
        </div>
    );
};

export default Dashboard;