import React, {useState} from "react";
import { Container, Row, Col } from 'react-grid-system';
import style from '../Auth.module.css'
import logo from '../../../Img/proceset.png'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {gql} from "apollo-boost";




const Login = (props) => {
    const {handleSubmit} = props;
    const [values, setValues] = useState({
        username: "",
        password: "",
    })
    return (<Container fluid className={style.form_wrapper}>
            <Row align="start" >
                <Col >
                    <form onSubmit={handleSubmit}>
                        <Field
                            value={values.username}
                            name="username"
                            type="text"
                            placeholder="Имя пользователя"
                        />
                        <Field
                            value={values.password}
                            name="password"
                            type="password"
                            placeholder="Введите пароль"
                        />
                        <button type="submit" className={style.btn_submit}> Применить и войти </button>
                        <NavLink to="/auth/registration">Зарегистрироваться</NavLink>
                    </form>
                </Col>
            </Row>
        </Container>
    )

}
export default reduxForm({form:"authLogin"})(Login)