import React from "react";
import styled from "styled-components";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";
import post6 from "../assets/post6.png";
import post7 from "../assets/post7.png";
import post8 from "../assets/post8.png";
import post9 from "../assets/post9.png";

const postImages = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
];

const GridWrapper = styled.div`
  margin-top: 3px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);

  img {
    max-width: 100%;
  }
`;

function PostGrid() {
  return (
    <GridWrapper>
      {postImages.map((postImage) => (
        <img src={postImage} alt="" />
      ))}
    </GridWrapper>
  );
}

export default PostGrid;
