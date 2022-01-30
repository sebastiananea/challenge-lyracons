$(function () {
  $('#menu-dos').click(function () {
    $('.card').hide()
  })

  $('#menu-tres').mouseover(function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    $('.sidebar').css({ 'background-color': `#${randomColor}` })
  })

  $('#menu-cuatro').click(function () {
    $('.sidebar').text('Hola Mundo!')
  })

  let isFlex = false
  $('.burguer').click(function () {
    $('.cards').toggle()
    isFlex = !isFlex
    $('.ul-mobile').css({ display: isFlex ? 'flex' : 'none' })
  })
})
