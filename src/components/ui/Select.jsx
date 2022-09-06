import React from "react";

const Select = ({
  services,
  selected,
  openSelect,
  setOpenSelect,
  handleSelect,
  text,
}) => {
  return (
    <div className="select" onClick={() => setOpenSelect(!openSelect)}>
      <div className="select-btn">{selected || text}</div>
      {openSelect && (
        <div className="select-content">
          {services.map((item, index) => (
            <div
              key={index}
              className="select-item "
              onClick={(e) => handleSelect(e)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
