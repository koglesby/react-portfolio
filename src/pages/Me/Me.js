import React from 'react';
// import { Tag, Button, Tile } from 'carbon-components-react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>{user.basics.summary}</Paragraph>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Me;
