import ControlButton from '../controls-button';
import { TEvent } from '../full-calendar/settingsEvent';

type TselectedEventProps = {
  selectedEvent: TEvent;
  onClick?: () => void;
};

function CalendarItemDetail({ selectedEvent, onClick }: TselectedEventProps) {
  return (
    <div className='detailEvent'>
      <div className='control'>
        <ControlButton id='delete' />
        <ControlButton id='close' onClick={onClick} />
      </div>
      <p>{selectedEvent.title}</p>
      <p>
        {selectedEvent.start.toLocaleString()}-{selectedEvent.end.toLocaleString()}
      </p>
      <p>{selectedEvent.desc}</p>
    </div>
  );
}

export default CalendarItemDetail;
