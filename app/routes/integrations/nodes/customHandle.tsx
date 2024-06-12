import { Handle, Position } from "reactflow";

interface HandleProps {
  position: Position;
  id?: string;
  labelText: string;
  className?: string;
  icon?: string;
  isArray?: boolean;
  isOptional?: boolean; // new prop
}

export default function CustomHandle({
  position = Position.Right,
  id = "",
  labelText = "",
  className = "",
  icon = "",
  isArray,
  isOptional,
}: HandleProps) {
  function labelPlacement() {
    if (position == Position.Right) {
      return "flex-row";
    }
    if (position == Position.Left) {
      return "flex-row-reverse";
    }
  }

  return (
    <div
      className={`flex items-center relative ${labelPlacement()} ${className}`}
    >
      <Handle
        type={position == Position.Right ? "source" : "target"}
        position={position}
        className={
          position == Position.Left
            ? "absolute z-10 w-16 !bg-teal-500"
            : "absolute z-10 w-16 "
        }
        id={id}
        key={id}
      />

      <div
        className={`bg-white text-nowrap z-20 justify-center flex flex-row text-xs mx-2 h-7 border rounded-2xl pl-2 px-2 mr-5 absolute ${
          isOptional ? "border-dashed border border-black" : null
        }`}
      >
        {icon && (
          <div className="flex items-center">
            {isArray && (
              <span className="material-symbols-outlined">data_array</span>
            )}
            <span className={`material-symbols-rounded mx-1 }`}>{icon}</span>
            <p className="text-sm">{labelText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
