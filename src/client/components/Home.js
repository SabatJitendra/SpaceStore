import React from 'react';

const Home = () => {    
    return(
        <div>
            <h1>This is the very very best home component</h1>
            <button onClick={() => { console.log("Hi there")}}>Press Me</button>
        </div>
    );
}

export default Home;