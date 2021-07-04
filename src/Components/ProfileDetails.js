import React from "react";
import styled from "styled-components";
import scLogo from "../assets/scLogo.jpg";

const ProfileDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileImage = styled.img`
  max-width: 130px;
  border: 1px solid #919191;
  border-radius: 50%;
  padding: 4px;
  flex-basis: 40%;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 60%;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatsNumber = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const StatsLabel = styled.span`
  margin-top: 5px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 14px;
`;

function ProfileDetails() {
  return (
    <ProfileDetailsWrapper>
      <ProfileImage src={scLogo} />
      <ProfileStats>
        <StatsBlock>
          <StatsNumber>515</StatsNumber>
          <StatsLabel>posts</StatsLabel>
        </StatsBlock>
        <StatsBlock>
          <StatsNumber>55.3K</StatsNumber>
          <StatsLabel>followers</StatsLabel>
        </StatsBlock>
        <StatsBlock>
          <StatsNumber>332</StatsNumber>
          <StatsLabel>following</StatsLabel>
        </StatsBlock>
      </ProfileStats>
    </ProfileDetailsWrapper>
  );
}

export default ProfileDetails;
