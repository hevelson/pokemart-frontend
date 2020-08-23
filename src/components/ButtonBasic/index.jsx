import React from 'react';

const ButtonBasic = (props) => {
  const { className, disabled, onClick, id, children, type, ...btnProps } = props;

  const _onClick = (event) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`btn ${className || 'btn-primary'}`}
      onClick={_onClick}
      id={id}
      disabled={disabled}
      {...btnProps}
    >
      {children}
    </button>
  );
};

export default ButtonBasic;
