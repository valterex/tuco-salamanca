import React, { useState } from "react";

const useDropdown = (defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const Dropdown = () => (
    <select
      value={state}
      onChange={(e) => setState(e.target.value)}
      onBlur={(e) => setState(e.target.value)}
      disabled={options.length === 0}
    >
      <option value="">All</option>
      {options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
