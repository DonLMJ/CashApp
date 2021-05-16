import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //to visualize the login
  const [loginStatus, setLoginStatus] = useState("");

  //const [role, setRole] = useState("");
 //too amke an http request
  Axios.defaults.withCredentials = true;

  //set LoginStatus to email if seccesful
  const login = () => {
    Axios.post("http://localhost:3306/login", {
      email: email,
      password: password,
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };
  //wherever we refresh the page is going to display the user
  //whever we refresh the page we will get info from /login
  useEffect(() => {
    Axios.get("http://localhost:3306/login").then((response) => {
      if (response.data.loggedIn == true) {
        console.log(response);
        setLoginStatus(response.data.email[0].email);
      }
    
    });
  }, []);

  return (
    <Container>
      <FormWrap>
        <Icon to="/">MD</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" onChange={(e) => {
            setEmail(e.target.value);
          }}/>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" onChange={(e) => {
            setPassword(e.target.value);
          }}/>
            <FormButton type="submit" onClick={login}>Continue</FormButton>
            <Text>Hello {loginStatus} :)</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
