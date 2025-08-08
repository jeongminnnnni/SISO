# SISO - AI 기반 여행 및 클래스 추천 웹 서비스

SISO는 사용자의 취향과 선호도에 맞춰 개인화된 여행지와 원데이 클래스를 추천해주는 웹 애플리케이션입니다.

핵심 기능인 **설계 마법사**를 통해 몇 가지 간단한 질문에 답변하면, 최적의 여행 계획과 즐길 거리를 제안하여 사용자의 소중한 시간을 아껴주고 만족도 높은 여가 활동을 계획할 수 있도록 돕습니다.

## 🚀 핵심 기능: 설계 마법사 (Recommendation Wizard)

설계 마법사는 사용자의 여행 스타일, 관심사, 예산 등 다양한 요소를 종합적으로 분석하여 맞춤형 여행 및 클래스 패키지를 추천하는 대화형 설문 기능입니다.

### 작동 방식

1.  **질문 & 답변:** 사용자는 여행 동반자 유형, 선호 활동, 예산 등 다양한 질문에 답변합니다.
2.  **데이터 수집:** 사용자의 모든 답변은 `WizardContext`를 통해 실시간으로 수집 및 관리됩니다.
3.  **AI 분석 및 추천:** 수집된 데이터를 `lib/recommendation.ts`의 추천 알고리즘으로 전달하여, 사용자의 취향에 가장 부합하는 여행지와 클래스 목록을 생성합니다.
4.  **결과 확인:** 분석이 완료되면 `app/wizard/results` 페이지에서 추천 결과를 시각적으로 확인하고, 각 항목의 상세 정보 페이지로 이동할 수 있습니다.

-   **비회원:** 최소한의 정보(여행 기간, 동반 유형 등)만으로 기본적인 추천을 받을 수 있습니다. (`NonUserWizardStep1` ~ `NonUserWizardStep4`)
-   **회원:** 더욱 상세한 질문을 통해 고도로 개인화된 추천 결과를 제공받습니다. (`UserWizardStep1` ~ `UserWizardStep8`)

## 🛠️ 기술 스택 (Technology Stack)

-   **Framework**: Next.js (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **State Management**: React Context API

## 📂 프로젝트 구조

```
SISO_fullstack/
├── app/
│   ├── wizard/             # 🧙‍♂️ 설계 마법사 핵심 기능
│   │   ├── page.tsx        # 마법사 시작 페이지
│   │   └── results/        # 추천 결과 페이지
│   │       └── page.tsx
│   ├── travel/             # ✈️ 여행 상품 관련 페이지
│   ├── class/              # 🎨 클래스 관련 페이지
│   ├── community/          # 📝 커뮤니티
│   └── api/                # 벡엔드 API
│       └── login/
│           └── route.ts
├── components/
│   ├── wizard/             # 🧙‍♂️ 설계 마법사 UI 컴포넌트
│   │   ├── UserWizardStep1.tsx
│   │   └── ...
│   └── ui/                 # 🎨 shadcn/ui 기본 컴포넌트
├── contexts/
│   ├── WizardContext.tsx   # ✨ 설계 마법사 상태 관리
│   └── AuthContext.tsx     # 🔐 사용자 인증 상태 관리
└── lib/
    ├── recommendation.ts   # 🧠 추천 시스템 로직
    └── ...
```

### 주요 디렉토리 설명

-   `app/wizard/**`: 설계 마법사 기능의 페이지 및 라우팅을 담당합니다.
-   `components/wizard/**`: 마법사의 각 단계를 구성하는 UI 컴포넌트가 위치합니다.
-   `contexts/WizardContext.tsx`: 마법사 진행 과정에서 사용자의 답변 데이터를 전역적으로 관리합니다.
-   `lib/recommendation.ts`: 사용자 데이터를 기반으로 추천 결과를 생성하는 핵심 로직을 포함합니다.
-   `app/travel/**`, `app/class/**`: 추천된 여행 및 클래스의 상세 정보를 보여주는 페이지입니다.