import type { NextPage } from 'next';

import { Image } from '../components/atomic/image';

import { NameTitle } from '../components/pages/home-page';
import { generateRandomInteger } from '../utils/generator';
import SwipeableContainer, { SwipeContent } from '../components/pages/swipeable';

import SocialMediaContainer, { ISocialMedia } from '../components/pages/social-media';

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { FaHackerrank } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { themeConfig } from '../core/theme';

const sampleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Home: NextPage = () => {
  return (
    <>
      <Image src={'/assets/profile-pic.jpg'} alt='Dimas Bagus Prayogo Mukti' />
      <NameTitle>@dimasbaguspm &#127470;&#127465;</NameTitle>
      <SocialMediaContainer socialMedias={socialMedias} />
      <SwipeableContainer swipeContents={swipeContentsSample} />
    </>
  );
};

export default Home;

const swipeContentsSample: SwipeContent[] = [
  {
    id: 1,
    detail: sampleText,
    ctaText: 'Support me in Saweria',
    ctaClick: () => console.log('hi'),
    position: {
      top: generateRandomInteger(-250, 250),
      left: generateRandomInteger(-750, 750),
    },
  },
  {
    id: 2,
    detail: sampleText,
    ctaText: 'Support me in Paterion',
    ctaClick: () => console.log('hi'),
    position: {
      top: generateRandomInteger(-250, 250),
      left: generateRandomInteger(-750, 750),
    },
  },
  {
    id: 3,
    detail: sampleText,
    ctaText: 'Get to know more about me',
    ctaClick: () => console.log('hi'),
    position: {
      top: generateRandomInteger(-250, 250),
      left: generateRandomInteger(-750, 750),
    },
  },
  {
    id: 4,
    detail: sampleText,
    ctaText: 'Test me',
    ctaClick: () => console.log('hi'),
    position: {
      top: generateRandomInteger(-250, 250),
      left: generateRandomInteger(-750, 750),
    },
  },
];

const socialMedias: ISocialMedia[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dimasbaguspm/?_l=en_US',
    icon: <IoLogoLinkedin size={25} color={themeConfig.colors.secondary.main} />,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/dimasbaguspm',
    icon: <FaHackerrank size={25} color={themeConfig.colors.secondary.main} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/dimasbaguspm',
    icon: <IoLogoGithub size={25} color={themeConfig.colors.secondary.main} />,
  },
  {
    name: 'Email',
    url: 'mailto:dimas.bagus.pm@gmail.com',
    icon: <FiMail size={25} color={themeConfig.colors.secondary.main} />,
  },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/moekthy_?up_rollout=true',
    icon: <SiFiverr size={25} color={themeConfig.colors.secondary.main} />,
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~014d420038e64a64a6',
    icon: <SiUpwork size={25} color={themeConfig.colors.secondary.main} />,
  },
];
