import React from 'react';

const Home = () => {    
    return(
        <div>
            <h1 style={{color:'blue'}}>This is the very very best home component</h1>
            <button onClick={() => { console.log("Hi there again")}}>Press Me</button>
        </div>
    );
}

export default Home;