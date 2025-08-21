# vite-react-typscript 생성 방법

npm create vite@latest 이걸 입력하면
프로젝트 명은 반드시 앞글자가 소문자로 시작해야한다
그리고 한글은 x
ex) Project name:
vite-project(이름은 자신마음대로 변경) 이런형식으로 작성

select a framework에서는
react선택

select a variant에서는
typescript선택

그다음 생성한 폴더 vite-project 로 이동후 npm i 를 한다

vite 포트 번호는 5173번이다

# vite 실행 명령어

npm run dev

# vite 에서 tailwindcss 추가 방법

npm i tailwindcss @tailwindcss/vite 설치후

vite.config.ts에서

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
});

이렇게 plugins에다가 추가해주면 된다

그리고 index.css파일 내용을 싹다 지워준다
그런다음 @import 'tailwindcss';를 추가해준다

tailwind는 태그가 중요한게 아니라
오직 클래스명이 중요하다

# react-router추가 = 브라우저 주소 기반으로 라우팅 한다는 의미다

npm i react-router

# 실행 방법

npm run dev

# 단축키

ffc는 빈 함수 생성
함수명 작성후 바로 esc 눌러서 export 부분하고 끊어준다
