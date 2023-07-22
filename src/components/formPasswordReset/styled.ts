import styled from 'styled-components';

export const Container = styled.div`
  flex: none;

  & > h1 {
    font-size: 45px;
    color: #fff;
  }

  & > p {
    margin: 1.5rem 0 1.8rem;
    font-size: 1rem;
    color: #fff;
  }

  & > form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    max-width: 475px;
    width: 100%;

    & > .container-input {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      position: relative;

      & > input {
        width: 100%;
        color: #fff;
        background: linear-gradient(-45deg, #0f054c 0%, #22196d 100%);
        border: none;
        border-radius: 5px;
        height: 50px;
        padding: 0.8rem;
        font-size: 1.2rem;
      }

      & > span {
        color: #dc3545;
        font-size: 15px;
        font-weight: 300;
      }
    }
    & > button {
      overflow: hidden;
      position: relative;
      background-color: #f6a200;
      color: #fff;
      border-radius: 35px;
      font-size: 1rem;
      font-weight: 700;
      border: none;
      cursor: pointer;
      padding: 10px 35px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #f6a200;
      transition:
        color 300ms ease-in-out,
        background 300ms ease-in-out;

      &:hover {
        background-color: transparent;
        color: #f6a200;
      }
    }

    & > span {
      font-size: 1rem;
      font-weight: 400;
      color: #fff;

      & > a {
        color: #f6a200;
        margin-left: 5px;
      }
    }
  }
`;
