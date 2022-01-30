$(function () {
  $('#menu-dos').click(function () {
    $('.card').hide()
  })

  $('#menu-tres').mouseover(function () {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    $('.sidebar').css({ 'background-color': `#${randomColor}` })
  })

  $('#menu-cuatro').click(function () {
    $('.sidebar').text('Hola Mundo!')
  })

  $('.burguer').click(function () {
    $('.cards').hide()
    $('.ul-mobile').css({ display: 'flex' })
  })
})
