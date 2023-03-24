import React from "react";
import classNames from "classnames";

const PrimaryButton = ({ children, className, ...props }) => {
  const StyleButton = classNames([
    "bg-color3 primary-clr py-6 px-8 fw-600 text-lg rounded-2xl hover:bg-[#466ef0a2] duration-300",
    className,
  ]);
  return (
    <button className={StyleButton} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
