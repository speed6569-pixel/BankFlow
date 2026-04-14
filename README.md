# BankFlow

> **신뢰감 있는 디지털 뱅킹 경험을 시연하기 위한 금융 서비스 MVP**  
> AWS 아키텍처 이해도, AI 상담 UX 설계 능력, 실행 가능한 프론트엔드 구현을 함께 보여주기 위한 프로젝트입니다.

BankFlow는 실제 금융 코어 시스템 전체를 구현하는 대신, 사용자가 체감하는 핵심 금융 서비스 흐름을 **짧은 기간 안에 설득력 있게 시연**할 수 있도록 설계한 데모 웹사이트입니다.

핵심 목표는 아래 4가지입니다.

- **현실적인 MVP 범위 정의**: 1주 기준으로 구현 가능한 화면과 기능 구성
- **AWS 아키텍처 설명력 확보**: 인증, API, 데이터, AI를 분리한 구조 제시
- **AI 리소스 활용 시연**: Amazon Bedrock 기반 금융 상담 UX 설계
- **실행 가능한 데모 제공**: 로그인, 대시보드, 상담, 이체 흐름을 실제로 동작하게 구현

---

## 주요 구현 기능

### 1) 메인 페이지
- 서비스 개요 및 시연 포인트 소개
- AWS 리소스 구성 요약
- 대표 금융상품 미리보기
- 은행 서비스 톤에 맞춘 안정적인 비주얼 구성

### 2) 로그인 페이지
- 데모 계정 기반 로그인 UI
- Amazon Cognito 연동을 가정한 구조 설명
- 입력값 검증 및 오류 메시지 표시
- localStorage 기반 세션 유지
- 보호 페이지 접근 제어

### 3) 사용자 대시보드
- 총 자산, 소비, AI 추천 점수, 예상 현금 흐름 표시
- 최근 거래 내역 요약
- AI 브리핑 및 추천 액션 제공

### 4) 금융상품 소개
- 입출금 상품
- 적금 상품
- 대출 상담 상품
- 상품별 특징과 시연 포인트 정리

### 5) AI 상담 챗봇
- 빠른 질문 버튼 제공
- 소비 분석 / 저축 추천 / 대출 상담 시나리오 분기
- 응답 생성 중 상태 표시
- 상담 유형 라벨 표시
- 추천 근거 / 분석 기준 표시
- Bedrock 연동을 가정한 구조 설명

### 6) 이체 시뮬레이션
- 출금 계좌, 수취인, 금액, 메모 입력
- 최소 금액 및 잔액 부족 검증
- **입력 → 확인 → 완료** 3단계 흐름
- 거래 번호, 완료 시각이 포함된 완료 화면 제공

---

## 데모 계정

발표 및 시연용 계정은 아래와 같습니다.

- **ID**: `demo@bankflow.ai`
- **PW**: `BankFlow!2026`

로그인 후 접근 가능한 보호 페이지:

- `/dashboard`
- `/ai-chat`
- `/transfer`

비로그인 상태에서 보호 페이지 접근 시 `/login`으로 이동합니다.

---

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **State / UI**: React Client Components, localStorage 기반 데모 세션
- **Data**: 더미 데이터 기반 렌더링
- **Architecture**: AWS 중심 설계
- **AI**: Amazon Bedrock 연동 가정, 현재는 모의 응답 기반 UI 구현

---

## 시스템 아키텍처

```mermaid
flowchart LR
    U[사용자 브라우저] --> C[CloudFront]
    C --> F[Next.js Frontend]
    F --> A[Amazon Cognito]
    F --> G[API Gateway]
    G --> L[Lambda]
    L --> D[DynamoDB]
    L --> S[S3]
    L --> B[Amazon Bedrock]
    L --> W[CloudWatch]
```

### 구성 요약

- **CloudFront / Route 53**: 도메인 연결 및 프론트엔드 배포 진입점
- **Next.js Frontend**: 사용자 화면 렌더링
- **Amazon Cognito**: 로그인/인증 처리 가정
- **API Gateway**: 프론트엔드 요청 진입점
- **AWS Lambda**: 비즈니스 로직 처리
- **Amazon DynamoDB**: 사용자 / 거래 더미 데이터 저장
- **Amazon S3**: 정적 자산 및 리포트 저장
- **Amazon Bedrock**: 금융 상담 응답 생성
- **Amazon CloudWatch**: 로그 및 오류 추적

---

## 주요 사용자 흐름

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant FE as Frontend
    participant AU as Auth Session
    participant API as API Layer
    participant AI as AI / Data Layer

    U->>FE: 로그인 페이지 접속
    FE->>AU: 데모 계정 검증
    AU-->>FE: 세션 저장
    U->>FE: 대시보드 접근
    FE-->>U: 자산/거래/AI 브리핑 표시
    U->>FE: AI 질문 입력
    FE->>API: 상담 요청 전송
    API->>AI: Bedrock 연동 가정 응답 생성
    AI-->>FE: 상담 유형 + 추천 근거 반환
    FE-->>U: AI 상담 결과 표시
    U->>FE: 이체 정보 입력
    FE-->>U: 확인 단계 표시
    U->>FE: 이체 실행
    FE-->>U: 완료 화면 및 거래 번호 표시
