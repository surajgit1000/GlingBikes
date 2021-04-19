import React from 'react';
import Login from './login';
import Button from './button';
import  './index.css';

const Header = (props) => {
    console.log(props);
    return (
        <div className="my-5">
            <h1 className="text-center">Log In</h1>
            <div className="text-center">
                <span>Don't have an account?</span><span><a href="#">Sign Up</a></span>
            </div>
        </div>
    )
}

const Footer =()=>{
    return(
        <div className="footer">
           <h5 className="text-center mt-5">
               by loging in ,you agree to our <span className="terms">Terms of Use</span>
           </h5>
        </div>
    )
}
const Index = () => {
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-md-6">
                    <Login />
                </div>
                <div className="col-md-6 text-center">
                    <Button />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Index;