import { API_URL } from '../../services/api';

type TGuideProps = {
  alt: string;
  className?: string;
  url: string;
};

export const PhotoContainer = ({ alt, className, url }: TGuideProps) => {
  return (
    <div className={`${className} photo-container`}>
      <div className='photo-container__inner'>
        <div className='photo-container__body'>
          <img
            src={`${API_URL}${url}`}
            alt={alt}
            className='photo-container__image'
            // width={200}
            // height={200}
          />
        </div>
      </div>
    </div>
  );
};
