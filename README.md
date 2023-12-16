## Used Stack

### PackageManager

- yarn

### Library

- Next 13(app router)
- chakra UI
- typescript
- GA4
- axios

### Deploy

- NCP (dev)
- netlify (production)

## styling

- (group).style.ts
- 객체로 가져와서 컴포넌트로 적용 (객체 작업은 추후 적용예정)

## 폴더구조

- app: (next app route)
  - fail, success: 결제 실패, 결제 성공 페이지(추후에 추가 예정: 기부금 - 추후에 직접 토스 api랑 연동하기 위한 페이)
  - api: client side에서 api호출해 백엔드랑 연결하는 Web API Server
  - \_component: private folder
    - Sections: OnePage에서 기능단위로 구분하는 SectionComponent 집합
    - NotUseComponent: 나중에 쓰일수 있어서 남겨놓은 컴포넌트
    - common: header,main,footer 등 공통으로 동작하는 컴포넌트
    - lib: GA4등, 외부 api또는 라이브러리에서 제공하는 코드를 저장
    - modal: Modal창 컴포넌트
- assets: font파일, 이미지파일 모음
- api
  - client API 라우터 : 백엔드 서버를 내부망으로 돌려서 클라이언트 API를 호출해 백엔드 API를 웹프론트서버가 호출하게 동작

## 배포방법

netlify에서 main변경 감지되면 자동배포
build명령 쳐서 동작하는지 확인하고 배포할것.

(devserver 배포 이후에 추가 예정)

## 개발정보

- yarn dev => localhost:3000
- yarn start & => 80포트
