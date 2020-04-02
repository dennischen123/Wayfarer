import React from 'react';
import About from  '../About/About'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {/* <img src="https://placebear.com/800/300" alt=""></img> */}
                <About />
            </div>
        );
    }
}

export default Home;