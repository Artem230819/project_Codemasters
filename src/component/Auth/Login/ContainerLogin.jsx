import React, {Component} from "react";
import Login from "./Login";
import {connect} from "react-redux";


class ContainerLogin extends Component{
    handleSubmit = (values) => {
        const {Login} = this.props
        Login(values.username, values.password)
    }
    render() {
        return (
            <>
                <Login onSubmit={this.handleSubmit}/>
            </>
        )
    }
}
export default connect(null, {Login})(ContainerLogin);