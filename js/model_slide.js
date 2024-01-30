$(document).ready(function(){
    // 메인페이지 모달띄우기
    let popup = `
      <div class="p_modal">
        <div class='banner'>
          <a href="#" title="">
            <img src="./images/popup.png" alt="팝업이미지">
          </a>
          <input type="checkbox" id="ch">
          
          <label for="ch">오늘 하루 열지 않음</label>
          <input type="button" value="닫기" id="c_btn">

        </div>
      </div>
    `
    $('body').append(popup);

    //현재 브라우저에 쿠키 popup의 값이 none이면 팝업을 나오지 않게 한다.
    if($.cookie('popup')=='none'){
      $('.p_modal').hide();
    }

    //체크박스 변수
    let $ex = $('.p_modal #ch');
    //체크박스에 사용자가 체크를 했는지 안했는지 확인하기 위한 함수를 작성
    function closePopup(){
      if($ex.is(':checked')){ //체크박스에 체크되었다면
        $.cookie('popup', 'none', {expires:1, path:'/'});
      }
      $('.p_modal').hide();//쿠키를 생성하고 종료한다.
    }

    //닫기 버튼 클릭시 해당함수를 호출하여 모달윈도 닫기
    $('.p_modal #c_btn').click(function(){
      closePopup();
    });
});