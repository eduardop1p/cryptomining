import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & > .icon-ins {
      width: 100px;
      height: 100px;
      background-color: transparent;
      border-radius: 100%;
      border: 2px dashed #f2a200;
      display: flex;
      align-items: center;
      justify-content: center;

      & > svg {
        flex: none;
        fill: #f2a200;
        width: 42px;
        height: 34px;
      }

      &.violet {
        border: 2px dashed #9f09ff;

        & > svg {
          fill: #9f09ff;
        }
      }
      &.blue {
        border: 2px dashed #465aff;

        & > svg {
          fill: #465aff;
        }
      }
    }

    & > .count-ins {
      display: flex;
      gap: 10px;
      margin-top: 5px;
      align-items: center;

      & > span {
        font-size: 56px;
        color: #fff;
        font-weight: 600;
      }

      & > svg {
        flex: none;
        width: 30px;
        height: 30px;
        fill: #fff;
      }
    }

    & > p {
      font-size: 20px;
      color: #fff;
    }
  }
`;
