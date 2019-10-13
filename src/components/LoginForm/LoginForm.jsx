import React, {useEffect, useState} from 'react';
import {
  Form, Input, Button,
} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';
import GET_TOKEN from '../../graphql/mutations/GET_TOKEN';

const hasErrors = fieldsError => {
  return Object.keys(fieldsError).some(field => fieldsError[ field ]);
};

const LoginForm = ({form, redirect}) => {
const client = useApolloClient();
  const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, validateFields} = form;
  const cookies = new Cookies();

  const [ generalError, setGeneralErrorMsg ] = useState('');

  useEffect(() => {
    validateFields();
  }, []);

  const handleError = () => {
    setGeneralErrorMsg('Błąd logowania');
  };

  const resetError = () => {
    setGeneralErrorMsg('')
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, value) => {
      if (!err) {
        client.mutate({
          mutation: GET_TOKEN,
          variables: {
            email: value.email,
            password: value.password
          }
        }).then(res => {
            cookies.set('token', res.data.tokenAuth.token);
            // cookies.set('role', 'needy');
            redirect(true);
          })
          .catch(err => handleError());
      }
    });

  };

  const userNameError = isFieldTouched('email') && getFieldError('email');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  return (
    <Form onSubmit={handleSubmit} style={{height: '150px'}}>
      <Form.Item
        validateStatus={userNameError ? 'error' : ''}
        help={userNameError || ''}
      >
        {getFieldDecorator('email', {
          rules: [ {required: true, type: 'email', message: 'Błędny email'} ],
        })(
          <Input onChange={resetError}
          placeholder={'Email'}/>
        )}
      </Form.Item>
      <Form.Item
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('password', {
          rules: [ {required: true, message: 'Błędne hasło'} ],
        })(
          <Input.Password
            onChange={resetError}
            placeholder={'Hasło'}/>
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError()) || generalError}
          style={{width: '100%'}}
        >
          {'Zaloguj'}
        </Button>
      </Form.Item>
    </Form>
  )
};

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  redirect: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

const AntLoginForm = Form.create({name: 'horizontal_login'})(LoginForm);

export default AntLoginForm;
