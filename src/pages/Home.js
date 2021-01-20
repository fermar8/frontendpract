import React, {Component} from 'react';
import './../styles/Home.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true
        }
    }

    render () {
        return(
            <div id="homePage">
                <div className="left-div"><p className="text-left">HO</p></div>
                <div className="right-div"><p className="text-right">LA</p></div>
            </div>
        )
    }
}

export default Home