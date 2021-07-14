import React from "react";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

import PortfolioIcon from "@atlaskit/icon/glyph/portfolio";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
import PersonIcon from "@atlaskit/icon/glyph/person";
import BacklogIcon from "@atlaskit/icon/glyph/backlog";

import "./Navigation.css";

const AvatarCircle = () => {
  return (
    <Avatar
      appearance="circle"
      src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
      size="large"
      name="John Doe"
    />
  );
};

const ProfileDropdownMenu = () => {
  return (
    <DropdownMenu trigger={<AvatarCircle />} position="bottom right">
      <DropdownItemGroup>
        <DropdownItem elemBefore={<PersonIcon size="medium" />}>
          Account
        </DropdownItem>
        <DropdownItem elemBefore={<BacklogIcon size="medium" />}>
          Orders
        </DropdownItem>
        <DropdownItem elemBefore={<SignOutIcon size="medium" />}>
          Logout
        </DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  );
};

const CartButton = () => {
  return (
    <Button
      appearance="subtle"
      iconBefore={<PortfolioIcon label="Cart" size="small" />}
    >
      Cart
    </Button>
  );
};

const Navigation = () => {
  return (
    <div className="site-nav-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div>BuyKart</div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <CartButton />
            </div>
            <div>
              <ProfileDropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
