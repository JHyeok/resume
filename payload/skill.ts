import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'C#',
      level: 3,
    },
    {
      title: 'IIS',
      level: 3,
    },
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'ASP.NET',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'Express.js',
      level: 2,
    },
    {
      title: 'Nginx',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'NestJS',
      level: 1,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'MSSQL',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Nuxt.js',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 1,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'CentOS',
    },
    {
      title: 'Jira',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Selenium',
    },
    {
      title: 'Docker',
    },
    {
      title: 'DevOps',
    },
    {
      title: 'Git',
    },
    {
      title: 'Socket.io',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Slack',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
