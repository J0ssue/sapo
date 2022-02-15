import React from "React";

export const Modal = ({
  children,
  className = "root-modal",
  element = "div",
}) => {
  const [container] = React.useState(() => {
    const el = document.createElement(element);
    el.classList.add(className);
    return el;
  });

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};
