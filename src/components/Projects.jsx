import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const ProjectCard = styled.div`
  background: #f8f8f8;
  padding: 20px;
  margin: 15px;
  border-radius: 8px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      <ProjectCard>
        <h3>Project 1</h3>
        <p>React website with modern UI</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 2</h3>
        <p>Full-stack application with MERN</p>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
