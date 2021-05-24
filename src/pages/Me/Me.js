import React from 'react';
import { Tag } from 'carbon-components-react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <SectionTitle>About Me</SectionTitle>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <Paragraph>{user.basics.summary}</Paragraph>
          </div>
        </div>
        <div>
          <SectionTitle>Skills</SectionTitle>
          <div>
            {user.skills.map((skill) => (
              <Tag type="cyan" key={skill.name}>
                {skill.name}
              </Tag>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Profiles</SectionTitle>
          <ul>
            {user.basics.profiles.map((profile, i) => (
              <ProfileLink key={profile.network}>
                {i !== 0 && ' | '}
                <a href={profile.url} target="_blank" rel="noreferrer noopener">
                  {profile.network}
                </a>
              </ProfileLink>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Me;
