import React from "react";
import classNames from "classnames";

const SecondaryButton = ({ children, className, ...props }) => {
  const StyleButton = classNames([
    "opacity-0 duration-300 secondary-clr bg-primary-clr py-5 px-5 text-lg fw-600 rounded-2xl",
    className,
  ]);
  return (
    <button className={StyleButton} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
