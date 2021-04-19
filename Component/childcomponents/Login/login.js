import React from 'react';
import './login.css';


const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="form mt-3">
                    <div className="form_field mb-5">
                        <input type="email" name="" id="email" className="input_text" />
                        <label htmlFor="email" className="label">Email</label>
                    </div>
                    <div className="form_field mb-5">
                        <input type="password" name="" id="password" className="input_text" />
                        <label htmlFor="password" className="label">Password</label>
                    </div>
                    <div className="form_field row">
                        <div className="col-6">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            <input type="checkbox" class="form-check-input ml-2" id="exampleCheck1" />
                        </div>
                        <div className="col-6">
                            <a href="#"> Forgot The Password?</a>
                        </div>
                    </div>
                    <button className="btn btn-outline-info btn-lg mt-5">
                       Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
