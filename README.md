     

  기술 스택 (Technology Stack)

   * 프레임워크 (Framework): Next.js (React 기반 프레임워크)
       * next.config.mjs, app/ 디렉토리 구조를 통해 Next.js, 특히 최신 버전의 App        
         Router를 사용하고 있음을 알 수 있습니다.
   * 프로그래밍 언어 (Language): TypeScript
       * .ts, .tsx 확장자 파일과 tsconfig.json 파일은 TypeScript를 사용해 코드의
         안정성과 가독성을 높이고 있음을 보여줍니다.
   * UI 라이브러리 (UI Library): React
       * Next.js의 기반이 되며, .tsx 파일들은 React 컴포넌트 기반으로 UI를
         구성하고 있음을 나타냅니다.
   * 스타일링 (Styling): Tailwind CSS
       * tailwind.config.ts, postcss.config.mjs, globals.css 파일들은
         유틸리티-우선(utility-first) 방식의 CSS 프레임워크인 Tailwind CSS를
         사용해 디자인 시스템을 구축하고 있음을 의미합니다.
   * UI 컴포넌트 (UI Components): shadcn/ui
       * components/ui 디렉토리 내의 수많은 컴포넌트 파일들(button.tsx, card.tsx
         등)과 components.json 파일은 shadcn/ui를 사용해 재사용 가능하고 완성도
         높은 UI 컴포넌트를 구축했음을 시사합니다.
   * 패키지 매니저 (Package Manager): pnpm
       * pnpm-lock.yaml 파일은 pnpm을 사용하여 의존성(라이브러리)을 관리하고
         있음을 나타냅니다.
   * 상태 관리 (State Management): React Context API
       * contexts/ 디렉토리 (AuthContext.tsx, WizardContext.tsx)를 통해 여러
         컴포넌트가 공유해야 하는 전역적인 상태(예: 로그인 정보, 마법사 진행
         상태)를 Context API로 관리하고 있습니다.

  전체적인 구조 및 작동 원리

  이 프로젝트는 Next.js의 App Router를 중심으로 구성되어 있으며, 각 기능이 명확한        
  디렉토리 구조로 분리되어 있습니다.

   1. 라우팅 (Routing):
       * app/ 디렉토리의 폴더 구조가 그대로 웹사이트의 URL 경로가 됩니다.
       * 예를 들어, app/login/page.tsx 파일은 사용자가 http://.../login 경로로
         접속했을 때 보여지는 페이지가 됩니다.
       * app/community/[id]/page.tsx와 같은 동적 라우팅을 통해 특정 ID를 가진
         커뮤니티 게시글 상세 페이지(http://.../community/123)를 구현합니다.

   2. 프론트엔드 (Frontend - 사용자 인터페이스):
       * 페이지 (`app/.../page.tsx`): 각 URL 경로에 해당하는 메인 페이지
         컴포넌트입니다.
       * 레이아웃 (`app/layout.tsx`): 모든 페이지에 공통으로 적용되는 뼈대(예:
         헤더, 푸터)를 정의합니다.
       * 컴포넌트 (`components/`): 페이지를 구성하는 재사용 가능한 UI
         조각들입니다.
           * Header.tsx, Footer.tsx 같은 공통 컴포넌트와 PopularClasses.tsx 같은
             특정 섹션 컴포넌트로 나뉩니다.
           * components/ui/에는 shadcn/ui를 통해 만들어진 버튼, 카드, 입력창 등
             기본적인 UI 요소들이 있습니다.
           * components/wizard/에는 여러 단계로 구성된 '마법사' 기능(설문, 추천
             등) 관련 컴포넌트들이 모여 있습니다.

   3. 백엔드 (Backend - 서버 로직):
       * Next.js는 프론트엔드뿐만 아니라 백엔드 기능도 수행할 수 있습니다.
       * app/api/login/route.ts 파일이 대표적인 예시입니다. 이 파일은
         /api/login이라는 API 엔드포인트를 생성합니다.
       * 프론트엔드(로그인 페이지)에서 사용자가 아이디와 비밀번호를 입력하면, 이
         /api/login 주소로 요청을 보내 서버에서 로그인 유효성을 검사하고
         데이터베이스 처리와 같은 서버 로직을 수행하게 됩니다.

   4. 상태 관리 (State Management):
       * contexts/AuthContext.tsx는 사용자의 로그인 상태, 사용자 정보 등을
         애플리케이션 전역에서 관리하는 역할을 할 가능성이 높습니다. 로그인 후 어떤      
         컴포넌트에서든 "로그인된 사용자"임을 알 수 있게 해줍니다.
       * contexts/WizardContext.tsx는 여러 단계에 걸친 마법사 기능에서 사용자가 각       
         단계에서 선택한 값들을 저장하고 공유하는 역할을 합니다.

  요약 (Summary)

  사용자가 웹사이트에 접속하면 Next.js 서버가 요청된 경로에 맞는
  페이지(page.tsx)와 공통 레이아웃(layout.tsx)을 조합하여 렌더링합니다. 이
  페이지들은 components 폴더의 여러 React 컴포넌트들로 구성되며, Tailwind CSS와
  shadcn/ui로 멋지게 스타일링됩니다.

  로그인과 같은 기능이 필요할 때는 프론트엔드에서 app/api에 정의된 백엔드 API로
  요청을 보내 데이터를 처리합니다. Context API는 로그인 상태와 같은 중요한
  데이터를 앱 전체에서 일관되게 유지시켜주는 역할을 합니다.

  결론적으로, 이 프로젝트는 Next.js를 기반으로 프론트엔드와 백엔드를 모두 
  아우르는 현대적인 풀스택 애플리케이션이며, TypeScript로 안정성을 더하고
  Tailwind CSS와 shadcn/ui로 효율적이고 미려한 UI를 구축한 구조입니다.

<!---
liljeongmin/liljeongmin is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
