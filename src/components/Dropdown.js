import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({  label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedoption = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {renderedoption}
          </div>
        </div>
        <h1 style={{ color: `${selected.value}` }}>{`${selected.label}`}</h1>
      </div>
    </div>
  );
};

export default Dropdown;
