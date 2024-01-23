import { useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../LoginForm";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Close from "../../Close/Close";
import css from "./styles.module.scss";



export function Modal() {
  const location = useLocation();
  const modalRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const observerRefValue = modalRef.current;
    disableBodyScroll(observerRefValue);

    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);


  return (
    <div ref={modalRef} className={css.modalWrapper}>
      <div className={css.noModalWrapper}>
        <div className={css.modal}>
          <div className={css.closeContainer}>
            <Close openModalForm={() => navigate("/")} />
          </div>
          <div className={css.modalForm}>
            {id === "login" && <LoginForm />}
            {/* ЗДЕСЬ ДОЛЖНЫ БЫТЬ РОУТЫ НЕ ВЛОЖЕННЫЕ В ФОРМУ ВХОДА */}
            
            {/* {id === "registration" && <RegistrationForm />} */}
            {/* {id === "recovery" && <RecoveryForm />} */}
            {/* {children} */}
          </div>
        </div>
      </div>
    </div>
  );
}
