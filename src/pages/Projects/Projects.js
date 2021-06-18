import React from 'react';
import { Tile, Link, Tag } from 'carbon-components-react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {
  ProjectItem,
  ProjectTitle,
  SkillContainer,
  ProjectImage,
} from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-8">
            <SectionTitle>Projects</SectionTitle>
          </div>
        </div>
        {user.projects.map((project, i) => {
          const image = project.images[0];
          return (
            <ProjectItem key={i} className="bx--row">
              <div className="bx--col">
                <Tile className="bx--grid">
                  <div className="bx--row">
                    <div className="bx--col-sm-4 bx--col-lg-8">
                      <ProjectTitle>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {project.summary}
                        </a>
                      </ProjectTitle>
                    </div>
                  </div>
                  <div className="bx--row">
                    <div className="bx--col">
                      <p>{project.description}</p>
                      <br></br>
                      <div>
                        <Link
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          GitHub Repo
                        </Link>
                      </div>
                    </div>
                    {image ? (
                      <div className="bx--col-sm-0 bx--col-md-3">
                        <ProjectImage
                          src={image.resolutions.desktop.url}
                        ></ProjectImage>
                      </div>
                    ) : null}
                  </div>
                  <div className="bx--row">
                    <div className="bx--col">
                      <SkillContainer>
                        {[...project.languages, ...project.libraries].map(
                          (item, j) => (
                            <Tag key={j}>{item}</Tag>
                          )
                        )}
                      </SkillContainer>
                    </div>
                  </div>
                </Tile>
              </div>
            </ProjectItem>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
