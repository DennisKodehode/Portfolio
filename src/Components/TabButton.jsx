export const TabButton = ({ view, onClick, id, children }) => {
  return (
    <button
      id={id}
      className={view ? "btn btn-selected" : "btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
