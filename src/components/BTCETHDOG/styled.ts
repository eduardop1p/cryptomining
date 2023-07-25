import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5rem;

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
  width: calc(100% - 15rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
