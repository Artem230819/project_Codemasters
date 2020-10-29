import React from "react";
import style from "./Auth.module.css";
import logo from "../../Img/proceset.png";
import { Container, Row, Col } from "react-grid-system";
import { Route } from "react-router-dom";
import {Registration} from "./Login/Registration";
import Login from "./Login/Login";

export function Auth() {
    return (
        <Container fluid={true} className={style.auth_wrapper}>
            <Row align={"center"}>
                <Col>
                    <img className={style.auth_logo}
                        src={logo}
                        alt={"logo"}
                    />
                </Col>
            </Row>
            <Row align={"start"} >
                <Col align={"center"}>
                    <div>
                        <Route exact path="/auth" render={() => <Login />} />
                        <Route exact path="/auth/registration" component={Registration}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}