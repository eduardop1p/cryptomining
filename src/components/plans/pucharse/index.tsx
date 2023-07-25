'use client';

import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import { Container, ContainerPurchase } from './styled';

export default function Purcharse() {
  const [purchaseActive, setPurchaseActive] = useState(false);

  return (
    <Container>
      <span>Purchase Agreement:</span>
      <button type="button" onClick={() => setPurchaseActive(!purchaseActive)}>
        View all
      </button>
      <ContainerPurchase
        data-purchase-active={purchaseActive}
        onClick={() => setPurchaseActive(!purchaseActive)}
      >
        <div className="agreement" onClick={event => event.stopPropagation()}>
          <div className="title-close">
            <h2>Agreement</h2>
            <FaWindowClose onClick={() => setPurchaseActive(!purchaseActive)} />
          </div>
          <ol>
            <li>
              Purchase Instructions The mining contract becomes effective
              immediately after the payment is confirmed. All purchases are
              final and non-refundable unless otherwise required by applicable
              law or specific offer.
            </li>

            <li>
              Calculate the output For the calculation of mining revenue, please
              refer to the planning contract.
            </li>

            <li>
              Equipment maintenance After the start of the contract, the
              platform (CRYPTO MINING) will carry out daily maintenance of the
              equipment. The contract price includes the maintenance fee, and
              the platform (CRYPTO MINING) will not charge additional
              maintenance fees.
            </li>

            <li>
              Output settlement After the contract starts, mining will start
              automatically, and the system will settle the income for you every
              day. You can withdraw your income at any time, and the minimum
              withdrawal amount is 0.0005BTC.
            </li>
            <li>
              Termination of contract Automatically terminated upon expiration.
              Early termination is non-refundable. Thank you for your
              understanding.
            </li>
            <li>
              Risk warning
              <span>
                {'(1)'} Policy risk: Due to the formulation or modification of
                laws, regulations and normative documents for digital assets in
                various countries, digital asset transactions may be suspended
                or banned at any time. You must understand and agree that due to
                the formulation or modification of national laws, regulations
                and regulatory documents, the transaction of digital assets is
                suspended or prohibited, and all economic losses caused by this
                will be borne by you.
              </span>
              <span>
                {'(2)'} Force majeure risk: The platform is responsible for
                information network equipment maintenance, information network
                connection failures, computer, communication or other system
                failures, power failures, hacker attacks, weather reasons,
                accidents, strikes, labor disputes, riots, uprisings, etc. ,
                riots, lack of productivity or means of production, fires,
                floods, storms, explosions, wars, reasons of banks or other
                partners, digital asset market collapse, government actions,
                orders from judicial or administrative agencies, other things
                beyond the control of this platform or The platform does not
                assume any responsibility for the failure or delay of service
                caused by the actions beyond the control of the platform or the
                reasons of the third party, as well as your losses.
              </span>
              <span>
                The platform reserves the right of final interpretation of the
                terms of this contract.
              </span>
            </li>
          </ol>
        </div>
      </ContainerPurchase>
    </Container>
  );
}
