
//MADDIE SECTION

var result = 0;

$('#reset').on('click', function () {
  result = 0;
  $('#maddieTotal').html(result);
});

$('#m_add25').on('click', function () {
  result += 25;
  $('#maddieTotal').html(result);
});

$('#m_add10').on('click', function () {
 result += 10;
  $('#maddieTotal').html(result);
});

$('#m_sub10').on('click', function () {
  result -=10;
  $('#maddieTotal').html(result);
});

$('#m_sub25').on('click', function () {
  result -= 25;
  $('#maddieTotal').html(result);
});
