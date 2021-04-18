import React from 'react';
import ReactDOM from 'react-dom';
import DashboardFilter from './DashboardFilter';
import DashboardItemsContainer from './DashboardItemsContainer';

class DashboardContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
            launchYear: null,
            launchSuccess: null
        }
        this.launchYearClickHandler = this.launchYearClickHandler.bind(this);
        this.successfulLaunchClickHandler = this.successfulLaunchClickHandler.bind(this);
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

      launchYearClickHandler(text){          
          let api = !!this.state.launchSuccess?
            `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${text}&launch_success=${this.state.launchSuccess}`:
            `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${text}`;
            console.log(api);
            fetch(api)
            .then(response => response.json())
            .then(json => {
                console.log(json);            
                this.setState({
                    items: json,
                    isLoaded: true,
                    launchYear:text,
                    launchSuccess: this.state.launchSuccess
                });
            },(err) => {
                console.log(err);
            });
      }

      successfulLaunchClickHandler(text){
        let api = !!this.state.launchYear?
            `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${this.state.launchYear}&launch_success=${text}`:
            `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${text}`;
            console.log(api);
            fetch(api)
            .then(response => response.json())
            .then(json => {
                console.log(json);            
                this.setState({
                    items: json,
                    isLoaded: true,
                    launchYear:this.state.launchYear,
                    launchSuccess:text
                });
            },(err) => {
                console.log(err);
            });
      }

    render(){
        return (
            <div className="row dashboard-content">
                <div className="col-xs-12 col-sm-12 col-lg-3">
                    <DashboardFilter items={this.state.items} 
                        onSuccessfulLaunchedClicked={this.successfulLaunchClickHandler} 
                        onLaunchYearClicked={this.launchYearClickHandler}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-9">
                    <DashboardItemsContainer items={this.state.items}/>
                </div>                      
            </div>
        )
    }
}

export default DashboardContent;