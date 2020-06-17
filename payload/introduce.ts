import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '개발 경험을 공유하기 위해 기술 블로그를 운영하고 있으며 기술 블로그는 React 기반의 정적 페이지 생성 프레임워크인 Gatsby를 사용해서 직접 나만의 블로그를 만들었습니다.',
    '업무에서는 새로운 도구에 대한 적응력과 학습력으로 주어진 일에 실패하지 않고 좋은 결과를 만들어냈으며 유연한 커뮤니케이션 능력으로 비개발자 직군에 종사하시는 분들과도 원활한 소통을 하였습니다.',
    '더 좋은 개발자가 되기 위해서 항상 학습하고, 기술을 익히고 숙달하기 위해 jaebook-server, jaebook-client 등의 개인 프로젝트를 하며, 효율적으로 협업을 하기 위한 개발환경을 구축하려고 노력합니다.',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
