import styled from 'styled-components';

export const Container = styled.div`
  & > button {
    border: 2px solid #f6a200;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-size: 1rem;
    padding: 0 35px;
    height: 50px;
    border-radius: 35px;
    font-weight: 700;
    box-shadow: 0 3px 32px rgba(255, 74, 0, 0.4);
    color: #f6a200;
    cursor: pointer;
    transition:
      background 300ms ease-in-out,
      color 300ms ease-in-out;

    &:hover {
      background-color: #f6a200;
      color: #fff;
    }
  }
`;

export const ContainerBuyNow = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgb(0, 0, 0, 0.5);

  &[data-buy-now-active='true'] {
    visibility: visible;
    opacity: 1;

    & > .buy-plan {
      transform: translateY(0);
      opacity: 1;
    }
  }

  & > .buy-plan {
    background: linear-gradient(-45deg, #0f054c 0%, #22196d 100%);
    width: 530px;
    height: 570px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    transition:
      transform 500ms ease-in-out,
      opacity 600ms ease-in-out;
    transform: translateY(70px);
    opacity: 0;

    & > .title-close {
      padding: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > h2 {
        font-size: 17px;
        color: #fff;
      }

      & > svg {
        fill: #cd8106;
        width: 20px;
        height: 25px;
        cursor: pointer;
      }
    }

    & > .plan-info {
      overflow: hidden visible;
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      height: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      & > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;

        & > label {
          font-size: 1rem;
          color: #fff;
        }

        & > input {
          color: #f5f6f6;
          font-size: 18px;
          background-color: #10151a;
          height: 50px;
          padding: 15px 91px 15px 15px;
          display: flex;
          border: none;
          text-align: left;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
        }

        & > span {
          position: absolute;
          background-color: #030239;
          bottom: 0;
          right: 0;
          color: #fff;
          padding: 10px 12px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 5px 5px 0;
        }

        & > button {
          cursor: pointer;
          background-color: #f2a200;
          bottom: 0;
          right: 0;
          position: absolute;
          height: 50px;
          display: flex;
          align-items: center;
          border: none;
          font-size: 15px;
          justify-content: center;
          border-radius: 0 5px 5px 0;
          padding: 10px 12px;
          color: #fff;
        }
      }

      & > img {
        margin: 0 auto;
        height: auto;
      }
    }
  }
`;
