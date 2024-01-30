      // 이벤트 슬라이드 구현
      const eslide = $('.es_wrap');
      const es_lbtn = $('.event > i.fa-angle-left');
      const es_rbtn = $('.event > i.fa-angle-right');


      // 1번 슬라이드의 앞에 3번을 배치한다.
      $('.es_wrap > div:last-child').insertBefore('.es_wrap > div:first-child');

      //왼쪽으로 1200픽셀 이동하여 1번이 가운데 배치가 되게 한다.
      eslide.css('margin-left','-1200px');

      // moveleft 함수
      function moveLeft(){
        eslide.animate({'margin-left':'-2400px'},500,function(){
          $('.es_wrap > div:first-child').insertAfter('.es_wrap > div:last-child');
          eslide.css('margin-left','-1200px');
        });
      }
      // 시간객체를 사용하여 4초마다 움직이도록 한다.
      let Timer2 = setInterval(moveLeft, 4000);

      // moveright 함수
      function moveRight(){
        eslide.animate({'margin-left':'0px'},500,function(){
          $('.es_wrap > div:last-child').insertBefore('.es_wrap > div:first-child');
          eslide.css('margin-left','-1200px');
        });
      }

        //좌측버튼 클릭시
        es_lbtn.click(function(){
          clearInterval(Timer2);
          moveLeft();
        });

        //좌측버튼 클릭시
        es_rbtn.click(function(){
          clearInterval(Timer2);
          moveRight();
        });

        //좌, 우버튼 마우스 아웃시 다시 시간을 생성해서 움직이게
        $('.event > i.fas').mouseleave(function(){
          Timer2 = setInterval(moveLeft,4000);
        });
