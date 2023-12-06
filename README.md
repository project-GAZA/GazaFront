## Used Framework

- Next 13(app router)
- chakra UI
- fullpage.js(추후에 적용)
- typescript

## 스타일링 규칙

1. 변하지 않는건 css파일에 클래스로!
   - global.css에 모두 임포트
   - fonts.css 로컬의 폰트파일 정
2. 변하는 속성값이 존재한다면 styledComponent로!

## 폴더구조

- assets: font파일, 이미지파일 모음
- components:스크롤 섹션들 안에 사용되는 공통 컴포넌트
  - SectionComponent: 스크롤 섹션 구분
  - AfterComponent: 나중에 쓰일수 있어서 남겨놓은 컴포넌트
- fail, success: 결제 실패, 결제 성공 페이지(기부금 - 추후에 직접 토스 api랑 연동하기 위한 페이)
- hooks: 사용자 정의 hooks
  - useWindowSize: 윈도우 창이 변경될 때마다 사이즈 받아오기(반응형을 위한 함수)
- api
  - client API 라우터 : 백엔드 서버를 내부망으로 돌려서 클라이언트 API를 호출해 백엔드 API를 웹프론트서버가 호출하게 동작

![api구조](./assets/svg/Readme/apiCall.png)

## 배포방법

- ssh root@클라우드아이피 로 접속후
- git clone 프론트깃주소, 또는 git pull origin main
- 로그인후 yarn install, yarn build, yarn start & (백그라운드로 실행)

--> 추후에 변경 예정

## 개발정보

- yarn dev => localhost:3000
- yarn start & => 80포트
