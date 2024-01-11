import { useState } from "react";
import ControlButton from "../../../../../../../../components/controls-button";
import css from "./styles.module.scss";

function DescriptionPrice() {
  const data = "Здесь должно быть описание.Много строк текста.Прям очень много текста.";
  const [description, setDescription] = useState(data);
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const deleteData = () => {
    setDescription("");
  };
  return (
    <div className={css.description}>
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
          rows={15}
          value={description}
          onBlur={() => {
            setIsEditing(false);
            setIsActive(false);
          }}
          onChange={(e) => setDescription(e.target.value)}
          className={css.editText}
        />
      ) : (
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      )}
    </div>
  );
}

export default DescriptionPrice;
