'use client';

import Link from 'next/link';
import { RefObject, useRef } from 'react';

import useObsever from '@/utils/useObsever';
import ChevronUp from '../scrollTop';
import Logo from '../logo';

import {
  HeaderContainer,
  ContainerLinks,
  ContainerFixed,
  ContainerLinksRegisterLogin,
} from './styled';

interface Props {
  fixedNav?: boolean;
  registerOrLogin?: boolean;
}

export default function Header({
  fixedNav = true,
  registerOrLogin = false,
}: Props) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [obseverHeader] = useObsever(headerRef);

  return (
    <>
      <HeaderNav headerRef={headerRef} registerOrLogin={registerOrLogin} />
      {/* pelo amor de Deus tenho que criar outro container para colocar um menu fixed, se eu colocar o mesmo container causa um LOOP INFINITO */}
      {fixedNav && (
        <ContainerFixed $obseverHeader={obseverHeader}>
          <HeaderNav />
        </ContainerFixed>
      )}
      {fixedNav && <ChevronUp obseverHeader={obseverHeader} />}
    </>
  );
}

const HeaderNav = ({
  headerRef,
  registerOrLogin,
}: {
  headerRef?: RefObject<HTMLHeadingElement>;
  registerOrLogin?: boolean;
}) => {
  return (
    <HeaderContainer ref={headerRef} $registerOrLogin={registerOrLogin}>
      <nav>
        <Logo />

        {registerOrLogin ? (
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
