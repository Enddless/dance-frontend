import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type IVisibilityPassProps = {
    togglePasswordVisibility?: () => void;
    showPassword: boolean;
  };


function EyeIcon({togglePasswordVisibility, showPassword}:IVisibilityPassProps) {
  return (
    <FontAwesomeIcon
      icon={showPassword ? faEyeSlash : faEye}
      onClick={togglePasswordVisibility}
    //   style={{
    //     position: "absolute",
    //     right: "110px",
    //     top: "50%",
    //     transform: "translateY(-50%)",
    //     cursor: "pointer",
    //   }}
    />
  );
}

export default EyeIcon;
