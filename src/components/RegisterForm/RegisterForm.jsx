import React from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Collapse, Form, Icon, Input, Button } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`

const responseFacebook = (response) => {
  console.log(response);
}

const responseGoogle = (response) => {
    console.log(response);
}

const RegisterForm = () => {

  return (
    <StyledForm>
      <FacebookLogin
      appId=""
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook} />
      <GoogleLogin
          clientId=""
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}/>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Lub zaloguj sie przez email" key="1">
          <Form onSubmit='handleSubmit'>
            <Form.Item label="E-mail">

            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </StyledForm>
)};

export default RegisterForm;
