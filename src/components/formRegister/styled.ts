import styled from 'styled-components';

export const Container = styled.div`
  flex: none;

  & > h1 {
    margin-bottom: 1.5rem;
    font-size: 45px;
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

      & > svg {
        fill: #fff;
        position: absolute;
        right: 1rem;
        width: 15px;
        height: 15px;
        top: 50%;
        cursor: pointer;
        opacity: 0.9;
        transform: translateY(-50%);
      }

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

    & > .acept-terms {
      display: flex;
      align-items: center;
      gap: 8px;

      & > input {
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 2px;
        background-color: #fff;
        cursor: pointer;

        &:checked {
          background-color: #f6a200;
          background-image: url(/assets/imgs/checkmark-24.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 11px;
        }
      }

      & > span {
        font-size: 15px;
        color: #fff;
      }
    }

    & > button {
      position: relative;
      overflow: hidden;
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
