import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <SectionTitle>Education</SectionTitle>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <ul>
              {user.education.map((education, i) => (
                <EducationItem key={i}>
                  <Institution>{education.institution}</Institution>
                  <div>
                    <Degree>
                      {education.studyType} {education.area ? `,` : ``}
                      {education.area}
                    </Degree>{' '}
                    <span> &sdot; </span>
                    <span>
                      {education.start.year} to {education.end.year}
                    </span>
                  </div>
                  <Paragraph>
                    {education.description.replace('\n\n', '\n')}
                  </Paragraph>
                </EducationItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
