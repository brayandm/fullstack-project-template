"use client";

import React from "react";
import PanelControl from "@/components/PanelControl";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Overview from "./Overview";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const urlParams = new URLSearchParams(window.location.search);

  const tabMap: { [key: string]: number } = {
    overview: 0,
  };

  const tab = urlParams.get("tab");

  const [value, setValue] = React.useState<number>(tab ? tabMap[tab] : 0);
  const [render, setRender] = React.useState<boolean>(false);

  const onChange = (newValue: number) => {
    setValue(newValue);
    const url = new URL(window.location.href);
    const params = new URLSearchParams();

    params.set("tab", Object.keys(tabMap)[newValue]);
    window.history.pushState({}, "", `${url.pathname}?${params.toString()}`);

    setRender(!render);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <PanelControl
        value={value}
        setValue={onChange}
        tabs={[
          {
            icon: <AssessmentIcon />,
            label: "Overview",
            component: <Overview />,
          },
        ]}
      />
    </div>
  );
}

export default Dashboard;
