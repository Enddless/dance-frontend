import { Calendar, stringOrDate } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import classNames from "classnames";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.scss";
import "./custom.css";
import css from "./styles.module.scss";
import { useCallback, useMemo, useState } from "react";
import { TEvent, dataEvents, localizer, messagesData, minTime } from "./settingsEvent";
import CalendarItemDetail from "../CalendarItemDetail";

const BigCalendar = () => {
  const [events, setEvents] = useState(dataEvents);

  //стили для конкретного зала
  const eventStyleGetter = (event: TEvent) => {
    const currentHall = event.halls;
    const isFirstHall = currentHall === "Зал 1";
    const isSecondaryHall = currentHall === "Зал 2";
    const isThirdHall = currentHall === "Зал 3";

    const className = classNames(css.primaryEvent, {
      [css.firstEvent]: isFirstHall,
      [css.secondaryEvent]: isSecondaryHall,
      [css.thirdEvent]: isThirdHall,
    });

    return {
      className,
    };
  };

  // выбранный ивент и открытие/закрытие модального окна
  const [selectedEvent, setSelectedEvent] = useState<TEvent>({
    id: 0,
    title: "",
    allDay: false,
    start: new Date(),
    end: new Date(),
    halls: "",
    desc: "",
  });
  const [showDetail, setShowDetail] = useState(false);
  const handleSelectEvent = (event: TEvent) => {
    setSelectedEvent(event);
    setShowDetail(true);
  };
  const closeMenu = () => {
    setShowDetail(!showDetail);
  };

  // drag && drop
  const DragAndDropCalendar = withDragAndDrop<TEvent>(Calendar);
  const moveEvent = useCallback(
    ({
      event,
      start,
      end,
    }: {
      event: TEvent;
      start: stringOrDate;
      end: stringOrDate;
    }) => {
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setEvents]
  );
  const resizeEvent = useCallback(
    ({
      event,
      start,
      end,
    }: {
      event: TEvent;
      start: stringOrDate;
      end: stringOrDate;
    }) => {
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setEvents]
  );
  return (
    <>
      <DragAndDropCalendar
        views={["day", "week", "month"]}
        localizer={localizer}
        messages={messagesData}
        defaultDate={useMemo(() => new Date(), [])}
        defaultView="week"
        events={events}
        eventPropGetter={eventStyleGetter}
        min={minTime}
        step={15}
        style={{ height: 1350 }}
        dayLayoutAlgorithm="no-overlap"
        popup={true}
        popupOffset={{ x: 20, y: 20 }}
        dayPropGetter={(date: Date) =>
          date.getDay() === new Date().getDay()
            ? {
                style: {
                  backgroundColor: "rgba(113, 133, 108, .1)",
                },
              }
            : {}
        }
        onSelectEvent={handleSelectEvent}
        resizableAccessor={"isResizable"}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
      />
      {showDetail && (
        <CalendarItemDetail
          selectedEvent={selectedEvent}
          closeMenu={closeMenu}
        />
      )}
    </>
  );
};

export default BigCalendar;
