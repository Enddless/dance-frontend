import { TEvent } from '../../interfaces/interfaces';
import ControlButton from '../controls-button';

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
