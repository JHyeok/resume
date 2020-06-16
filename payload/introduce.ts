import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '기술 블로그를 운영하고 있으며 기술 블로그는 Gatsby를 사용해서 직접 커스터마이징 하고 개발할 정도로 일상 생활에서 개발을 가까이하고 재밌어 합니다.',
    '새로운 기술을 익히고 숙달하기 위해 jaebook-server, jaebook-client 등 사이드 프로젝트를 합니다.',
    '더 좋은 개발자가 되기 위해서 항상 학습하고, 노력합니다',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
