import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import './nav.css';
import Shop from '../E_commerce-card/collection';
import Index from '../Login/index';



const Brand = () => {
    return (
        <h1 className="text-center text-capitalize">
            this is the brand section
        </h1>
    )
}

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark fixed">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Gling Bikes</Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item mx-2">
                            <Link to="/card" className="nav-link active">Collection</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link to="/card" className="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link to="/card" className="nav-link active">Membership</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link to="/account" className="btn btn-info px-2"><span><ion-icon name="person-outline"></ion-icon></span><span className="ml-2">Account</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Brand} />
                <Route exact path="/card" component={Shop} />
                <Route exact path="/account" component={Index} />
            </Switch>
        </div>
    )
}

export default Nav;