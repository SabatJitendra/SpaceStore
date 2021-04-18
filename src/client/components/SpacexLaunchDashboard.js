import React from 'react';
import ReactDOM from 'react-dom';

import DashboardTitle from './DashboardTitle';
import DashboardContent from './DashboardContent';
import DashboardFooter from './DashboardFooter';

class SpacexLaunchDashboard extends React.Component{        
    render(){ 
        let dashboardLayout = {
            backgroundColor: '#ededed',
            padding: '20px'
        };       
        return(            
            <div className="launch-dashboard" style={dashboardLayout}>
                <DashboardTitle/>
                <DashboardContent/>
                <DashboardFooter/>               
            </div>
        )
    }
}

export default SpacexLaunchDashboard;