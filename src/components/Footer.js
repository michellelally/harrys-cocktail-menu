import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer>
                <div style={{color: '#252525'}}>
                    Harrys Bar &copy; {this.state.year}
                    <Link to="/login" style={{ float: "right", texrDecoration: 'none' , color: 'black'}}>
                        Admin
                </Link>
                </div>
                {/* <div className="socials">
                    <img src="https://img.icons8.com/material-rounded/50/000000/facebook.png" />
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/instagram-circle.png" />
                    <img src="https://img.icons8.com/material-rounded/24/000000/twitter.png" />
                </div> */}

            </footer>
        );
    }
}

export default Footer;