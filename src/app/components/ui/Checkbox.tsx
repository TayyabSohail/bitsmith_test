"use client";

import { useRef, useEffect } from "react";
import { CheckboxProps } from "../../types/issues";

/**
 * Custom Checkbox component with support for indeterminate state
 */
const Checkbox = ({
  checked,
  onChange,
  disabled = false,
  indeterminate = false,
  className = "",
  id,
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Set indeterminate property on the DOM element
  // (this can't be set via props in React)
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <input
      ref={checkboxRef}
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`w-5 h-5 ${
        disabled ? "opacity-50" : "cursor-pointer"
      } ${className}`}
    />
  );
};

export default Checkbox;
