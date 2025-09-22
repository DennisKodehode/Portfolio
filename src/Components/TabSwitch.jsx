import { TabButton } from "./TabButton";
export const TabSwitch = () => {
  return (
    <div className="tab-switch">
      <TabButton label={"Personlig"} isSelected={true} />
      <TabButton label={"Proffesjonel"} isSelected={false} />
    </div>
  );
};
