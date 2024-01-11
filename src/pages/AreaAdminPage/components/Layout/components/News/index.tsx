import { ChangeEvent, useEffect, useState } from "react";
import ControlButton from "../../../../../../components/controls-button";
import { bannerUrl } from "../../../../../../mocks/mocks";
import css from "./styles.module.scss";

const News = () => {
  const [banner, setBanner] = useState(bannerUrl);
  const [errorDownload, serErrorDownload] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    serErrorDownload("");

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      serErrorDownload("Допустимы файлы формата jpg, размер до 1434x345");
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  // Отправка банера на сервер
  useEffect(() => {
    if (isValid) {
      // dispatch(changeUserPhoto({ photoUser: file }))
      //   .unwrap()
      //   .then(() => {
      //     dispatch(...);
      //   });
    }
  }, [isValid]);

  //удаление банера
  const deleteBanner = (id: number) => {
    setBanner(banner.filter((item) => item.id !== id))
    //добавить диспатч на удаление банера с бд
  }
  return (
    <>
      <div className={css.container}>
        {banner.map((card) => {
          return (
            <div className={css.card} key={card.id} id="cards">
              <div className={css.controlGroup}>
                <ControlButton id="delete" onClick={() => deleteBanner(card.id)}/>
              </div>
              <img src={card.url} alt="banner" />
            </div>
          );
        })}
      </div>
      <form className={css.add}>
        <label htmlFor="banner" className={css.download}>
          Добавить
          <input
            type="file"
            name="banner"
            id="banner"
            onChange={handleFileChange}
          />
        </label>
        {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
      </form>
    </>
  );
};

export default News;
