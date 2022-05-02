import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import { Container } from './styles';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/Auth';

interface infoLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formref = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  // const [login, setLogin] = useState<infoLogin>({} as infoLogin);
  const handleSubmit = useCallback(
    (data: infoLogin) => {
      formref.current?.setErrors({});
      const { email, password } = data;
      signIn({ email, password });
    },
    [signIn],
  );
  return (
    <>
      <NavBar />
      <Container>
        <Form ref={formref} onSubmit={handleSubmit}>
          <div className="input">
            <p>Login/E-mail</p>
            <Input
              name="email"
              type="email"
              placeholder="kenzi.lawson@example.com"
            />
          </div>
          <div>
            <p>Senha</p>
            <div className="password">
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
