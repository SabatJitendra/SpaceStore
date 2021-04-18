import React from 'react';
import ReactDOM from 'react-dom';

class DashboardFooter extends React.Component{
    render(){
        const dashBoardFooter = {
            textAlign: 'center',
            marginTop: '10px'
        }
        return (
            <div className="dashboard-footer" style={dashBoardFooter}>
                <span style={{fontWeight:'bold'}}>Developed By:</span> Jitendra Sabat
            </div>
        )
    }
}

export default DashboardFooter;