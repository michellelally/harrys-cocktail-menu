import React, { Component } from 'react';

// this component creates a footer which is displayed on each page 
class Footer extends Component {
    constructor(props) {
        super(props);
        
        // using the date object to get the year
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            // a footer element which displays the bars name and the year
            <footer>
                <div style={{color: '#252525'}}>
                    Harrys Bar &copy; {this.state.year}
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