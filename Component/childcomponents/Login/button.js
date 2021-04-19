import React from 'react';
import './button.css';

const Button = () => {
    return (
        <div>
            <div className="facebook">
                <button className="mb-5 buttonf px-2">
                    <span className="btn_logo mr-3"><ion-icon name="logo-facebook" size="large"></ion-icon></span>
                    <span className="btn_text">Continue with Facebook</span>
                </button>
            </div>
            <button className="mb-3 buttong px-2">
                <span className="btn_logog mr-3"><ion-icon name="logo-google"  size="large"></ion-icon></span>
                <span className="btn_textg">Continue with Google</span>
            </button>
        </div>
    )
}
export default Button;