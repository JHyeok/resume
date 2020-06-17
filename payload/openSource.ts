import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'jaebook-server',
      descriptions: [
        { content: 'Express.js with TypeScript' },
        { content: 'Jest와 Supertest로 테스트를 자동화' },
        { content: 'Docker와 GitHub Action을 사용한 Devops' },
        { content: 'ESLint로 코드 컨벤션을 검증하고 Prettier로 코드 스타일을 정리' },
        { content: 'Codecov와 같은 도구로 코드 커버리지를 점검' },
        { content: '협업을 위한 TypeScript 개발 환경' },
        {
          content: 'https://github.com/JHyeok/jaebook-server',
          href: 'https://github.com/JHyeok/jaebook-server',
        },
      ],
    },
    {
      title: 'jaebook-client',
      descriptions: [
        { content: 'Nuxt.js with TypeScrpt' },
        { content: 'AWS Elastic Beanstalk을 활용' },
        { content: 'ESLint로 코드 컨벤션을 검증하고 Prettier로 코드 스타일을 정리' },
        {
          content: 'https://github.com/JHyeok/jaebook-client',
          href: 'https://github.com/JHyeok/jaebook-client',
        },
      ],
    },
  ],
};

export default openSource;
