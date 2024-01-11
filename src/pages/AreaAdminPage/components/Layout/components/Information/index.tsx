import { useState } from "react";
import ControlButton from "../../../../../../components/controls-button";
import css from "./styles.module.scss";

const LegalInformation = () => {
  const data = "Здесь должно быть описание";
  const [description, setDescription] = useState(data);
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const deleteData = () => {
    setDescription("");
  };
  return (
    <div className={css.container}>
      <div className={css.controlGroup}>
        <ControlButton
          id="edit"
          onClick={() => {
            setIsEditing(true);
            setIsActive(true);
          }}
          isActive={isActive}
        />
        <ControlButton id="delete" onClick={deleteData} />
      </div>

      {isEditing ? (
        <textarea
          rows={25}
          value={description}
          onBlur={() => {
            setIsEditing(false);
            setIsActive(false);
          }}
          onChange={(e) => setDescription(e.target.value)}
          className={css.editText}
        />
      ) : (
        <>
          <h1>Юридическая информация "Просто студия" </h1>
          <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        </>
      )}
    </div>
  );
};

export default LegalInformation;
