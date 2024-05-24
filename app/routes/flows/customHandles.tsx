import React from "react";
import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from '@mui/icons-material/Error';
import DataObjectIcon from '@mui/icons-material/DataObject';

export function CustomHandle({
  position,
  id = null,
  labeltype,
  labeltext = "",
  className = "",
}) {
  console.log("CustomHandle is rendering");

  const renderLabel = (labeltype: string, labeltext: string) => {
    console.log("Rendering label:", labeltype, labeltext);

    switch (labeltype) {
      case "success":
        return (
          <div className="flex items-center">
            <CheckCircleIcon className="pr-1 text-green-600" fontSize="small" />
            <p>Suksess</p>
          </div>
        );
      case "fail":
        return (
          <div className="flex items-center">
            <ErrorIcon className="pr-1 text-red-600" fontSize="small"/>
            <p>Feil</p>
          </div>
        );
      case "object":
        return (
          <div className="flex items-center">
            <DataObjectIcon className="pr-1 text-black" fontSize="small"/>
            <p>{labeltext}</p>
          </div>
        );
      case "name":
        return (
          <>
            <img src="images/text.svg" alt="name:" className="pr-1" />
            <p>{labeltext}</p>
          </>
        );
      default:
        return null;
    }
  };

  function labelPlacement() {
    if (position == Position.Right) {
     return ("flex-row"); 
    } if (position == Position.Left) {
     return ("flex-row-reverse");
    }
  }
console.log(labelPlacement())
  return (
    <div className={`flex  items-center relative ${labelPlacement()} ${className}`}>
      <Handle
        type={ position == Position.Right ? "source" : position == Position.Left ? "target" : undefined }
        position={position}
        className="absolute z-10"
        id={id}
        key="customHandle"
      />
      <div className={`bg-white text-nowrap z-20 justify-center flex flex-row text-xs mx-2 h-6 border rounded-2xl pl-1 px-2 absolute`}>
        {renderLabel(labeltype, labeltext)}
      </div>
    </div>
  );
}
CustomHandle.propTypes = {
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
  id: PropTypes.string,
  labeltype: PropTypes.oneOf(["success", "fail", "object", "name"]).isRequired,
  labeltext: PropTypes.string,
};