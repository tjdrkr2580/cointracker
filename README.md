# Coin Tracker

---

![ezgif-5-660cd282a9.gif](Coin%20Tracker%202f7ed89e789f40e89d5187a3ef0634b8/ezgif-5-660cd282a9.gif)

<aside>
💡 1 ~ 100위 가상 화폐 시세 모니터링 웹 페이지

</aside>

## 파일 구조 📝

---

## 📂 Coin Tracker

```xml
- node_modules
    - react-router-dom
    - react-response
- components
    - CoinList.jsx
    - Footer.jsx
    - Header.jsx
    - Loading.jsx
    - Top.jsx
- src
	- App.jsx
	- index.js
	- global.js
	- App.css
- .gitignore
- package-lock.json
- package.json
- README.md
```

## 사용한 도구 ⛏

---

- React - `SPA가 가능한 JavaScript Framework`
- Styled-components - `컴포넌트 안에서 스타일링을 하게 해주는 라이브러리`
- React-responsive - `OS 설정에 따라 모드를 변형시키기 위함`
- API - `Coin Paprika`
- vercel - `나의 프로젝트를 무료로 배포할 수 있는 웹 페이지`
- git - `버전 관리`
- vscode - `소스 코드 편집기`

### CRA을 사용하여 제작한 프로젝트.

```xml
$ npx create-react-app .
```

### 프로젝트 실행

```xml
$ npm install
$ npm start
```

or

[vercel 페이지로 이동하기](http://cointracker-alpha.vercel.app)

## 배운 점 🤠

---

1. React-response를 통해 OS 테마에 따라 첫 접속 시에 다크모드, 라이트모드를 설정 가능!
2. Open API로부터 정보를 가져와서 꾸미는 것을 정말 재미있는 일이다!
3. JSON을 잘라냄으로써 받는 정보의 양을 한정시킬 수도 있다.
