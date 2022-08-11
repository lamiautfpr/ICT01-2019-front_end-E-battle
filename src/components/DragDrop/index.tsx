import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImAttachment } from 'react-icons/im';
import { useFiles } from '../../hooks/UploadImg';
import { Container, DropContainer } from './styles';

const DragDrop: React.FC = () => {
  const { fileUploaded, deleteFile } = useFiles();

  const onDrop = useCallback(
    items => {
      fileUploaded(items);
    },
    [fileUploaded],
  );
  const aceito = ['image/jpeg', 'image/pjpeg', 'image/png'];
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: { a: aceito },
      onDrop,
    });
  return (
    <Container id="dropdown">
      <DropContainer>
        Anexar imagem
        <ImAttachment />
        <input />
      </DropContainer>
    </Container>
  );
};

export default DragDrop;
