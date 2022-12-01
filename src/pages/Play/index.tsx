/* eslint-disable react/button-has-type */
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import {
  Unity,
  useUnityContext,
  IWebGLContextAttributes,
  IUnityConfig,
  IUnityProps,
} from 'react-unity-webgl';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';

const Play: React.FC = () => {
  const formref = useRef<FormHandles>(null);

  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: 'buildUnity/build.loader.js',
    dataUrl: 'buildUnity/build.data',
    frameworkUrl: 'buildUnity/build.framework.js',
    codeUrl: 'buildUnity/build.wasm',
    webglContextAttributes: { preserveDrawingBuffer: true },
  });

  const [windonsUnity, setWindonsUnity] = useState<number>(80);
  const sendbackMessage = useCallback(
    (data: { send: string }) => {
      formref.current?.setErrors({});
      const { send } = data;

      sendMessage('Bridge', 'SendToUnity', send);
    },
    [sendMessage],
  );
  return (
    <Container>
      <Unity
        unityProvider={unityProvider}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
        style={{ width: `${windonsUnity}%`, height: `${windonsUnity}%` }}
      />
      {/* <div>
        <input type="text" placeholder="test" id="htmlinput" />
        <button type="submit" onClick={sendbackMessage()}>
          send to unity
        </button>
      </div> */}
      <Form ref={formref} onSubmit={sendbackMessage}>
        <div className="input">
          <p>Login/E-mail</p>
          <Input name="send" type="text" placeholder="digite" />
        </div>
        <Button
          type="submit"
          // onClick={() =>
          //   windonsUnity === 80 ? setWindonsUnity(100) : setWindonsUnity(80)
          // }
        >
          send menssage
        </Button>
      </Form>
    </Container>
  );
};

export default Play;
