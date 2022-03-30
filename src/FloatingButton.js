import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./FloatingButton.css";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Popup from "./Popup";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function FloatingActionButtons() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="FButton">
      <Link to="/helpdesk">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <HeadsetMicOutlinedIcon />
          </Fab>
        </Box>
      </Link>
    </div>
  );
}
