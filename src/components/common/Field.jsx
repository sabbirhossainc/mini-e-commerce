import React from "react";

const Field = ({ label, children, htmlFor, className, error }) => {
  const id = htmlFor || getFirstValidChildId(children);

  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className={className ?? "form-label"}>
          {label}
        </label>
      )}
      <div className="relative">
      {children}
      </div>
      {!!error && (
        <div role="alert" className="text-red-600 text-xs">
          {error.message}
        </div>
      )}
    </div>
  );
};

const getFirstValidChildId = (children) => {
  let id = null;

  React.Children.forEach(children, (child) => {
    if (!id && React.isValidElement(child) && child.props?.id) {
      id = child.props.id;
    }
  });

  return id;
};

export default Field;
