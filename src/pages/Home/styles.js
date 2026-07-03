import styled from 'styled-components'

export const HeroText = styled.h2`
  background-color: #ffebd9;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(230, 103, 103, 0.08) 0px,
    rgba(230, 103, 103, 0.08) 2px,
    transparent 2px,
    transparent 18px
  );
  text-align: center;
  color: #e66767;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  padding: 0 0 40px;
`

export const ListSection = styled.section`
  padding: 80px 0 120px;
  background: #fff8f2;
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: center;
  column-gap: 32px;
  row-gap: 48px;
`