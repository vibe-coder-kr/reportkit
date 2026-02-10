import {
  report,
  cover,
  section,
  p,
  table,
  list,
  checklist,
  divider,
  image,
  ThemeBuilder,
  PDFBuilder
} from '../src';

const advancedReport = report({
  meta: {
    title: '2025년 IT 산업 전략 보고서: 클라우드와 AI의 융합',
    author: '전략기획실 인사이트팀',
    date: new Date().toISOString().split('T')[0],
    department: '전략기획실',
    version: '3.1.0',
    tags: ['시장분석', 'IT트렌드', '2025전략']
  },
  cover: cover({
    title: '2025년 IT 산업 전략 보고서',
    subtitle: '클라우드 네이티브와 생성형 AI가 이끄는 비즈니스 혁신',
    meta: {
      author: '전략기획실 인사이트팀'
    },
    logo: {
      src: 'https://via.placeholder.com/200x100?text=INSIGHT',
      alt: 'Insight Logo',
      width: 200,
      height: 80
    }
  }),
  body: [
    section({
      title: 'I. 서론: 2025년 시장 전망',
      content: [
        p('2025년 글로벌 클라우드 시장은 단순 인프라 제공을 넘어 AI 중심의 서비스형 플랫폼(PaaS)으로 급격히 재편되고 있습니다.', {
          emphasis: 'strong',
          align: 'justify'
        }),
        p('본 보고서에서는 당사의 향후 3개년 로드맵 설정을 위한 핵심 지표와 시장 변화를 분석합니다.')
      ]
    }),
    divider('dashed'),
    section({
      title: 'II. 핵심 전략 추진 현황',
      content: [
        p('분기별 주요 전략 과제의 이행 현황은 다음과 같습니다.'),
        checklist([
          '멀티 클라우드 통합 관리 플랫폼 구축 (Alpha)',
          '자체 거대언어모델(LLM) 파인튜닝 데이터셋 확보',
          '보안 취약점 자동 탐지 엔진 고도화',
          '글로벌 엣지 컴퓨팅 거점 5개소 신설',
          '그린 IT 인프라 탄소 배출량 20% 절감 목표 수립'
        ], [true, true, true, false, false])
      ]
    }),
    section({
      title: 'III. 시장 점유율 및 성과 분석',
      content: [
        table({
          headers: ['지역별 시장', '현재 점유율', '전년 대비 성장', '주요 경쟁사', '기회 요소'] as const,
          rows: [
            { '지역별 시장': '북미', '현재 점유율': '35%', '전년 대비 성장': '+12.5%', '주요 경쟁사': 'AWS, Azure', '기회 요소': '정부 공공 사업' },
            { '지역별 시장': '유럽', '현재 점유율': '22%', '전년 대비 성장': '+8.2%', '주요 경쟁사': 'Google Cloud', '기회 요소': '데이터 주권 강화' },
            { '지역별 시장': '아시아', '현재 점유율': '43%', '전년 대비 성장': '+25.0%', '주요 경쟁사': 'Alibaba, Tencent', '기회 요소': '디지털 전환 가속' }
          ],
          caption: '2024년 4분기 기준 글로벌 시장 분석 데이터',
          highlight: 'column'
        })
      ]
    }),
    section({
      title: 'IV. 분석 결과 요약',
      content: [
        p('데이터 분석 결과, 아시아 시장에서의 폭발적인 성장이 전체 매출 견인의 핵심 동력으로 파악되었습니다.', {
          emphasis: 'muted'
        }),
        list({
          items: [
            '아시아 시장 점유율 전년 대비 18%p 상승',
            'SaaS 부문 구독 유지율(Retention) 94% 달성',
            '인프라 운영 비용 효율화로 영업이익률 5.5% 개선'
          ],
          type: 'ordered'
        })
      ]
    }),
    section({
      title: 'V. 향후 권고 사항',
      content: [
        p('시장 우위 점유를 위해 다음과 같은 전략적 집중이 필요합니다.'),
        list({
          items: [
            'AI 연산 최적화를 위한 커스텀 실리콘 도입 검토',
            '데이터 거버넌스 강화를 통한 글로벌 규제 대응',
            '오픈소스 커뮤니티 기여 확대를 통한 기술 리더십 확보'
          ],
          type: 'unordered'
        })
      ]
    }),
    section({
      title: 'VI. 시각 자료: 성장 추이',
      content: [
        image({
          src: 'https://via.placeholder.com/800x400/7e22ce/ffffff?text=Market+Growth+Trend',
          alt: 'Market Growth Chart',
          caption: '2020-2025 글로벌 클라우드 시장 성장 곡선 (예측치 포함)',
          width: 800,
          height: 400
        })
      ]
    })
  ],
  footer: {
    text: 'CONFIDENTIAL - © 2026 전략기획실 인사이트팀. All rights reserved.',
    pageNumber: true
  }
});

const advancedTheme = ThemeBuilder.create()
  .withColors({
    primary: '#1e40af',
    secondary: '#1e293b',
    background: '#f8fafc',
    surface: '#ffffff',
    text: {
      primary: '#0f172a',
      secondary: '#334155',
      muted: '#64748b',
      inverted: '#ffffff'
    },
    accent: {
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
      info: '#2563eb'
    }
  })
  .withTypography({
    fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2.25rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.6,
      relaxed: 1.8
    }
  })
  .withSpacing({
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem'
  })
  .build();

async function generateAdvancedReport() {
  const pdfBuilder = new PDFBuilder(advancedTheme);

  try {
    await pdfBuilder.savePDF(advancedReport, './examples/output/strategy-report.pdf');
    console.log('전략보고서가 성공적으로 생성되었습니다!');
  } catch (error) {
    console.error('PDF 생성 중 오류 발생:', error);
  } finally {
    await pdfBuilder.close();
  }
}

generateAdvancedReport();
