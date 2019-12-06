import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavBar} from '../components';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: ''
        }
    }

    render() {
        return (
            <div className="row no-gutters bg-white">
                <div className="col">
                    <div className="main-container">
                        <NavBar history={this.props.history}/>
                        <div className="main py-4">
                            Hello World
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}