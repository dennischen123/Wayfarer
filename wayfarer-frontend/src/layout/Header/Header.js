import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class Header extends React.Component {
    render() {
        return (
            <header>
                <NavBar setUser={this.props.setUser}/>
            </header>
        );
    }
}

export default Header;