import React from "react";

const sizeClasses = {
  txtInterMedium16Gray90001: "font-inter font-medium",
  txtInterMedium31: "font-inter font-medium",
  txtInterMedium13: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium39: "font-inter font-medium",
  txtInterMedium25: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
