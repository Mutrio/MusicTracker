//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) { //min~max 범위
    //toFixed()를 통해 반환된 문자 데이터를,
    //parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  
  function floatingCircle(item, delayAfter) {
    gsap.to(
      item, //선택자
      random(1.5, 2.5), //1.5~2.5초 사이의 랜덤한 애니메이션 동작 시간
      {
        delay: random(0, delayAfter), //몇초 뒤에 애니메이션을 실행, 지연 시간 설정
        y: random(10,25), //transform: translateY(수치)와 같음. 수직으로 움직이는 크기
        repeat: -1, //몇 번 반복하는지를 설정, -1은 무한 반복.
        yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생-위아래 움직임
        ease: Power1.easeInOut //easing 함수 적용
      }
    );
  }
  
  floatingCircle('.happy', .5)
  floatingCircle('.sad', 1)
  floatingCircle('.angry', 1.5)
  floatingCircle('.comfortable', 1)
  floatingCircle('.cheerful', 1)