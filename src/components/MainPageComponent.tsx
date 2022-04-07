// Dependencies
import React from "react";

// Interfaces
import IMainPage from "../interfaces/IMainPage";

// Components
import { LeftSideBarComponent } from "./LeftSideBarComponent";
import { SecondNavComponent } from "./SecondNavComponent";
import { DashboardComponent } from "./DashboardComponent";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/MainPageComponent.scss";

// Others
const pages = {
  home: <DashboardComponent />,
  browse: <h1>Browse</h1>,
};

const MainPageComponent = ({ namePage }: IMainPage) => {
  return (
    <section className="mainPage">
      <SecondNavComponent />

      <div className="mainPage__ContentArea">
        {" "}
        <LeftSideBarComponent
          divisors={[
            {
              title: "Menu",
              sideBarsIcons: [
                {
                  title: "home",
                  svgLink: iconsPath.home,
                },
                {
                  title: "Search",
                  svgLink: iconsPath.search,
                },
                {
                  title: "Browse",
                  svgLink: iconsPath.browse,
                },
                {
                  title: "Featured",
                  svgLink: iconsPath.start,
                },
                {
                  title: "Featured",
                  svgLink: iconsPath.start,
                },
              ],
            },
            {
              title: "Creator Menu",
              sideBarsIcons: [
                {
                  title: "Profile",
                  svgLink: iconsPath.user,
                },
                {
                  title: "Projects",
                  svgLink: iconsPath.boxes,
                },
                {
                  title: "Clients",
                  svgLink: iconsPath.users,
                },
                {
                  title: "Featured",
                  svgLink: iconsPath.start,
                },
              ],
            },
          ]}
        />
        {pages[namePage]}
      </div>
    </section>
  );
};

export { MainPageComponent };