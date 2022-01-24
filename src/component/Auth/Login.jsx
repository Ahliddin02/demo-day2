import React, { useState, useEffect } from 'react';

import {
    Form,
    Button,
    Alert,
  } from "react-bootstrap";
  import { useHistory } from "react-router-dom";

  import queryString from "query-string";

export default function Login() {
    const [errMsg, SetErrMsg] = useState("none");
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    
    function onEmailChange(e)  {
    setEmail(e.target.value);
    }



    
  
    function onPasswordChange(e)  {
    setPassword(e.target.value);
    }
    const history = useHistory();
    const qparse = queryString.parse(history.location.search);
  
    function onSubmitForm(e)  {
   
      const usersLocalStorage = localStorage.getItem("data");
      if (usersLocalStorage) {
        const parse = JSON.parse(usersLocalStorage);
        const existUser = parse.find(
          (data) => data.email === email && data.password === password
        );
        if (!existUser) {
          localStorage.setItem("auth", "false");
          SetErrMsg("block");
         console.log('Error')
        } else {
          localStorage.setItem("auth", "true");
          localStorage.setItem("authUser", JSON.stringify(existUser));
          history.push({
            pathname: "/profile"
          });
        }
      }
      e.preventDefault();
    };
  
    useEffect(() => {
      if (qparse.auth === "false") {
        SetErrMsg("block");
      }
      if (localStorage.getItem("auth") === "true")
        history.push({ pathname: "/login" });
    }, []);
  

    return(
        <div className="ppp">
             <div class="row">
        <div class="col-6">
            <h1 className="logText">Авторизоваться</h1>
       <Form className="login" onSubmit={onSubmitForm} noValidate>
       
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Адрес электронной почты</Form.Label>
    <Form.Control
     type="email" 
     value={email}
     onChange={onEmailChange}
     placeholder="Введите адрес электронной почты" />
    <Form.Text className="text-muted">
    Мы никогда никому не передадим вашу электронную почту.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control 
    type="password" 
    value={password}
    onChange={onPasswordChange}
    placeholder="пароль" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Проверить меня" />
  </Form.Group>
  <Button variant="primary" type="submit">
  Представлять на рассмотрение
  </Button>
  <div style={{
      paddingTop:'10px', 
      display: errMsg }}>
  <Alert  variant="danger">
  Проверьте электронную почту или пароль еще раз!
  </Alert>
            </div>
</Form>
</div>
<div className="col-6">

</div>
</div>
        </div>
    );
  }