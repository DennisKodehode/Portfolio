import { TabButton } from "./TabButton";
export const TabSwitch = ({ view, setView }) => {
  return (
    <div className="tab-switch">
      <TabButton
        view={view}
        setView={setView}
        label={"Personlig"}
        isSelected={true}
      />
      <TabButton label={"Proffesjonel"} isSelected={false} />
    </div>
  );
};
