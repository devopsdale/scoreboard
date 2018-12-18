
//MADDIE SECTION

var result = 0;

$('#m_reset').on('click', function () {
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



//julian section


$('#j_reset').on('click', function () {
  result = 0;
  $('#julianTotal').html(result);
});

$('#j_add25').on('click', function () {
  result += 25;
  $('#julianTotal').html(result);
});

$('#j_add10').on('click', function () {
 result += 10;
  $('#julianTotal').html(result);
});

$('#j_sub10').on('click', function () {
  result -=10;
  $('#julianTotal').html(result);
});

$('#j_sub25').on('click', function () {
  result -= 25;
  $('#julianTotal').html(result);
});
