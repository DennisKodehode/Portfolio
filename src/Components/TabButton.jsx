export const TabButton = ({ isSelected, label }) => {
  return (
    <button className={isSelected ? "btn btn-selected" : "btn"}>{label}</button>
  );
};
