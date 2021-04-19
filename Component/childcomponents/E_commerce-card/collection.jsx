import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Single from './Single'

const styling = {
    width: "18rem"
}

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <div>
                <div className="card text-center" style={styling}>
                    <img src="https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/single" className="btn btn-primary">Click me</Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/single" component={Single} />
                </Switch>
            </div>
        )
    }
}

export default Shop;