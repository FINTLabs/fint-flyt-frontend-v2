import React from 'react';
import PropTypes from 'prop-types';
import { Handle, Position } from 'reactflow';

export function CustomHandle({
  position,
  id = null,
  labeltype,
  labeltext = '',
  className = ''
}) {

    console.log("CustomHandle is rendering");


  const renderLabel = (labeltype: string, labeltext: string) => {

    console.log('Rendering label:', labeltype, labeltext);

    switch (labeltype) {
      case "success":
        return (
          <>
            <img src="images/success.svg" alt="success" className="pr-1" />
            <p>Suksess</p>
          </>
        );
      case "fail":
        return (
          <>
            <img src="images/fail.svg" alt="fail" className="pr-1" />
            <p>Feil</p>
          </>
        );
      case "object":
        return (
          <>
            <img src="images/object.svg" alt="objekt:" className="pr-1" />
            <p>{labeltext}</p>
          </>
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

  return (
    <div className={`flex flex-row items-center absolute ${className}`}>
      <Handle
        type="source"
        position={position}
        className="absolute z-10"
        id={id}
        key="customHandle"
      />
      <div className="bg-white text-nowrap justify-center flex flex-row text-xs ml-2 border rounded-2xl px-4 p-1">
        {renderLabel(labeltype, labeltext)}
      </div>
    </div>
  );
}
CustomHandle.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  id: PropTypes.string,
  labeltype: PropTypes.oneOf(['success', 'fail', 'object', 'name']).isRequired,
  labeltext: PropTypes.string
};


export default CustomHandle;