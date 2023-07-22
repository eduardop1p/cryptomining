'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

import { Container, ContainerSlide } from './styled';

export default function Slider() {
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        style={{ width: '100%', height: 'auto' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <ContainerSlide>
            <FaQuoteLeft />
            <p>
              My experience with CriptoMining was good and am so much impressed
              with their mining service, {`They're`} the best among all.
            </p>
            <div className="thumb">
              <Image
                src="/assets/imgs/62665c818f9e21650875521.png"
                alt="Bobby Lashley"
                fill={true}
                sizes="100%"
              />
            </div>
            <div className="info-client">
              <h2>Bobby Lashley</h2>
              <p>Clients</p>
            </div>
          </ContainerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerSlide>
            <FaQuoteLeft />
            <p>
              When you think of Fastness, Reliability, security and power
              CriptoMining Is the lead. I have been able to mine and earn
              Bitcoin.
            </p>
            <div className="thumb">
              <Image
                src="/assets/imgs/62665c55cb09b1650875477.png"
                alt="Chris Emma"
                fill={true}
                sizes="100%"
              />
            </div>
            <div className="info-client">
              <h2>Chris Emma</h2>
              <p>Clients</p>
            </div>
          </ContainerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerSlide>
            <FaQuoteLeft />
            <p>
              {`I'm`} new to the crypto world CriptoMining made it super easy
              and simple for me to start mining BTC and LTC I think am now a
              cryptoster.
            </p>
            <div className="thumb">
              <Image
                src="/assets/imgs/62665c620ca9d1650875490.png"
                alt="Derloth Hmma"
                fill={true}
                sizes="100%"
              />
            </div>
            <div className="info-client">
              <h2>Derloth Hmma</h2>
              <p>Clients</p>
            </div>
          </ContainerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerSlide>
            <FaQuoteLeft />
            <p>
              The profits I get while mining with CriptoMining Is massive,{' '}
              {`can't`} even be compared while trading cryptocurrency. I LOVE
              THIS COMPANY
            </p>
            <div className="thumb">
              <Image
                src="/assets/imgs/62665c6e75e301650875502.png"
                alt="Jeley"
                fill={true}
                sizes="100%"
              />
            </div>
            <div className="info-client">
              <h2>Jeley</h2>
              <p>Clients</p>
            </div>
          </ContainerSlide>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
