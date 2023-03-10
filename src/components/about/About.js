import React from 'react';
import { useTranslation } from 'react-i18next';
import about from './Rectangle.jpg';

function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-[4rem]">
      <p className="text-5xl pl-[4rem]">{t('HEALING!')}</p>
      <p
        className="text-2xl pl-[4rem] font-light leading-relaxed text-black text-opacity-50"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {' '}
        {t('some cool one liner !')}
      </p>
      <p
        className=" pb-[10rem] pl-[4rem] pt-[4rem] lg:text-xl leading-relaxed text-gray-700 lg:w-[75rem]  md:w-[60rem] sm:w-[20rem] first-letter:"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {t(
          'At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We&apos;re obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It&apos;s one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We&apos;re excited to simplify SEO for everyone through our software, education, and community.'
        )}
      </p>

      <div className="lg:flex lg:space-x-14 sm:space-x-10 justify-start pl-[4rem] bg-cyan-50 p-10 w-full ">
        <img
          className="rounded-md sm:w-[27rem] lg:w-[21rem] md:w-[10rem] lg:h-[20rem] sm:h-[15rem]"
          alt=""
          src={about}
        />
        <div className="lg:inline-flex flex-col  space-y-6 items-start ">
          <p className="w-96 h-1/6 lg:text-5xl md:text-4xl sm:text-3xl leading-10 text-gray-700 lg:w-[20rem]  md:w-[10rem]">
            {t('Our Founding')}
          </p>
          <p
            className="lg:text-xl md:text-l  sm:text-sm leading-normal text-gray-700 lg:w-[40rem]  md:w-[20rem] sm:w-[20rem]  "
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {t(
              'Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world&apos;s therapists shared their research and ideas. We launched the Beginner&apos;s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
