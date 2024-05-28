import React from "react";
import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

export function CustomHandle({
  position,
  id = null,
  labeltype,
  labeltext = "",
  className = "",
}) {

  const renderLabel = (labeltype, labeltext) => {
    const labels = {
      success: {
        icon: "check_circle",
        color: "text-green-600",
        text: "Suksess"
      },
      fail: {
        icon: "error",
        color: "text-red-600",
        text: "Feil"
      },
      object: {
        icon: "data_object",
        color: "",
        text: labeltext
      },
      name: {
        icon: "text_fields",
        color: "",
        text: labeltext
      }
    };

    const { icon, color, text } = labels[labeltype] || {};

    return icon ? (
      <div className="flex items-center">
        <span className={`material-symbols-rounded mx-1 ${color}`}>{icon}</span>
        <p className="text-sm">{text}</p>
      </div>
    ) : null;
  };

  function labelPlacement() {
    if (position == Position.Right) {
     return ("flex-row"); 
    } if (position == Position.Left) {
     return ("flex-row-reverse");
    }
  }

  return (
    <div className={`flex items-center relative ${labelPlacement()} ${className}`}>
      <Handle
        type={ position == Position.Right ? "source" : position == Position.Left ? "target" : undefined }
        position={position}
        className="absolute z-10"
        id={id}
        key={id}
      />
      <div className={`bg-white text-nowrap z-20 justify-center flex flex-row text-xs mx-2 h-7 border rounded-2xl pl-1 px-2 absolute`}>
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