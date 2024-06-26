import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/event">
        <Translate contentKey="global.menu.entities.event" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/gdpr">
        <Translate contentKey="global.menu.entities.gdpr" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/extend-event">
        <Translate contentKey="global.menu.entities.extendEvent" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/clubs">
        <Translate contentKey="global.menu.entities.clubs" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/post">
        <Translate contentKey="global.menu.entities.post" />
      </MenuItem>

      <MenuItem icon="asterisk" to="/comments">
        <Translate contentKey="global.menu.entities.comments" />
      </MenuItem>

      <MenuItem icon="asterisk" to="/university-user">
        <Translate contentKey="global.menu.entities.universityUser" />
      </MenuItem>

      <MenuItem icon="asterisk" to="/uni-user">
        <Translate contentKey="global.menu.entities.uniUser" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/extend-club">
        <Translate contentKey="global.menu.entities.extendClub" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/extended-events">
        <Translate contentKey="global.menu.entities.extendedEvents" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
