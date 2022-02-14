import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16, Email16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';

import { HeaderContainer, Image, EmailIcon } from './styles';
import Pdf from './../../documents/Kevin-Oglesby-Resume.pdf';

const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <HeaderContainer isHome={location.pathname === '/'} className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-md-2 bx--col-lg-3">
          <Image src={user.basics.picture} />
        </div>
        <div className="bx--col-md-4 bx--col-lg-6">
          <div>
            <h2>{user.basics.name}</h2>
            <p>{user.basics.label}</p>
            <p>Coding from {user.basics.region}</p>
            <p>{user.basics.headline}</p>
            {/* email data should be found on user.basics.email, but it is missing */}
            <p>
              <a href="mailto:kevinjoglesby@gmail.com">
                <EmailIcon>
                  <Email16 />
                </EmailIcon>
                kevinjoglesby@gmail.com
              </a>
            </p>
            <p>
              <a
                href={
                  user.basics.profiles.find(
                    (profile) => profile.network === 'GitHub'
                  ).url
                }
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              {' | '}
              <a
                href={
                  user.basics.profiles.find(
                    (profile) => profile.network === 'LinkedIn'
                  ).url
                }
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="bx--col-md-2">
          {/* <Button
            renderIcon={ArrowRight16}
            href={`https://gitconnected.com/${user.basics.username}/resume`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Résumé
          </Button> */}
          <Button
            renderIcon={ArrowRight16}
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Résumé
          </Button>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
