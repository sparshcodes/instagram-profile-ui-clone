import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 10px;
  border-bottom: 1px solid #151515;
`;

const AccountNav = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h4`
  margin: 0;
  font-size: 20px;
`;

const NotificationDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: #ec4b57;
  border-radius: 50%;
`;
const PostMenu = styled.div`
  font-size: 25px;
`;

const Menu = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 18px;
`;

const MenuNotification = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  width: 18px;
  height: 18px;
  font-size: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec4b57;
`;

function TopNav() {
  return (
    <TopNavWrapper>
      <AccountNav>
        <ProfileName>sparshcodes</ProfileName>
        <BiChevronDown size="28px" />
        <NotificationDot></NotificationDot>
      </AccountNav>
      <PostMenu>
        <FiPlusSquare />
        <Menu>
          <AiOutlineMenu />
          <MenuNotification>
            <span>1</span>
          </MenuNotification>
        </Menu>
      </PostMenu>
    </TopNavWrapper>
  );
}

export default TopNav;
