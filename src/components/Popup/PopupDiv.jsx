import { useState } from "react";
import Popup from "./Popup";

function PopupDiv({isOpen,closeAction}) {
  return (
    <Popup
            open={isOpen}
            onClose={closeAction}
            title="Last Date to Register"
            date="21 January, 2026"
            buttonText="Register Now"
            link="https://forms.gle/PE4d5BJago9kuSnJ6"
    />
    
  );
}

export default PopupDiv;
