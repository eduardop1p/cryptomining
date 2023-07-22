import styled, { css } from 'styled-components';

interface Props {
  $obseverHeader?: boolean;
  $registerOrLogin?: boolean;
}

export const HeaderContainer = styled.header<Props>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  z-index: 5;
  ${({ $registerOrLogin }) =>
    $registerOrLogin ? 'padding: 3rem 0 10px;' : 'padding: 10px 0;'}

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
