import styled from 'styled-components';

export const Container = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > .plus-title {
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 1rem;
      cursor: pointer;

      & > svg {
        fill: #f6a200;
        width: 18px;
        height: 18px;
        flex: none;
      }

      & > h2 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
      }
    }

    & > p {
      color: #f5f6f6;
      font-size: 1rem;
      line-height: 1.4;
      border-left: 2px solid #f6a200;
      margin-left: 2.2rem;
      margin-top: 1rem;
      padding-left: 1rem;
      height: 0;
      overflow: hidden;
      transition: height 300ms ease-in-out;

      &.active {
        height: 110px;
      }
    }
  }
`;
