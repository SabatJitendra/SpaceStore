import React from 'react';
import ReactDOM from 'react-dom';

class DashboardFooter extends React.Component{
    render(){
        const dashBoardFooter = {
            textAlign: 'center'
        }
        return (
            <div className="dashboard-footer" style={dashBoardFooter}>
                Developed By: Jitendra Sabat
            </div>
        )
    }
}

export default DashboardFooter;