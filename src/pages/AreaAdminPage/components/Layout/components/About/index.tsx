import { useState } from "react";
import css from "./styles.module.scss";
import ControlButton from "../../../../../../components/controls-button";
import { aboutStudio } from "../../../../../../mocks/mocks";

const AboutSettings = () => {
  const [description, setDescription] = useState(aboutStudio.description.join("\n"));
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const deleteData = () => {
    setDescription("");
    setIsEditing(false);
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
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      )}
    </div>
  );
};

export default AboutSettings;
