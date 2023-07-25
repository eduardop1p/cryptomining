import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 14px;

  & > span {
    font-size: 17px;
    color: #f5f6f6;
  }

  & > button {
    font-size: 17px;
    color: #f50000;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ContainerPurchase = styled.div`
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

  &[data-purchase-active='true'] {
    visibility: visible;
    opacity: 1;

    & > .agreement {
      transform: translateY(0);
      opacity: 1;
    }
  }

  & > .agreement {
    background: linear-gradient(-45deg, #0f054c 0%, #22196d 100%);
    width: 500px;
    height: 420px;
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

    & > ol {
      overflow: hidden visible;
      padding: 1rem 1rem 0 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      height: 300px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      & > li {
        color: #fff;
        font-size: 1rem;
        line-height: 1.4;
      }
    }
  }
`;
