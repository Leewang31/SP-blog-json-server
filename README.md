# ✨SP-blog-json-server

## 웹 소개
이번 사이드 프로젝트는 개인 블로그입니다.
프로필을 볼수 있고, 프로필을 수정할 수 있고, 글 목록을 보고, 상세 글을 볼수 있으며, 글을 추가 삭제가 가능합니다.
새로 배운 기능을 최대한 사용하려고 했습니다.
사용된 기술은 아래 정리 하였습니다.

## json-server 라이브러리 사용
이번에 blog DB는 json-server 라이브러리 사용했습니다.

전역에 다음을 설치합니다.
```js
npm i -g json-server
```

data라는 폴더에 json파일을 만들어 서버에 옮기고 싶은 파일을 생성합니다
이후 다음 코드를 작성합니다
```js
cd data
json-server --watch data.json --port 3001
```

localhost:3001에 json이 적용된 서버가 열립니다.