import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { ExpItem, ExpTitle, JobTitle } from './styles';
import { Tag } from 'carbon-components-react';

const Experience = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <SectionTitle>Skills &amp; Experience</SectionTitle>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            {user.skills.map((skill) => (
              <Tag type="cyan" key={skill.name}>
                {skill.name}
              </Tag>
            ))}
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            {user.work.map((work, i) => (
              <ExpItem key={i}>
                <ExpTitle>{work.position}</ExpTitle>
                <div>
                  <JobTitle>{work.company}</JobTitle>{' '}
                  <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                </div>
                <Paragraph>{work.summary}</Paragraph>
              </ExpItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