```

### 화면별 동작 흐름

#### 로그인
1. 사용자가 로그인 페이지 접속
2. 데모 계정 정보 입력
3. 입력값 검증 및 로그인 처리
4. 성공 시 세션 저장 후 보호 페이지 접근 가능

#### 대시보드
1. 로그인된 사용자가 대시보드 접근
2. 자산 요약, 거래 내역, AI 브리핑 확인
3. AI 상담 또는 이체 시뮬레이션으로 이동

#### AI 챗봇
1. 사용자가 질문 입력 또는 빠른 질문 선택
2. 질문 의도에 따라 소비 분석 / 저축 추천 / 대출 상담 / 일반 안내로 분기
3. 상담 유형과 추천 근거를 함께 표시
4. 실제 구조에서는 API Gateway, Lambda, Bedrock으로 확장 가능

#### 이체 시뮬레이션
1. 계좌, 수취인, 금액, 메모 입력
2. 최소 금액과 잔액 검증 수행
3. 확인 단계에서 금액, 예상 잔액, 수수료 확인
4. 완료 단계에서 거래 번호와 결과 표시

---

## 페이지 구성

- `/` 메인 페이지
- `/login` 로그인
- `/dashboard` 사용자 대시보드 (보호 페이지)
- `/products` 금융상품 소개
- `/ai-chat` AI 챗봇 (보호 페이지)
- `/transfer` 이체 시뮬레이션 (보호 페이지)

---

## 로컬 실행 방법

### 개발 서버
```bash
npm install
npm run dev
```

### 발표 / 시연용 권장 실행
```bash
npm install
npm run build
npm run start
```

기본 실행 주소:
- `http://localhost:3000`

> 참고: 시연 환경에서는 `next dev`보다 `next start`가 더 안정적입니다.

---

## 프로젝트 구조

```bash
BankFlow/
├─ docs/
│  ├─ project-overview.md
│  ├─ aws-architecture.md
│  ├─ ai-features.md
│  └─ test-report.md
├─ src/
│  ├─ app/
│  │  ├─ ai-chat/
│  │  ├─ dashboard/
│  │  ├─ login/
│  │  ├─ products/
│  │  ├─ transfer/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ ai-chat-panel.tsx
│  │  ├─ auth-provider.tsx
│  │  ├─ dashboard-card.tsx
│  │  ├─ login-form.tsx
│  │  ├─ protected-route.tsx
│  │  ├─ site-header.tsx
│  │  └─ transfer-simulator.tsx
│  └─ data/
│     ├─ auth.ts
│     └─ demo.ts
├─ package.json
└─ README.md
```

---

## 문서

- [`docs/project-overview.md`](./docs/project-overview.md)
- [`docs/aws-architecture.md`](./docs/aws-architecture.md)
- [`docs/ai-features.md`](./docs/ai-features.md)
- [`docs/test-report.md`](./docs/test-report.md)

---

## 테스트 및 검증 결과

실행 및 검증에 사용한 기본 명령어는 아래와 같습니다.

```bash
npm install
npm run lint
npm run build
```

추가로 시연 안정성 확인을 위해 아래 실행 방식도 확인했습니다.

```bash
npm run start
```

### 확인 항목
- 메인 페이지 렌더링
- 로그인 입력 검증 및 세션 유지
- 보호 페이지 접근 제어
- 대시보드 데이터 렌더링
- 금융상품 카드 렌더링
- AI 챗봇의 상담 유형 / 추천 근거 표시
- 이체 시뮬레이션의 입력 / 확인 / 완료 흐름

### 결과
- `npm install`: 성공
- `npm run lint`: 성공
- `npm run build`: 성공
- `npm run start`: 실행 가능

---

## 발표 시 강조 포인트

1. **왜 1주 MVP 범위로 축소했는지** 먼저 설명
2. **AWS 리소스 연결 구조**를 README와 문서로 설명
3. **로그인 후 보호 페이지 접근 흐름**으로 서비스 구조 이해도 강조
4. **AI 챗봇 화면**에서 상담 유형과 추천 근거를 함께 시연
5. **이체 시뮬레이션**의 확인 / 완료 단계로 구현 안정성 강조

---

## 향후 개선 방향

- 실제 Amazon Cognito 로그인 연동
- Lambda + Bedrock 실제 API 연결
- 거래내역 조회 API 추가
- 모바일 화면 최적화
- 관리자 모니터링 화면 확장
- WAF, Guardrails, Alarm 등 운영 / 보안 구조 보강

---

## 왜 이 README를 이렇게 구성했는가

참고한 `Docker-Advanced-WebRTC-Vue` 저장소처럼, 단순 소개문이 아니라 아래를 한 번에 볼 수 있도록 정리했습니다.

- 프로젝트 목적
- 핵심 기능
- 아키텍처 흐름
- 사용자 동작 흐름
- 실행 방법
- 프로젝트 구조
- 테스트 및 발표 포인트

즉, **코드를 보기 전에도 프로젝트 전체 그림이 잡히는 README**를 목표로 구성했습니다.
