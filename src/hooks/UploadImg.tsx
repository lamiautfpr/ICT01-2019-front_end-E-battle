import React, {
  createContext,
  ReactNode,
  useEffect,
  useCallback,
  useContext,
  useState,
} from 'react';
import { uniqueId } from 'lodash';
// import filesize from 'filesize';
// import api from './services/api';
// import { useToast } from './hooks/toast';

export interface PreviewProps {
  src?: string;
}

// Interface para manipulação das imagens recebidas do frontend
export interface IDragDrop {
  id: string;
  file: File | null;
  name: string;
  preview: string;
  //   size: string;
  listData?: string[];
  error?: false;
  url: '';
}
interface IData {
  name: string;
  percentage: number;
}
export interface IResponse {
  id: string;
  resuts: [IData];
  responseData: [];
}
interface IDragContexData {
  responseFile: IResponse[];
  uploadedFiles: IDragDrop[];
  deleteFile(id: string): void;
  fileUploaded(file: any): void;
}

export interface ICarroussel {
  url: string;
}

// Função para adicionar os dados ao uploadedFiles

const FileContext = createContext<IDragContexData>({} as IDragContexData);

const FileProvider: React.FC = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<IDragDrop[]>([]);
  const [responseFile, setResponseFile] = useState<IResponse[]>([]);

  useEffect(() => {
    return () => {
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    };
  });

  const updateFile = useCallback((id, data) => {
    setUploadedFiles(state =>
      state.map(file => (file.id === id ? { ...file, ...data } : file)),
    );
  }, []);

  const processUpload = useCallback((uploadedFile: IDragDrop) => {
    const data = new FormData();

    if (uploadedFile.file) {
      data.append(
        'file',
        uploadedFile.file,
        uploadedFile.name,
        //   uploadedFile.preview,
      );
    }

    //   api
    //     .post('/teste', data, {
    //       onUploadProgress: progressEvent => {
    //         const progress: number = Math.round(
    //           (progressEvent.loaded * 100) / progressEvent.total,
    //         );

    //         updateFile(uploadedFile.id, { progress });
    //       },
    //     })
    //     .then(response => {
    //       const outCome = Object.entries(response.data).map(item => ({
    //         name: item[0],
    //         percentage: item[1],
    //       }));

    //       const result: IResponse = {
    //         id: uploadedFile.id,
    //         resuts: outCome,
    //       };

    //       setResponseFile(state => state.concat(result));
    //     })
    //     .catch(err => {
    //       updateFile(uploadedFile.id, { error: true });
    //     });
  }, []);

  const fileUploaded = useCallback(
    (files: File[]) => {
      const newFilesUploaded: IDragDrop[] = files.map((file: File) => ({
        id: uniqueId(),
        file,
        name: file.name,
        preview: URL.createObjectURL(file),
        // size: filesize(file.size),
        listData: [],
        url: '',
      }));
      setUploadedFiles(state => state.concat(newFilesUploaded));

      newFilesUploaded.forEach(processUpload);
    },
    [processUpload],
  );

  // Function Delete data

  const deleteFile = useCallback((id: string) => {
    if (id === '-1') {
      setUploadedFiles([]);
      setResponseFile([]);
    } else {
      setUploadedFiles(state => state.filter(file => file.id !== id));
      setResponseFile(state => state.filter(response => response.id !== id));
    }
  }, []);

  return (
    <FileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ uploadedFiles, fileUploaded, deleteFile, responseFile }}
    >
      {children}
    </FileContext.Provider>
  );
};

function useFiles(): IDragContexData {
  const context = useContext(FileContext);

  if (!context) {
    throw Error('Error ao utilizar a função deste contexto!');
  }

  return context;
}

export { FileProvider, useFiles };
// setUploadedFiles(DataImage);
// export { FileProvider };
