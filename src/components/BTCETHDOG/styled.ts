import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > button {
    cursor: pointer;
    width: 70px;
    height: 40px;
    display: flex;
    background-color: transparent;
    color: #0dcaf0;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border: 1px solid transparent;
    transition: all 300ms ease-in-out;
    border-radius: 5px;

    &[data-active='true'] {
      background-color: #f6f4f4;
      color: #111;
    }

    &:hover {
      border: 1px solid #fff;
    }
  }
`;

export const CryptoPlanContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 19rem;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-image: url(/assets/imgs/bg.png);
    background-repeat: no-repeat;
  }

  & > div {
    width: calc(100% - 15rem);
    display: grid;
    margin: 0 auto;
    position: relative;
    top: -13.5rem;
    gap: 5rem 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;
