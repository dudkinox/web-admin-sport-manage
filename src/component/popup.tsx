import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

type PopupProps = {
  cookieNameShowed: string;
  cookieNameAccept: string;
  cookieValueAccept: string;
  cookieNameDecline: string;
  cookieValueDecline: string;
  expires?: Date;
  children: React.ReactNode;
};

const Popup = (props: PopupProps) => {
  const cookies = new Cookies();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cookies.get(props.cookieNameShowed)) {
      setVisible(true);
    }
  }, [cookies, props.cookieNameShowed]);

  const setPopUpCookie = () => {
    cookies.set(props.cookieNameShowed, "true", { expires: props.expires });
  };

  const handleAccept = () => {
    cookies.set(props.cookieNameAccept, props.cookieValueAccept, {
      expires: props.expires,
    });
    setPopUpCookie();
    setVisible(false);
  };

  const handleDecline = () => {
    cookies.set(props.cookieNameDecline, props.cookieValueDecline, {
      expires: props.expires,
    });
    setPopUpCookie();
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="popup">
          <div className="popup-content">{props.children}</div>
          <div className="popup-actions">
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
