import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '큐로드 (QROAD)',
      position: '서비스개발팀 개발자',
      startedAt: '2019-01',
      endedAt: '2020-05',
      descriptions: [
        '온라인/모바일 게임서비스 운영(150~200명, 개발팀 2~8명)',
        '게임 내 고객지원 솔루션 및 운영툴 개발',
        '데이터 라벨링 툴, 머신러닝 API 서버 아키텍처 설계 및 개발',
        '통합 빌드, 배포 자동화(QA) 구축',
      ],
      skillKeywords: [
        'C#',
        '.NET Core',
        '.NET MVC',
        'Python',
        'Express.js',
        'Vue.js',
        'Jenkins',
        'EC2',
        'RDS',
        'S3',
        'ElasticBeanstalk',
        'Database Design',
        'Architecture',
        'MySQL',
        'ORM',
        'TDD',
      ],
    },
    {
      title: '큐브코아 (CubeCore)',
      position: '공통셀 개발자',
      startedAt: '2017-08',
      endedAt: '2019-01',
      descriptions: [
        '건설정보통합정보 솔루션 전문 회사(30~40명, 개발팀 15~20명)',
        '건설 ERP 공통 모듈 유지보수 및 관리',
        '전자결재 솔루션 개발',
        '고객사 IIS 서버, DB 서버 구축',
      ],
      skillKeywords: [
        'C#',
        'ASP.NET',
        'ASP',
        'javascript',
        'Common Module',
        'IIS',
        'MSSQL',
        'Stored Procedure',
      ],
    },
  ],
};

export default experience;
