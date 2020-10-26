import React, {useState} from "react";
import { Container, Row, Col } from 'react-grid-system';
import style from '../Auth.module.css'
import {NavLink} from "react-router-dom";
import gql from 'graphql-tag'
import {useMutation} from "@apollo/client";
import {Field} from "redux-form";


export function Registration(){

    return (<Container fluid className={style.form_wrapper} >
            <Row align={"start"}>
                <Col>
                    <form >
                        <input
                            // value={values.username}
                            name="Username"
                            type="text"
                            placeholder="Имя пользователя"
                            // onChange={onChange}
                        />
                        <input
                            name="Email"
                            type="text"
                            placeholder="Электронная почта"
                        />
                        <input
                            name="Password"
                            type="password"
                            placeholder="Введите пароль"
                        />
                        <input
                            name="Second_Password"
                            type="password"
                            placeholder="Повторите пароль"
                        />
                        <button type="submit" className={style.btn_submit} > Применить и войти </button>
                        <div>Уже зарегистрированы?<NavLink to="/auth">Вход</NavLink></div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
