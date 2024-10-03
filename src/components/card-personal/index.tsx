import { TeacherData } from '../../interfaces/interfaces';
import { PhotoContainer } from '../photo-container';

type TTeacherProps = {
  children?: React.ReactNode;
  teacher: TeacherData;
  prefixClass: string;
};

export const CardPersonal = ({ children, teacher, prefixClass }: TTeacherProps) => {
  return (
    <div className={`${prefixClass}__personal-item personal-item `}>
      {children}
      <PhotoContainer
        alt='staffPhoto'
        className={`${prefixClass}__personal-photo personal-photo`}
        url={`${teacher.photoTeachers}`}
      />

      <div className={`${prefixClass}__personal-description personal-description`}>
        <h5>{teacher.teachersName}</h5>
        <p>{teacher.description}</p>
      </div>
    </div>
  );
};
