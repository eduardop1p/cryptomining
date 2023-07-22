'use client';

import {
  FaUsers,
  FaPlus,
  FaUserTag,
  FaUniversity,
  FaDeaf,
} from 'react-icons/fa';

import { Container } from './styled';

export default function Insigns() {
  return (
    <Container>
      <div>
        <div className="icon-ins">
          <FaUsers />
        </div>
        <div className="count-ins">
          <span>90621</span>
          <FaPlus />
        </div>
        <p>Active CriptoMining Users</p>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <div className="icon-ins violet">
          <FaUserTag />
        </div>
        <div className="count-ins">
          <span>72,321</span>
          <FaPlus />
        </div>
        <p>Verified CriptoMining Users</p>
      </div>
      <div>
        <div className="icon-ins blue">
          <FaUniversity />
        </div>
        <div className="count-ins">
          <span>59,875</span>
          <FaPlus />
        </div>
        <p>CriptoMining Gateways</p>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <div className="icon-ins">
          <FaDeaf />
        </div>
        <div className="count-ins">
          <span>42,348</span>
          <FaPlus />
        </div>
        <p>CriptoMining Sales</p>
      </div>
    </Container>
  );
}
