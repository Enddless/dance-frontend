import Notifications from "../Notifications/index";
import ChangePassword from "../Password/index";
import OnlineRecovery from "../Recovery/index";
import WriteReview from "../Review/index";
import Settings from "../Settings";
import Tickets from "../Tickets/index";


interface IActiveButtonProps {
  currentButton: string;
}

function Layout({ currentButton }: IActiveButtonProps) {
  return (
    <>
      {currentButton === "settings" && <Settings />}
      {currentButton === "tickets" && <Tickets />}
      {currentButton === "notifications" && <Notifications />}
      {currentButton === "record" && <OnlineRecovery />}
      {currentButton === "changepass" && <ChangePassword />}
      {currentButton === "review" && <WriteReview />}
    </>
  );
}

export default Layout;
