import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 70vh;
  position: relative;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    margin-top: 150px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:#222222;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
