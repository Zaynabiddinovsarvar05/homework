import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardBox = styled.div`
  width: 29%;
  box-shadow: 0 0 10px grey;
  padding: 10px;
  margin-bottom: 20px;
  margin: 10px auto;
  background: linear-gradient(315deg, blue, red);


`;

export const Body = styled.p`
   font-size: 18px;
   font-family: "Poppins";
   color: white;
   display: flex;
   b{
     color: black;
   }
`;