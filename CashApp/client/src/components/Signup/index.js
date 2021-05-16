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
} from "./SignupElements";

const SignUp = () => {

  //set states of the credentials registered to store the credentials in order to set the input to them
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

//http request to the router for registering the user evrytime the button is clicked
  const register = () => {
    Axios.post("http://localhost:3306/register", {
      email: emailReg,
      password: passwordReg,

    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">MD</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign up to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" onChange={(e) => {
            setEmailReg(e.target.value);
          }}/>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" onChange={(e) => {
            setPasswordReg(e.target.value);
          }}/>
            <FormButton type="submit" onClick={register}>Register</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUp;
