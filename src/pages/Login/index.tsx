import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { addSyntheticTrailingComment } from 'typescript';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import { Container } from './styles';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErrors';
import { IToastMensagem, useToast } from '../../hooks/Toast';
import Toast from '../../components/Toast';

interface infoLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formref = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [testTost, setTestTost] = useState<Omit<IToastMensagem, 'id'>>(
    {} as Omit<IToastMensagem, 'id'>,
  );
  // const [login, setLogin] = useState<infoLogin>({} as infoLogin);
  // useEffect(() => {
  //   setTestTost({ titulo: 'TITULO', type: 'info', descricao: 'algo aqui' });
  //   addToast(testTost);
  // }, [addToast, testTost]);

  const handleSubmit = useCallback(
    async (data: infoLogin) => {
      try {
        formref.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail ou Login obrigatório'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const { email, password } = data;
        console.log(1);
        signIn({ email, password });
        console.log(2);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formref.current?.setErrors(errors);
          // Add Toast
        }
        addToast({
          titulo: 'Erro!',
          descricao: 'Email ou senha invalidos',
          type: 'erro',
        });
      }
    },
    [addToast, signIn],
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
