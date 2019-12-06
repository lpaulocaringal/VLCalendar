import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            msg: "",
            style: ""
        };
    }

    handleChange(e, data) {
        const user = this.state.user;
        user[data] = e;
        this.setState({ user });
    }

    async login(e) {
        e.preventDefault();

        // const r = await Axios.post(`${KABYAHE_API_URL}/api/admin/login`, {
        //     'email': this.state.user.email,
        //     'password': this.state.user.password
        // }).then(function (r) {
        //     return r.data;
        // }).catch(function () {
        //     return {
        //         success: false,
        //         data: "The connection to the server failed."
        //     }
        // });

        // if (r.success) {
        //     document.cookie = "adminKey=" + r.data.auth_token;
        //     this.props.history.push("/");
        // } else {
        //     this.setState({ msg: r.data, style: "alert-danger" })
        //     this.handleChange("", "email")
        //     this.handleChange("", "password")
        // }
        console.log("nice");
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <form onSubmit={(e) => this.login(e)}>
                                <div className="card-body">
                                    <div class="form-group row">
                                        <div class="col-md-3">username</div>
                                        <div class="col-md-9"><input type="text"/></div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-3">password</div>
                                        <div class="col-md-9"><input type="password"/></div>
                                    </div>
                                </div>

                                <div className="card-footer"><button type="submit" class="btn-primary">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}