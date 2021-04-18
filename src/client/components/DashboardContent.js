import React from 'react';
import ReactDOM from 'react-dom';
import DashboardFilter from './DashboardFilter';
import DashboardItemsContainer from './DashboardItemsContainer';

class DashboardContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://api.spaceXdata.com/v3/launches?limit=100')
        .then(response => response.json())
        .then(json => {
            console.log(json);            
            this.setState({
                items: json,
                isLoaded: true
            });
        },(err) => {
            console.log(err);
        });
      }
    render(){
        return (
            <div className="row dashboard-content">
                <div className="col-xs-12 col-sm-12 col-lg-3">
                    <DashboardFilter items={this.state.items}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-9">
                    <DashboardItemsContainer items={this.state.items}/>
                </div>                      
            </div>
        )
    }
}

export default DashboardContent;