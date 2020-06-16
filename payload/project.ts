import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '갤럭시 스토어 큐레이션 툴 개발',
      startedAt: '2020-02',
      endedAt: '2020-04',
      where: '큐로드 (QROAD)',
      descriptions: [
        { content: 'ASP.NET Core를 사용해서 개발' },
        { content: 'AWS Elastic Beanstalk 환경을 사용' },
      ],
    },
    {
      title: '웹 크롤러(Web Crawler) v2 개발 및 유지 보수',
      startedAt: '2020-01',
      endedAt: '2020-05',
      where: '큐로드 (QROAD)',
      descriptions: [
        { content: '기존 크롤러의 확장성 문제 발생' },
        { content: '모듈화하고 중복된 코드를 줄이려고 노력' },
        { content: '확장성을 고려한 새로운 설계' },
        { content: 'Selenium을 Windows에서 사용하는데 최적화' },
      ],
    },
    {
      title: '머신러닝 API 서버 개발',
      startedAt: '2019-11',
      endedAt: '2019-12',
      where: '큐로드 (QROAD)',
      descriptions: [
        { content: '전체 프로젝트 아키텍처 설계 및 BackEnd 작업을 수행' },
        { content: 'Flask를 사용해서 개발' },
        { content: '버그 및 장애 콘텐츠를 분류하는 API 서버를 개발' },
        { content: 'Swagger를 이용해 API 문서 자동화' },
        { content: 'Gunicorn, Nginx를 서버 인프라로 사용' },
        { content: 'Pytest를 사용한 테스트 코드 작성' },
      ],
    },
    {
      title: '데이터 라벨링 툴 개발',
      startedAt: '2019-10',
      endedAt: '2019-12',
      where: '큐로드 (QROAD)',
      descriptions: [
        { content: '전체 프로젝트 아키텍처 설계 및 BackEnd, 데이터 라벨링에 대한 FrontEnd를 담당' },
        { content: 'Nuxt.js, Express.js, Sequelize를 사용해서 개발' },
        { content: 'PM2, Nginx를 서버 인프라로 사용' },
        { content: 'Jest를 사용한 테스트 코드 작성' },
      ],
    },
    {
      title: 'QPlex 3.0 개발',
      startedAt: '2019-01',
      endedAt: '2019-09',
      where: '큐로드 (QROAD)',
      descriptions: [
        { content: 'ASP.NET MVC, ORM을 사용하여 개발' },
        { content: 'AWS EC2, S3 사용' },
        { content: 'AWS RDS의 MySQL을 데이터베이스로 사용' },
        {
          content: '브랜드 사이트',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사이트의 전체적인 FrontEnd와 BackEnd 담당' },
            { content: '회원가입, 결제 모듈, 솔루션 데모 이용 및 주문 기능 개발' },
          ],
        },
        {
          content: '백오피스',
          weight: 'MEDIUM',
          descriptions: [
            { content: '솔루션의 이메일 발송 모듈, S3 파일 업로드/다운로드/삭제 개발' },
            { content: '프로필, 공지사항, Q&A, 템플릿관리 기능 등 개발' },
            {
              content: '오류에 대한 Slack, Sentry 연동을 담당',
            },
            { content: 'Jenkins를 이용해 CI와 MSBuild를 이용해서 CD를 구축' },
          ],
        },
        {
          content: 'Ticket 처리',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Kafka .NET을 사용해 티켓 처리 모듈 개발' }],
        },
      ],
    },
    {
      title: '그룹웨어 전자결재 개발',
      startedAt: '2018-07',
      endedAt: '2018-12',
      where: '큐브코아 (CubeCore)',
      descriptions: [
        { content: 'ERP와 연동하여 전자결재 할 수 있는 소규모 그룹웨어 개발' },
        { content: '이전의 Silverlight와 Stored Procedure로 개발된 사이트를 분석' },
        { content: 'ASP.NET과 Javascript로 개발' },
      ],
    },
    {
      title: 'ERP 공통 모듈 개발 및 유지보수',
      startedAt: '2017-08',
      endedAt: '2019-01',
      where: '큐브코아 (CubeCore)',
      descriptions: [
        { content: 'ERP 로그인 기능, ERP 버전 업데이트 모듈 개선, ERP 메인 홈 개발' },
        {
          content: '각 모듈별 ERP 개발자분들이 쓰는 회사 자체 프레임워크의 배포 및 공통 함수 개발',
        },
        { content: 'C#, .NET, MSSQL 등을 사용하여 개발' },
        { content: 'MSSQL의 스케줄러 및 MSSQL 백업 계획을 담당' },
        { content: '공통 Stored Procedure의 유지보수 및 신규 개발' },
      ],
    },
  ],
};

export default project;
