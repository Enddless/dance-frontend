import Close from "../../../../components/Close/Close";
import { TEvent } from "../Calendar/settingsEvent";
import css from "./styles.module.scss";

type TselectedEventProps = {
  selectedEvent: TEvent;
  closeMenu: () => void;
};

function CalendarItemDetail({ selectedEvent, closeMenu }: TselectedEventProps) {
  return (
    <div className={css.detailEvent}>
      <Close openModalForm={closeMenu} />
      <p>{selectedEvent.title}</p>
      <p>
        {selectedEvent.start.toLocaleString()}-
        {selectedEvent.end.toLocaleString()}
      </p>
      <p>{selectedEvent.desc}</p>
    </div>
  );
}

export default CalendarItemDetail;
