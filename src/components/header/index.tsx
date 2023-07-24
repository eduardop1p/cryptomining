'use client';

import Link from 'next/link';
import React, { RefObject, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import useObsever from '@/utils/useObsever';
import ChevronUp from '../scrollTop';
import Logo from '../logo';

import {
  HeaderContainer,
  ContainerLinks,
  ContainerFixed,
  ContainerLinksRegisterLogin,
  ContainerLinksIsAuth,
  ContainerMore,
} from './styled';

interface Props {
  fixedNav?: boolean;
  registerOrLogin?: boolean;
  bigPadding?: boolean;
  isAuth?: boolean;
  userName?: string;
}

export default function Header({
  fixedNav = true,
  registerOrLogin = false,
  bigPadding = false,
  isAuth = false,
  userName = '',
}: Props) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [obseverHeader] = useObsever(headerRef);

  return (
    <>
      <HeaderNav
        headerRef={headerRef}
        registerOrLogin={registerOrLogin}
        bigPadding={bigPadding}
        isAuth={isAuth}
        userName={userName}
      />
      {/* pelo amor de Deus tenho que criar outro container para colocar um menu fixed, se eu colocar o mesmo container causa um LOOP INFINITO */}
      {fixedNav && (
        <ContainerFixed $obseverHeader={obseverHeader}>
          <HeaderNav isAuth={isAuth} userName={userName} />
        </ContainerFixed>
      )}
      {fixedNav && <ChevronUp obseverHeader={obseverHeader} />}
    </>
  );
}

const HeaderNav = ({
  headerRef,
  registerOrLogin,
  bigPadding,
  isAuth,
  userName,
}: {
  headerRef?: RefObject<HTMLHeadingElement>;
  registerOrLogin?: boolean;
  bigPadding?: boolean;
  isAuth?: boolean;
  userName?: string;
}) => {
  const handleMouseOver = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerMore = event.currentTarget.querySelector('.container-more')
      ?.firstChild as HTMLDivElement;
    containerMore.setAttribute('data-active', 'true');
  };
  const handleMouseOut = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerMore = event.currentTarget.querySelector('.container-more')
      ?.firstChild as HTMLDivElement;
    containerMore.setAttribute('data-active', 'false');
  };

  return (
    <HeaderContainer
      ref={headerRef}
      $registerOrLogin={registerOrLogin}
      $bigPadding={bigPadding}
    >
      <nav>
        <Logo />

        {isAuth ? (
          <>
            <ContainerLinksIsAuth>
              <div className="more">
                <div>
                  <Link href="/user/dashboard">Dashboard</Link>
                </div>
              </div>
              <div
                className="more"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div>
                  <span>Plan</span>
                  <FaChevronDown />
                </div>
                <div className="container-more">
                  <ContainerMore data-active={false}>
                    <Link href="/user/plan">
                      <span>Plan</span>
                    </Link>
                    <Link href="/user/purchased">
                      <span>Purchased</span>
                    </Link>
                  </ContainerMore>
                </div>
              </div>
              <div className="more">
                <div>
                  <span>Found</span>
                  <FaChevronDown />
                </div>
              </div>
              <div className="more">
                <div>
                  <span>Payout</span>
                  <FaChevronDown />
                </div>
              </div>
              <div className="more">
                <div>
                  <span>Referral</span>
                  <FaChevronDown />
                </div>
              </div>
              <div className="more">
                <div>
                  <span className="profile">{userName?.slice(0, 1)}</span>
                </div>
              </div>
            </ContainerLinksIsAuth>
          </>
        ) : registerOrLogin ? (
          <ContainerLinksRegisterLogin>
            <Link href="/" className="normal-a">
              Home
            </Link>
            <Link href="/about" className="normal-a">
              About
            </Link>
            <Link href="/contact" className="normal-a">
              Contact
            </Link>
            <Link href="/login" className="effect-a">
              Sign In
            </Link>
            <Link href="/register" className="effect-a">
              Sign Up
            </Link>
          </ContainerLinksRegisterLogin>
        ) : (
          <ContainerLinks>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
          </ContainerLinks>
        )}
      </nav>
    </HeaderContainer>
  );
};
