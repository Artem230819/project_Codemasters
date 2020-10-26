import React, {useState} from "react";
import { Container, Row, Col } from 'react-grid-system';
import style from '../Auth.module.css'
import logo from '../../../Img/proceset.png'
import {NavLink} from "react-router-dom";

export function Login(){
    const [values, setValues] = useState({
        username: "",
        password: "",
    })
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault();

    }
    return (<Container fluid className={style.form_wrapper}>
            <Row align="start" >
                <Col >
                    <form >
                        <input
                            value={values.username}
                            name="Username"
                            type="text"
                            placeholder="Имя пользователя"
                            onChange={onChange}
                        />
                        <input
                            value={values.password}
                            name="Password"
                            type="password"
                            placeholder="Введите пароль"
                            onChange={onChange}
                        />
                        <button type="submit" className={style.btn_submit}> Применить и войти </button>
                        <NavLink to="/auth/registration">Зарегистрироваться</NavLink>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}