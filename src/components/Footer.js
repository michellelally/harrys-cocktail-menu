import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer>
                {/* <ul className="site-links">
                    <li> */}
                        Harrys Bar &copy; {this.state.year}
                {/* </li>
                </ul> */}
                <br></br>
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