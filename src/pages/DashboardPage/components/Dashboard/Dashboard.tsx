// import sprite from "../../../../assets/sprite.svg";
import TitleSection from "../../../../components/Title/Title";
import { Calendar, momentLocalizer, stringOrDate } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import classNames from "classnames";
import "moment/locale/ru";
import "moment-timezone";
import dataEvents from "./dataEvents";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.scss";
import "./custom.css";
import css from "./Dashboard.module.scss";
import { useCallback, useState } from "react";
import Close from "../../../../components/Close/Close";

type TEvent = {
  id: number;
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  halls?: string;
  desc: string;
  isDraggable?: boolean;
  isResizable?: boolean;
};

const Dashboard = () => {
  const [events, setEvents] = useState(dataEvents);
  moment.updateLocale("ru", {
    months: {
      format:
        "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split(
          "_"
        ),
      standalone:
        "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split(
          "_"
        ),
    },
    monthsShort: {
      // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
      format:
        "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
          "_"
        ),
      standalone:
        "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
          "_"
        ),
    },
    week: {
      dow: 1, // 1 - понедельник, 0 - воскресенье и так далее
    },
    weekdays: {
      standalone:
        "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
          "_"
        ),
      format:
        "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
          "_"
        ),
      isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
    },
    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY г.",
      LLL: "D MMMM YYYY г., H:mm",
      LLLL: "dddd, D MMMM YYYY г., H:mm",
    },
  });
  moment.tz.setDefault("Europe/Moscow");
  const localizer = momentLocalizer(moment);

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

  const minTime = new Date();
  minTime.setHours(9, 0, 0); // Устанавливаем время на 9:00

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
  const DragAndDropCalendar = withDragAndDrop<TEvent>(Calendar);
  const moveEvent = useCallback(
    ({
      event,
      start,
      end
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
    ({ event, start, end } : {
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
    <section className={css.container}>
      <TitleSection title="Расписание" />
      <div className={css.dashboard}>
        <DragAndDropCalendar
          views={["day", "week", "month"]}
          culture="ru"
          localizer={localizer}
          messages={{
            month: "Месяц",
            day: "День",
            week: "Неделя",
            previous: "<",
            next: ">",
            today: "Сегодня",
          }}
          defaultDate={new Date()}
          defaultView="week"
          events={events}
          eventPropGetter={eventStyleGetter}
          min={minTime}
          step={15}
          popup={true}
          popupOffset={{ x: 20, y: 20 }}
          style={{ height: 1350 }}
          dayLayoutAlgorithm="no-overlap"
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
          <div className={css.detailEvent}>
            <Close openModalForm={closeMenu} />
            <p>{selectedEvent.title}</p>
            <p>
              {selectedEvent.start.getHours()}:
              {selectedEvent.start.getMinutes()}-{selectedEvent.end.getHours()}:
              {selectedEvent.end.getMinutes()}
            </p>
            <p>
              {selectedEvent.start.getDate()} {selectedEvent.start.getMonth()}
            </p>
            <p>{selectedEvent.desc}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
