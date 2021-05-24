import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';

import { HeaderContainer, Image } from './styles';

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
            <h4>
              <a
                href={`https://gitconnected.com/${user.basics.username}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                @{user.basics.username}
              </a>
            </h4>
            <p>{user.basics.label}</p>
            <p>Coding in {user.basics.region}</p>
            <p>{user.basics.headline}</p>
          </div>
        </div>
        <div className="bx--col-md-2">
          <Button
            renderIcon={ArrowRight16}
            href={`https://gitconnected.com/${user.basics.username}/resume`}
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
