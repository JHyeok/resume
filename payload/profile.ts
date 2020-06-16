import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김 재 혁',
    small: '(JHyeok)',
  },
  contact: [
    {
      title: 'dev.jhyeok@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/JHyeok',
      link: 'https://github.com/JHyeok',
      icon: faGithub,
    },
    {
      link: 'https://jhyeok.com',
      icon: faRss,
    },
  ],
  notice: {
    title: '이력서를 검토해주셔서 감사합니다.',
    icon: faSmile,
  },
};

export default profile;
