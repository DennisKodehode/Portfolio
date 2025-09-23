import { TabButton } from "./TabButton";
export const TabSwitch = ({ view, setView }) => {
  return (
    <div className="tab-switch">
      <TabButton
        onClick={() => setView("personlig")}
        view={view === "personlig"}
        id="tab-personlig"
      >
        Personlig
      </TabButton>
      <TabButton
        onClick={() => setView("prof")}
        view={view === "prof"}
        id="tab-prof"
      >
        Profesjonell
      </TabButton>
    </div>
  );
};
