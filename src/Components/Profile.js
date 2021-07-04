import React from "react";
import styled from "styled-components";
import TopNav from "./TopNav";
import ViewDashboard from "./ViewDashboard";
import ProfileDetails from "./ProfileDetails";
import About from "./About";
import ProfileButtons from "./ProfileButtons";
import Highlights from "./Highlights";
import Tabs from "./Tabs";
import PostGrid from "./PostGrid";

const ProfileWrapper = styled.div`
  background-color: #000;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

function Profile() {
  return (
    <ProfileWrapper>
      <TopNav />
      <ViewDashboard />
      <ProfileDetails />
      <About />
      <ProfileButtons />
      <Highlights />
      <Tabs />
      <PostGrid />
    </ProfileWrapper>
  );
}

export default Profile;
