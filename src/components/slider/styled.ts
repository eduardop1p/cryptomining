import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .swiper-pagination-bullet {
    background-color: #ffa40033;
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: #f6a200;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination {
    position: initial;
    margin-top: 1rem;
  }
`;

export const ContainerSlide = styled.div`
  color: #fff;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: linear-gradient(-45deg, #0f054c 0%, #22196d 100%);
  padding: 20px;
  gap: 2rem;

  & > svg {
    width: 25px;
    height: 25px;
    fill: #f6a200;
  }

  & p {
    color: #f5f6f6;
    line-height: 1.4;
    text-align: center;
    font-size: 19px;
  }

  & > .thumb {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: #0f054c;
    flex: none;
    overflow: hidden;
    position: relative;
  }

  & > .info-client {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }
`;
