'use client';

import { useState, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import Image from 'next/image';

import { Container, ContainerBuyNow } from './styled';

interface Props {
  planPrice: number;
  planTitle: string;
}

export default function BuyNow({ planPrice, planTitle }: Props) {
  const [buyNowActive, setBuyNowActive] = useState(false);

  const inputCopy = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    navigator.clipboard.writeText(inputCopy.current?.value as string);
    setTimeout(() => {
      alert('code copied to clipboard');
    }, 100);
  };

  return (
    <Container>
      <button onClick={() => setBuyNowActive(!buyNowActive)}>Buy now</button>
      <ContainerBuyNow
        data-buy-now-active={buyNowActive}
        onClick={() => setBuyNowActive(!buyNowActive)}
      >
        <div className="buy-plan" onClick={event => event.stopPropagation()}>
          <div className="title-close">
            <h2>Buy plan</h2>
            <FaWindowClose onClick={() => setBuyNowActive(!buyNowActive)} />
          </div>
          <div className="plan-info">
            <div>
              <label htmlFor="starter">Plan title</label>
              <input id="starter" defaultValue={planTitle} readOnly={true} />
            </div>
            <div>
              <label htmlFor="plan-price">Plan price</label>
              <input id="plan-price" defaultValue={planPrice} readOnly={true} />
              <span>$</span>
            </div>
            <div>
              <label htmlFor="payment">Payment system</label>
              <input id="payment" defaultValue="USDC" readOnly={true} />
            </div>
            <div>
              <label htmlFor="copy">Copy code</label>
              <input
                id="copy"
                defaultValue="0x5caa449909c47b86c3a10a7872df9f4ae8c48725"
                readOnly={true}
                ref={inputCopy}
              />
              <button type="button" onClick={handleClick}>
                To copy
              </button>
            </div>
            <Image
              src="/assets/imgs/qrcodeusdc.png"
              alt="qrcodeusdc"
              width={280}
              height={280}
            />
          </div>
        </div>
      </ContainerBuyNow>
    </Container>
  );
}
