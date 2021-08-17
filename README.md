# 프리온보딩 assignment6 - [솔라커넥트]
<br>

## 1. 구현 사항
- 소팅 기능을 가진 서비스
- 숫자를 스트링으로 입력 받고, 버튼을 누르면 결과를 표시
- 세부 구현 조건
  - 타이머: 한국 표준시 기준으로 날짜 및 시각을 KR / US 지역시간 표기법으로 나타냄
  - 입력: "숫자,숫자.." 형태로 사용자 입력을 받고, 잘못된 형식의 입력데이터는 예외 처리함
  - 시작: 버튼을 누르면 소팅 시작하고 오름차순 소팅 결과는 즉시, 내림차순 소팅 결과는 3초 후 노출함
  - 소팅 알고리즘은 내장 메소드 사용하지 않고 직접 구현함
<br>

## 2. 배포 주소
https://vigilant-lichterman-07f660.netlify.app/

<br>

## 3. 설치 및 시작하는 법
이 프로젝트는 Create React App으로 생성되었습니다.
```
npm i
```
프로젝트에 필요한 npm packages, node_modules를 다운로드합니다
```
npm run start
```
개발모드로 웹 환경을 시작하는 명령어입니다.
```
npm run build
```
빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다. (cra 기본설정)

<br>


## 4. 팀원별 과제 구현 파트
|이름|구현파트|
|-----|-------------------------------------|
|김준영|quicksort 알고리즘 구현,  Sort 컴포넌트 구현|
|서희영|Timer 컴포넌트 구현, css|

<br>


## 5. 참고
- 정렬 알고리즘 : https://im-developer.tistory.com/135
- Date 객체 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
- 자바스크립트에서 타임존 다루기 : https://meetup.toast.com/posts/125
- 현재 시간을 항상 한국 날짜, 시간으로 표시하기 : https://hianna.tistory.com/451
<br>
<br>
