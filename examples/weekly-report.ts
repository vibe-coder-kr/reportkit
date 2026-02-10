import {
  report,
  cover,
  section,
  p,
  table,
  list,
  divider,
  link,
  codeblock,
  PDFBuilder,
  theme
} from '../src';

const basicReport = report({
  meta: {
    title: '프로젝트 알파: 주간 개발 현황 보고서',
    author: '이민수 팀장',
    date: new Date().toISOString().split('T')[0],
    department: '플랫폼 개발팀',
    version: '1.2.0',
    tags: ['주간보고', '프로젝트알파', '개발현황']
  },
  cover: cover({
    title: '주간 개발 현황 보고서',
    subtitle: 'Project Alpha: Core Infrastructure & API Integration',
    meta: {
      author: '이민수 팀장'
    },
    logo: {
      src: 'https://via.placeholder.com/150x50?text=LOGO',
      alt: 'Company Logo',
      width: 150,
      height: 50
    }
  }),
  body: [
    section({
      title: '1. 요약 (Executive Summary)',
      content: [
        p('이번 주 프로젝트 알파는 핵심 인프라 스트럭처 구축을 완료하고 외부 API 연동 테스트 단계에 진입했습니다.'),
        p('전반적인 진행률은 계획 대비 105%로, 예정된 마일스톤보다 빠르게 진행되고 있습니다.', {
          emphasis: 'strong'
        })
      ]
    }),
    divider('solid'),
    section({
      title: '2. 주요 달성 사항',
      content: [
        list({
          items: [
            '분산 데이터베이스 클러스터 구축 및 최적화 완료',
            'OAuth2.0 기반 인증 모듈 보안 감사 통과',
            '프론트엔드 컴포넌트 라이브러리 v2.0 배포',
            '백엔드 마이크로서비스 간 통신 지연 시간 15% 개선'
          ],
          type: 'unordered'
        })
      ]
    }),
    section({
      title: '3. 리소스 투입 현황',
      content: [
        table({
          headers: ['구분', '성명', '역할', '투입률'] as const,
          rows: [
            { 구분: '백엔드', 성명: '김철수', 역할: 'API 설계 및 구현', 투입률: '100%' },
            { 구분: '백엔드', 성명: '박지민', 역할: 'DB 아키텍처 최적화', 투입률: '80%' },
            { 구분: '프론트엔드', 성명: '이영희', 역할: 'UI 컴포넌트 개발', 투입률: '100%' },
            { 구분: 'QA', 성명: '최승우', 역할: '통합 테스트 시나리오 작성', 투입률: '50%' }
          ],
          caption: '팀별 리소스 할당 표'
        })
      ]
    }),
    section({
      title: '4. 기술적 이슈 및 해결 방안',
      content: [
        p('분산 환경에서 레이스 컨디션 이슈가 발견되었으나, Redis 분산 락을 도입하여 해결했습니다.'),
        codeblock({
          code: `// Redis 기반 분산 락 적용 예시
async function processOrder(orderId: string) {
  const lock = await redis.lock(\`order:\${orderId}\`, 5000);
  try {
    // 비즈니스 로직 수행
    await updateInventory(orderId);
  } finally {
    await lock.release();
  }
}`,
          language: 'typescript',
          fileName: 'locking-service.ts',
          showLineNumbers: true
        }),
        p('아래에 Redis 사이트를 첨부합니다.'),
        link({
          href: 'https://redis.io/',
          text: 'Redis',
          title: 'Documentation',
          newTab: true
        })
      ]
    }),
    section({
      title: '5. 다음 주 계획',
      content: [
        p('다음 주에는 사용자 피드백 반영을 위한 베타 테스트 환경 구축에 집중할 예정입니다.')
      ]
    })
  ],
  footer: {
    text: '본 문서는 대외비이므로 무단 배포를 금합니다.',
    pageNumber: true
  }
});

async function generateBasicReport() {
  const pdfBuilder = new PDFBuilder();

  try {
    await pdfBuilder.savePDF(basicReport, './examples/output/weekly-report.pdf');
    console.log('주간보고서가 성공적으로 생성되었습니다!');
  } catch (error) {
    console.error('PDF 생성 중 오류 발생:', error);
  } finally {
    await pdfBuilder.close();
  }
};

generateBasicReport();
