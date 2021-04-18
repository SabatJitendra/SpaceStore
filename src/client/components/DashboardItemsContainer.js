import React from 'react';
import ReactDOM from 'react-dom';
import DashboardFilter from './DashboardFilter';
import DashboardItem from './DashboardItem';

class DashboardItemsContainer extends React.Component{
    constructor(props){
        super(props);        
    }
    render(){                     
        return (
            <div className="row dashboard-items-container">
            {
                this.props.items.map((item,index)=>{
                    return <DashboardItem key={index} data={item}/>;
                })
            }                                
            </div>
        )
    }
}

export default DashboardItemsContainer;