import styled, { css } from 'styled-components';

interface Props {
  $obseverHeader?: boolean;
  $registerOrLogin?: boolean;
  $bigPadding?: boolean;
}

export const HeaderContainer = styled.header<Props>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  min-width: 1360px;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  z-index: 2;
  ${({ $registerOrLogin, $bigPadding }) =>
    $registerOrLogin || $bigPadding
      ? css`
          padding: 3rem 0 10px;
        `
      : 'padding: 10px 0;'}

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 15rem);
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    border-radius: 5px;
    padding: 10px 20px;
    transition: all 300ms ease-in-out;
    font-weight: 400;
    font-size: 14px;

    &:first-child {
      color: #fff;
      background-color: #f6a200;

      &:hover {
        background-color: #fff;
        color: #20c997;
      }
    }

    &:last-child {
      color: #212529;
      background-color: #fff;

      &:hover {
        background-color: #20c997;
        color: #fff;
      }
    }
  }
`;

export const ContainerFixed = styled.div<Props>`
  height: 50px;
  background-color: #272d43;
  width: 100%;
  min-width: 1360px;
  visibility: hidden;
  top: 0;
  position: fixed;
  z-index: 5;
  /* opacity: 0; */
  transform: translateY(-50px);
  transition:
    transform 200ms ease-in-out,
    visibility 200ms ease-in-out;
  ${({ $obseverHeader }) =>
    !$obseverHeader &&
    css`
      visibility: visible;
      /* opacity: 1; */
      transform: translateY(0);
    `}
`;

export const ContainerLinksRegisterLogin = styled.div`
  display: flex;
  gap: 1.7rem;
  align-items: center;

  & > a {
    font-size: 17px;
    color: #fff;
    transition:
      color 300ms ease-in-out,
      background 300ms ease-in-out;

    &.normal-a:hover {
      color: #f6a200;
    }
    &.effect-a {
      background-color: #f6a200;
      padding: 4px 15px;
      border-radius: 2rem;
      box-shadow: 0 3px 32px rgba(255, 74, 0, 0.4);
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #f6a200;

      &:hover {
        background-color: transparent;
        color: #f6a200;
      }
    }
  }
`;

export const ContainerLinksIsAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > .more {
    position: relative;

    & > :first-child {
      display: flex;
      cursor: pointer;
      align-items: center;
      gap: 8px;

      &:hover {
        & > span:not(.profile),
        & > a {
          color: #f2a200;
        }
        & > svg {
          fill: #f2a200;
        }
      }

      & > span,
      & > a {
        transition: color 200ms ease-in-out;
        color: #fff;
      }

      & > svg {
        transition: fill 200ms ease-in-out;
        flex: none;
        fill: #fff;
        width: 15px;
        height: 15px;
      }

      & > .profile {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #6f42c1;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
      }
    }

    & > .container-more {
      position: absolute;
      width: 200px;
      min-height: 70px;
      z-index: 2;
      right: 0;
    }
  }
`;

export const ContainerMore = styled.div`
  position: absolute;
  border: 2px solid #f6a200;
  display: flex;
  flex-direction: column;
  background-color: #030239;
  padding: 10px;
  margin-top: 1rem;
  right: 0;
  width: 100%;
  overflow: hidden;
  transition:
    transform 300ms ease-in-out,
    opacity 400ms ease-in-out,
    visibility 450ms ease-in-out;
  visibility: hidden;
  opacity: 0;
  transform: translateY(20px);

  &[data-active='true'] {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  & > a {
    padding: 9px 15px;
    transition: background 300ms ease-in-out;
    width: 100%;

    & > span {
      display: block;
      font-size: 15px;
      color: #fff;
      transition: transform 300ms ease-in-out;
    }

    &:hover {
      background-color: #f6a200;

      & > span {
        transform: translateX(6px);
      }
    }
  }
`;
