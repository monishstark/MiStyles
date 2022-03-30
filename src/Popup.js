import React from "react";
import "./Popup.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Category from "./Category";
import Category2 from "./Category2";
function Popup() {
  return (
    <div>
      <div className="Ads">
        <Category />
      </div>
      <div className="Ads2">
        <Category2 />
      </div>
      <div className="closebtn">
        <Link to="/">
          <CloseIcon />
        </Link>
      </div>
      <div>
        <iframe
          src="https://webchat.botframework.com/embed/mshelpdesk-b470-bot?s=Bckude1_snA.0sRBz4VbfVGZHJrKTlD48-425mvl5WKdSKNxKvEuLCE"
          className="help"
        />
      </div>
    </div>
  );
}

export default Popup;
