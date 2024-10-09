# Search Book
> 리액트 기반 카카오 API를 사용한 개인 프로젝트   
> 개발기간
>  * 2024.08

<br />

## 배포 주소
https://febisthe.github.io/book/

<br/>

## 시작가이드

### Requirements
* react @18.2.0
* axios : @1.3.3

### Installation
~~~
$ git clone https://github.com/febisthe/book.git
$ cd book
$ npm install
$ npm start
~~~


<hr/>


## 기술

### Environment
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/javasciprt-F7DF1E?style=for-the-badge&logo=javasciprt&logoColor=black"> <img src="https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">


<hr />


## 프로젝트 구조

~~~
src
│
├── components // 공통 컴포넌트
│     ├── Footer.js
│     ├── Header.js
│     └── Main.js
├── css
│    ├── common.css
│    ├── font.css
│ 	 ├── layout.css
│	 ├── main.css
│	 ├── reset.css
│	 └── search.css
├── fonts
│	 └── woff, woff2 ...
├── imgage
│	 └── svg, png, jpg
├── route // 경로 컴포넌트
│    ├── Book.js
│    ├── Search.js
│	 └── App.js
├── until // 데이터 컴포넌트
│    ├── api.js
│	 └── Data.js
└── index.js
~~~

<hr/>


## 구현
### 카카오 API를 받아 책 검색하기
* 검색창과 검색어를 받을 `useState()`를 각각 만든다.
* `useEffect`를 사용해 검색어가 채워졌을 때, 채워진 값을 받아서 렌더링한다.
* 카카오에서 제공하는 메소드를 사용해 검색한 책 내용을 `async - await`를 사용해 받아온다.
* `map` 함수를 사용해 UI에 나타낸다.

<br />

### 작업일지
https://velog.io/@febisthe/%EC%B0%BD%EB%B9%84-%EC%B1%85%EA%B2%80%EC%83%89%EC%82%AC%EC%9D%B4%ED%8A%B8