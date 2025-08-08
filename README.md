     

  기술 스택 (Technology Stack)

   * 프레임워크 (Framework): Next.js (React 기반 프레임워크)

   * 프로그래밍 언어 (Language): TypeScript
     
   * UI 라이브러리 (UI Library): React

   * 스타일링 (Styling): Tailwind CSS

   * UI 컴포넌트 (UI Components): shadcn/ui

   * 패키지 매니저 (Package Manager): pnpm

   * 상태 관리 (State Management): React Context API


  전체적인 구조 및 작동 원리

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

<!---
liljeongmin/liljeongmin is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
