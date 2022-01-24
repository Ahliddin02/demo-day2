import React, { useState,useEffect } from 'react';


import {
    Form,
    Button,
  } from "react-bootstrap";
  import { useHistory, Link } from "react-router-dom";
  export default function Register(){

  
    const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
    const [errMsg, setErrMsg] = useState("none");
 
  function onUserNameChange(e)  {
  setForm({
    username: e.target.value,
    email: form.email,
    password: form.password,
  });
}
  function onEmailChange(e) {
  setForm({
    username: form.unsername,
    email: e.target.value,
    password: form.password,

  });
}
  
  function onPassChange(e) {
  setForm({
    username: form.username,
    email: form.email,
    password: e.target.value,
  
  });
}
  

const history = useHistory();

function onSubForm(e){
  if (
    form.username !== "" &&
    form.email !== "" &&
    form.password !== ""
  ) {
    const usersFromLocalStorage = localStorage.getItem("data");

    if (usersFromLocalStorage) {
      const parsedUsers = JSON.parse(usersFromLocalStorage);
      parsedUsers.push(form);
      localStorage.setItem("data", JSON.stringify(parsedUsers));
    } else {
      localStorage.setItem("data", JSON.stringify([form]));
    }

    history.push({
      pathname: "/login",
      search: "?reg=success"
    });
  } else {
    setErrMsg("block");
  }
  e.preventDefault();
};

useEffect(() => {
  if (localStorage.getItem("auth") === "true")
    history.push({ pathname: "/register" });
}, []);

    return (
        <div className="ppp">

          <h1 className="regText">Регистрация</h1>
       
        <div class="row">
        <div class="col-6">
        <Form
         onSubmit={onSubForm} 
         noValidate 
         className="FormReg">
        <Form.Label>Имя пользователя</Form.Label>
        <Form.Control 
        value={form.username}
        onChange={onUserNameChange}
        type="text"
        placeholder="Введите имя пользователя" />
    <Form.Text className="text-muted">
    Мы никогда никому не передадим вашу электронную почту.
    </Form.Text>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Адрес электронной почты</Form.Label>
    <Form.Control 
    type="email" 
    value={form.email}
    onChange={onEmailChange}
    placeholder="Введите адрес электронной почты" />
    <Form.Text className="text-muted">
    Мы никогда никому не передадим вашу электронную почту.
    </Form.Text>
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control 
    type="пароль" 
    value={form.password}
    onChange={onPassChange}
  
    placeholder="Пароль" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Проверить меня" />
  </Form.Group>
  <Button 
  variant="primary" 
  
  type="submit">
    Представлять на рассмотрение
  </Button>
  <Link className="sub" to="/login">Уже есть аккаунт? Авторизоваться</Link>  
  <div style={{ display: errMsg }}>
                  <i className="errMsg">Давай, заполните форму</i>
                </div>
</Form>
</div>
<div className="col-6">
</div>
</div>
    </div>
    );
}