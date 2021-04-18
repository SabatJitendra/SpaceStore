import React from 'react';
import ReactDOM from 'react-dom';

class DashboardFilter extends React.Component{
    render(){
        const dashboardFilter = {
            minHeight:'800px',
            backgroundColor:'white',
            width:'auto',
            borderRadius:'10px'
        };
        return (
            <div className="dashboard-filter" style={dashboardFilter}>
               
            </div>
        )
    }
}

export default DashboardFilter;