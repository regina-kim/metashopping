import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import Viewer from './3D.jsx';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 80%;
  position: absolute;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  height: 100%;
  padding: 150px;
  position: relative;
  align-items: center;
  text-align: center;
  background-color: rgba(34, 34, 34, 0.4);
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: 'Teko', sans-serif;
  color: white;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  cursor: pointer;
  color: #222222;
  background-color: white;
  border-radius : 10px;
  border-color: transparent;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Viewer/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Start Shopping</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
