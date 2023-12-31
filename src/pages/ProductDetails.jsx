import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { typography } from "../styles";
import Image from "../components/image";
import CustomButton from "../components/Button";
import { getProductById } from "../services/product-services";

const Footer = styled.footer`
  position: absolute;
  bottom: 92px;
`;

const Container = styled.div`
  padding: 40px 13px;
  font-size: 1.4rem;
`;

const Main = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.5rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const Title = styled.div`
  ${typography.head.md}
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Price = styled.p`
  color: #fa4a0c;
`;

const Body = styled.div`
  ${typography.text.lg}
  text-align: initial;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Description = styled.p`
  ${typography.text.md}
`;

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container>
      <Main>
        <div>
          <Image size={"md"} src={product?.picture_url} />
        </div>

        <TextSection>
          <Title>
            <p>{product?.name}</p>
            <Price data-testid="price">{`$${product?.price}`}</Price>
          </Title>
          <Body>
            <p>Description</p>
            <Description>{product?.description}</Description>
          </Body>
        </TextSection>
      </Main>
      <Footer>
        <CustomButton
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </CustomButton>
      </Footer>
    </Container>
  );
};
