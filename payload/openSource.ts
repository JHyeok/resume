import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'jaebook-server',
      descriptions: [
        { content: 'jaebook의 BackEnd' },
        { content: 'Express.js with TypeScript' },
        { content: 'Owner & Maintainer' },
        {
          content: 'https://github.com/JHyeok/jaebook-server',
          href: 'https://github.com/JHyeok/jaebook-server',
        },
      ],
    },
    {
      title: 'jaebook-client',
      descriptions: [
        {
          content: 'jaebook의 FrontEnd',
        },
        {
          content: 'Nuxt.js with TypeScrpt',
        },
        {
          content: 'Owner & Maintainer',
        },
        {
          content: 'https://github.com/JHyeok/jaebook-client',
          href: 'https://github.com/JHyeok/jaebook-client',
        },
      ],
    },
  ],
};

export default openSource;
