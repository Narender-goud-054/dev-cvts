import { useState } from "react";
import Popup from "./Popup";

function PopupDiv({isOpen,closeAction}) {
  return (
    <Popup
            open={isOpen}
            onClose={closeAction}
            title="Registrations are no longer accepted for this event"
            date="REGISTRATIONS CLOSED"
            buttonText="Register Now"
            link="https://forms.gle/PE4d5BJago9kuSnJ6"
    />
    
  );
}

export default PopupDiv;
