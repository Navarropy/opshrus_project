/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Context
import { getUserSessionState } from "../../contexts/userSessionStateContext";

// Modules
import getSessionUserProvider from "../../modules/getSessionUserProvider";

// CSS
import "./style/ProjectsComponent.scss";

const ProjectsComponent = ({ done }: { done: boolean | null }) => {
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const userSession = getSessionUserProvider(userStringfied) || null;

  const projects = userSession
    ? done == null
      ? userSession.projects
      : userSession.projects.filter(
          (project) => project.status == `${done ? "done" : "ongoing"}`,
        )
    : null;

  return (
    <div className="projectsArea">
      {projects &&
        projects.map((project) => {
          const { imageLink, name } = project;

          return (
            <div
              key={idUniqueV2()}
              className="projectsArea__projectImage"
              style={{
                backgroundImage: `url(${imageLink})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>{name}</h1>
            </div>
          );
        })}
    </div>
  );
};

export { ProjectsComponent };
