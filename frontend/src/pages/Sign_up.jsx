import { useState } from "react";
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form-body without-side">
            <div className="website-logo">
                <a href="/">
                    <div className="logo">
                        <img className="logo-size" src="images/logo-light.svg" alt="Logo" />
                    </div>
                </a>
            </div>
            <div className="row">
                <div className="img-holder">
                    <div className="bg"></div>
                    <div className="info-holder">
                        <img src="images/graphic3.svg" alt="Graphic" />
                    </div>
                </div>
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Register new account</h3>
                            <p>Access to the most powerful tool in the entire design and web industry.</p>
                            <form action="/" method="post">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-control"
                                    type="email"
                                    name="username"
                                    placeholder="E-mail Address"
                                    required
                                />
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                <div className="form-button">
                                    <button id="submit" type="submit" className="ibtn">
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className="other-links">
                                <div className="text">Or register with</div>
                                <a href="#"><i className="fab fa-facebook-f"></i>Facebook</a>
                                <a href="#"><i className="fab fa-google"></i>Google</a>
                                <a href="#"><i className="fab fa-linkedin-in"></i>Linkedin</a>
                            </div>
                            <div className="page-links">
                                <a href="/">Login to account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
