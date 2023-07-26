'use client';

import { useState } from 'react';

import BTC from '../plans/btc';
import ETH from '../plans/eth';
import DOG from '../plans/dog';

import { BtnContainer, Container, CryptoPlanContainer } from './styled';

export default function BTCETHDOG() {
  const [btcActive, setBtcActive] = useState(true);
  const [ethActive, setEthActive] = useState(false);
  const [dogActive, setDogActive] = useState(false);

  const handleClickBtc = () => {
    setBtcActive(true);
    setEthActive(false);
    setDogActive(false);
  };
  const handleClickEth = () => {
    setEthActive(true);
    setBtcActive(false);
    setDogActive(false);
  };
  const handleClickDog = () => {
    setDogActive(true);
    setBtcActive(false);
    setEthActive(false);
  };

  return (
    <Container>
      <BtnContainer>
        <button
          typeof="button"
          onClick={handleClickBtc}
          data-active={btcActive}
        >
          BTC
        </button>
        {/* <button
          typeof="button"
          onClick={handleClickEth}
          data-active={ethActive}
        >
          ETH
        </button> */}
        <button
          typeof="button"
          onClick={handleClickDog}
          data-active={dogActive}
        >
          DOG
        </button>
      </BtnContainer>

      <CryptoPlanContainer>
        <div>
          {btcActive && <BTC />}
          {/* {ethActive && <ETH />} */}
          {dogActive && <DOG />}
        </div>
      </CryptoPlanContainer>
    </Container>
  );
}
