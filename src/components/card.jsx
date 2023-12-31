import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import Image from "./image";
import { deleteProduct } from "../services/product-services";

const Container = styled.div`
  width: 156px;
  height: fit-content;
  border-radius: 30px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonImg = styled.img`
  width: 16px;
  height: 16px;
`;

const DishDetailsContainer = styled.div`
  height: fit-content;
  width: 130px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  top: -18px;
`;

const ButtonContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

const DishName = styled.p`
  ${typography.text.xl}
  width: 130px;
  font-weight: 600;
  text-align: center;
  color: ${({ color }) => color};
`;

const ImageContainer = styled.div`
  position: relative;
  top: -34px;
`;

const CardDish = ({
  id,
  name,
  price,
  src,
  handleProduct,
  handleEditProduct,
  refreshDashboard,
}) => {
  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await deleteProduct(id);
      console.log("Product deleted successfully", product);
      refreshDashboard();
    } catch (error) {
      console.error("Error in deleting product:", error);
    }
  };
  return (
    <Container>
      <ImageContainer onClick={() => handleProduct(id)}>
        <Image size={"sm"} src={src} />
      </ImageContainer>
      <DishDetailsContainer>
        <DishName>{name}</DishName>
        <DishName color={"#FA4A0C"}>${price}</DishName>
        <ButtonContainer>
          <ButtonImg
            onClick={() => handleEditProduct(id)}
            src="src/assets/edit-box-fill.svg"
          />
          <ButtonImg
            onClick={handleDelete}
            src="src/assets/delete-bin-fill.svg"
          />
        </ButtonContainer>
      </DishDetailsContainer>
    </Container>
  );
};

export default CardDish;
