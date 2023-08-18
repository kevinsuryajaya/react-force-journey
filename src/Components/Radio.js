import React, { useEffect, useState } from "react";

export const Radio = ({
  name,
  label,
  value,
  selected,
  setSelected,
  cy,
  id,
  disabled,
}) => {
  const [radioSelected, setRadioSelected] = useState(selected);

  const radioChange = (event) => {
    setSelected(event.currentTarget.value);
  };

  useEffect(() => {
    setRadioSelected(selected);
  }, [selected]);

  return (
    <div className="input-radio-item-wrapper">
      <label
        className={
          "input-radio" +
          (radioSelected === value ? " input-radio--selected" : "")
        }
      >
        <span className="input-radio-checkmark"></span>
        {label}
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={radioSelected === value}
          onChange={(event) => radioChange(event)}
          data-cy={cy + `_` + value}
          disabled={disabled}
        />
      </label>
      <style jsx="true">{`
        .input-radio-item-wrapper {
          display: flex;
          flex-wrap: wrap;
          margin: 10px;
        }
        .input-radio {
          width: 100%;
          border: 1px solid ${disabled ? "#A9A9A9" : "#404040"};
          border-radius: 4px;
          padding: 10px;
          padding-left: 36px;
          position: relative;
          cursor: pointer;
          color: ${disabled ? "#A9A9A9" : "#404040"};
          background-color: ${disabled ? "#F4F4F4" : "#FFFFFF"};
        }

        .input-radio--selected {
          background-color: ${disabled ? "#F4F4F4" : "#ecf6ee"};
          color: ${disabled ? "#A9A9A9" : "#3eac58"};
          border-color: ${disabled ? "#A9A9A9" : "#3eac58"};
        }
        .input-radio-checkmark {
          position: absolute;
          top: 12px;
          left: 10px;
          height: 15px;
          width: 15px;
          border: 1px solid #7b7b7b;
          border-radius: 50%;
        }
        .input-radio-checkmark::after {
          content: "";
          position: absolute;
          display: none;
        }
        /* hide input radio */
        .input-radio input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        .input-radio--selected .input-radio-checkmark::after {
          display: block;
        }
        .input-radio--selected .input-radio-checkmark {
          display: block;
          border-color: ${disabled ? "#A9A9A9" : "#3eac58"};
        }
        .input-radio .input-radio-checkmark::after {
          top: 2px;
          left: 2px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: ${disabled ? "#A9A9A9" : "#3eac58"};
        }
        @media only screen and (max-width: 450px) {
          .input-radio {
            font-size: 12px;
          }
          .input-radio-checkmark {
            top: 9px;
          }
        }
      `}</style>
    </div>
  );
};
