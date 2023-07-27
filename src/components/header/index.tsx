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
        <ContainerFixed $obseverHeader={obseverHeader} $bigPadding={bigPadding}>
          <HeaderNav
            isAuth={isAuth}
            userName={userName}
            bigPadding={bigPadding}
          />
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
    const containerMore = event.currentTarget.lastChild as HTMLDivElement;
    containerMore.setAttribute('data-active', 'true');
  };
  const handleMouseOut = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerMore = event.currentTarget.lastChild as HTMLDivElement;
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
                <div className="container-more" data-active={false}>
                  <ContainerMore>
                    <Link href="/user/plans">
                      <span>Buy plan</span>
                    </Link>
                    <Link href="/user/purchased">
                      <span>Purchased plans</span>
                    </Link>
                  </ContainerMore>
                </div>
              </div>
              <div
                className="more"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div>
                  <span>Found</span>
                  <FaChevronDown />
                </div>
                <div className="container-more" data-active={false}>
                  <ContainerMore>
                    <Link href="/user/deposit">
                      <span>Deposit now</span>
                    </Link>
                    <Link href="/user/deposit-history">
                      <span>Deposit log</span>
                    </Link>
                  </ContainerMore>
                </div>
              </div>
              <div
                className="more"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div>
                  <span>Payout</span>
                  <FaChevronDown />
                </div>
                <div className="container-more" data-active={false}>
                  <ContainerMore>
                    <Link href="/user/withdraw">
                      <span>Withdraw now</span>
                    </Link>
                    <Link href="/user/withdraw-history">
                      <span>Withdraw log</span>
                    </Link>
                  </ContainerMore>
                </div>
              </div>
              <div
                className="more"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div>
                  <span>Referral</span>
                  <FaChevronDown />
                </div>
                <div className="container-more" data-active={false}>
                  <ContainerMore>
                    <Link href="/user/referral-invite">
                      <span>Invite friends</span>
                    </Link>
                    <Link href="/user/referral-log">
                      <span>Referral bonus logs</span>
                    </Link>
                    <Link href="/user/referral-commlog">
                      <span>Withdraw logs</span>
                    </Link>
                  </ContainerMore>
                </div>
              </div>
              <div
                className="more"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div>
                  <span className="profile">{userName?.slice(0, 2)}</span>
                </div>
                <div className="container-more" data-active={false}>
                  <ContainerMore>
                    <Link href="/user/profile-setting">
                      <span>Profile</span>
                    </Link>
                    <Link href="/user/wallets">
                      <span>Wallets</span>
                    </Link>
                    <Link href="/user/ticket">
                      <span>Support tickets</span>
                    </Link>
                    <Link href="/user/twofactor">
                      <span>2FA security</span>
                    </Link>
                    <Link href="/user/change-password">
                      <span>Change password</span>
                    </Link>
                    <Link href="/user/logout">
                      <span>Logout</span>
                    </Link>
                  </ContainerMore>
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
