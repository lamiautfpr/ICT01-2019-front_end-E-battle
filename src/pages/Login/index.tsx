import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import { Container } from './styles';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <>
      <NavBar />
      <Container>
        <Form
          onSubmit={() => {
            ('');
          }}
        >
          <div className="input">
            <p>Login/E-mail</p>
            <Input
              name="login"
              type="email"
              placeholder="kenzi.lawson@example.com"
            />
          </div>
          <div>
            <p>Senha</p>
            <div className="sdas">
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEye /> : <VscEyeClosed />}
              </button>
            </div>

            <Link to="/">Esquecir minha senha</Link>
          </div>

          <Button width={571} height={53} fontSize={27} type="submit">
            Vamos nessa
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
