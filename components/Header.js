import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    /* "Menu style" is to add a space on the top.
     */
  return (
    <Menu style = {{marginTop: '10px'}}>
      {/* Unfortunately Link and Menu conflicts
          each other. We need to replace Menu
          with Link.
        */}
      {/*
      <Menu.Item>
        CrowdCoin
      </Menu.Item>
      */}
      {/* Link tag does not show in the web page.
          It only provide a link to some tag.
        */}
      <Link route = "/">
        {/* Anchor Tag */}
        <a  className = "item">
          CrowdCoin
        </a>
      </Link>

      <Menu.Menu position = 'right'>
        {/*
        <Menu.Item>
          Campaigns
        </Menu.Item>
        <Menu.Item>
          +
        </Menu.Item>
        */}
        <Link route = "/">
          {/* Anchor Tag */}
          <a className = "item">
            Campaigns
          </a>
        </Link>

        <Link route = "/campaigns/new">
          {/* Anchor Tag */}
          <a className = "item">
            +
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
