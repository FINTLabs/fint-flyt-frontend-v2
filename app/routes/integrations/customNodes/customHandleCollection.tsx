import React from "react";
import { Handle, Position } from "reactflow";

interface HandleProps {
  position: Position;
  id?: string;
  labelText: string;
  className?: string;
  icon?: string;
  isArray?: boolean;
}

export default function CustomHandleCollection({
                                          position = Position.Right,
                                          id = "", labelText = "",
                                          className = "",
                                          icon = "",
                                          isArray,
                                        }: HandleProps) {


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
            type={ position == Position.Right ? "source" : "target" }
            position={position}
            className="absolute z-10"
            id={id}
            key={id}
        />
        <div className={`bg-white text-nowrap z-20 justify-center flex flex-row text-xs mx-2 h-7 border rounded-2xl pl-1 px-2 absolute`}>
          {icon && <div className="flex items-center">
            {isArray && <span className="material-symbols-outlined">data_array</span>}
            <span className={`material-symbols-rounded mx-1 }`}>{icon}</span>
            <p className="text-sm">{labelText}</p>
          </div>}
        </div>
      </div>
  );
}