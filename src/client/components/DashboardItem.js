import React from 'react';
import ReactDOM from 'react-dom';

class DashboardItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const itemCard = {
            minHeight:'400px',
            backgroundColor:'white',
            width:'auto',
            borderRadius: '5px'
        };
        const itemImage = {
            minHeight:'200px',
            backgroundColor:'#ededed',
            margin:'10px',
            width:'auto'            
        };
        const boldFont = {
            fontWeight: 'bold',
            fontSize: '13px'
        };
        const fontStyle = {
            fontSize: '13px'
        };
        const missionTitle = {
            fontWeight:'bold',
            color: '#6b2b96',
            fontSize: '13px'
        };
        const {mission_name,flight_number,mission_id,launch_year,launch_success,links} = this.props.data;
        return (            
            <div className="col-xs-12 col-md-6 col-lg-3" style={itemCard}>
                <div className="item-image" style={itemImage}>
                    <img src={links['mission_patch_small']} width='100%'/>
                </div>
                <div className="item-details" style={{margin:'10px'}}>
                    <label style={missionTitle}>{mission_name} # {flight_number}</label>
                    <div style={{height:'10px'}}></div>
                    <label style={boldFont}>Mission Ids:</label>
                    <div style={fontStyle}>
                        <ul>
                            {
                                mission_id.map((id,index) => {
                                    return <li key={index}>{id}</li>
                                })
                            }
                        </ul>
                    </div>
                    <label style={boldFont}>Launch Year:</label>
                    <span style={fontStyle}> {launch_year} </span><br/>
                    <div style={{height:'10px'}}></div>
                    <label style={boldFont}>Successful Launch:</label>
                    <span style={fontStyle}> {launch_success.toString()} </span>                    
                </div>
            </div>            
        )
    }
}

export default DashboardItem;