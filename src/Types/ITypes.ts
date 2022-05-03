export interface IGameProps {
  id: number;
  user: number;
  language: ILanguage;
  category: ICategoryProps;
  name: string;
  questions: IQuestionProps[];
  deletedDate: Date;
}

export interface ICategoryProps {
  id: number;
  name: string;
}
export interface IQuestionProps {
  text: string;
  answers: string[];
  answer: number;
  time: number;
}
export interface ILanguage {
  id: number;
  name: string;
}

export interface IUserProps {
  id: number;
  name: string;
  email: string;
  password: string;
  status: number;
  institution: string;
  city: string;
  workType: string;
  educationLevel: string;
}
