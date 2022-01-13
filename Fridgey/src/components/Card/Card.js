import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
    </Cover>
    <Content>
      <Wrapper>
        <Text>{props.title}</Text>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 600px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.View`
  margin-left: 10px;
  position: absolute;
  width: 315px;
`;

const Text = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Cover = styled.View`
  width: 100%;
  height: 500px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
`;
