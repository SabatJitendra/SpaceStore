import React from 'react';
import ReactDOM from 'react-dom';

class DashboardTitle extends React.Component{
    render(){
        return (
            <div className="dashboard-title">
                <div style={{fontSize:'20px',fontWeight:'bold',paddingBottom:'10px'}}>SpaceX Launch Programs</div>
            </div>
        )
    }
}

export default DashboardTitle;