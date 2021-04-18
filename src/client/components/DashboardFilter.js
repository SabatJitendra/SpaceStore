import React from 'react';
import ReactDOM from 'react-dom';

class DashboardFilter extends React.Component{
    constructor(props){
        super(props);
        this.onLaunchYearButtonClick = this.onLaunchYearButtonClick.bind(this);
        this.onSuccessfulLaunchButtonClick = this.onSuccessfulLaunchButtonClick.bind(this);
    }

    onLaunchYearButtonClick(event){
        this.props.onLaunchYearClicked(event.target.textContent);        
    }

    onSuccessfulLaunchButtonClick(event){
        this.props.onSuccessfulLaunchedClicked(event.target.textContent.toLowerCase());
    }

    render(){
        const dashboardFilter = {            
            backgroundColor:'white',
            width:'auto',
            borderRadius:'10px'
        };
        const filterElemetContainer = {
            display:'flex',
            flexDirection:'column'
        };
        const filterContainerRow = {
            display:'flex',
            flexDirection:'row',
            flexWrap: 'nowrap',
            justifyContent:'space-evenly',
            marginBottom:'10px'
        };
        const filterItem = {
            height:'25px',
            width:'30%',
            backgroundColor:'#79e54b',
            borderRadius:'5px',            
            textAlign: 'center'            
        };                   

        return (
            <div className="row dashboard-filter" style={dashboardFilter}>
                <div style={{padding:'10px 5px 5px 10px',fontWeight:'bold',fontSize:'15px',height:'30px'}}>Filters</div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <div style={{textAlign:'center'}}>Launch Year</div>
                   <hr width="80%"/>                   
                </div>
                <div style={filterElemetContainer} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2006</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2007</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2008</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2009</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2010</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2011</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2012</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2013</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2014</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2015</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2016</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2017</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2018</button>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2019</button>
                    </div>
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onLaunchYearButtonClick}>2020</button>
                        <div style={{width:'30%'}}></div>
                    </div>                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <div style={{textAlign:'center'}}>Successful Launch</div>
                   <hr width="80%"/>                   
                </div>
                <div style={filterElemetContainer} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div style={filterContainerRow}>
                        <button style={filterItem} onClick={this.onSuccessfulLaunchButtonClick}>True</button>
                        <button style={filterItem} onClick={this.onSuccessfulLaunchButtonClick}>False</button>
                    </div>
                </div>
                <div style={{height:'10px'}}></div>           
            </div>
        )
    }
}

export default DashboardFilter;