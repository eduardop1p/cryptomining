'use client';

import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container } from './styled';

export default function AskedQuestions() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const plusDiv = event.currentTarget;
    const p = plusDiv.querySelector('p') as HTMLParagraphElement;
    const activeClass = 'active';
    if (p.classList.contains(activeClass)) {
      p.classList.remove(activeClass);
      return;
    }
    p.classList.add(activeClass);
  };

  return (
    <Container>
      <div className="plus-title" onClick={handleClick}>
        <div>
          <FaPlus />
          <h2>CAN I HAVE MORE THAN ONE ACCOUNT?</h2>
        </div>
        <p>
          No, Absolutely Not! Since We give Partnership Commission and Many
          Bonuses for all of our users, You can not register more than ONE
          account with One IP and One Device even for your family. If we find
          more than one account for a user, We will block all of that user
          accounts without any warning.
        </p>
      </div>
      <div className="plus-title" onClick={handleClick}>
        <div>
          <FaPlus />
          <h2>WHAT CAN I DO IF I LOSE MY USERNAME OR PASSWORD?</h2>
        </div>
        <p>
          Refer to the Login Page and click on {'"Lost Your Password"'} Link, On
          the next page, Type your Email. A Confirmation link will be sent to
          your Email, Click on the link then, Your Username and Your new
          Password Will be sent to your Email.
        </p>
      </div>
      <div className="plus-title" onClick={handleClick}>
        <div>
          <FaPlus />
          <h2>WHAT ARE THE CLOUD HOSTING CONTRACTS?</h2>
        </div>
        <p>
          The Cloud Hosting Contracts are suitable for the users who want to
          purchase a Mining Machine instead of Mining Hashrate and We will host
          their Mining Machines in One of our Farms with the best conditions and
          the highest profit. If you are interested in the Cloud Hosting
          Contracts, Please Refer to the {'"Cloud Hosting"'} Page and fill the
          form, Our Experts will Contact you as soon as possible.
        </p>
      </div>
      <div className="plus-title" onClick={handleClick}>
        <div>
          <FaPlus />
          <h2>HOW TO GET STARTED MINING？</h2>
        </div>
        <p>
          You need to purchase at least one mining plan. The mining machines are
          managed by us, so you {`don't`} need to learn anything about mining
          technology. You need to deposit first then click {'"Buy plan"'} to
          active the plan. After purchased, the plan will take effect in 24
          hours automaticlly.The output BTC is settled every 24 hours, and you
          can withdraw it at any time. Our website also describes how we works.
        </p>
      </div>
      <div className="plus-title" onClick={handleClick}>
        <div>
          <FaPlus />
          <h2>IS THE PLATFORM LEGAL</h2>
        </div>
        <p>
          There is no any hidden terms and additional. After you purchase a
          plan, we promise not to charge you any fees.
        </p>
      </div>
    </Container>
  );
}
