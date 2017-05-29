(function() {
  function playSong() {
    let audio = document.getElementsByClassName("two-of-us")[0];
    audio.play();
  }

  function setUpButtons() {
    $('.some-button').mouseover(function(){
      anime({
        targets: this,
        // left: '240px',
        // backgroundColor: '#FFF',
        borderRadius: 40,
        padding: 20,
      });
    });

    $('.some-button').mouseleave(function(){
      anime({
        targets: this,
        // left: '240px',
        // backgroundColor: '#FFF',
        borderRadius: 2,
        padding: 5,
      });
    });
  }

  function deleteAllThings() {
    anime({
      targets: '#links .link-one',
      opacity: [1,0]
    })
    anime({
      targets: '#links .link-two',
      opacity: [1,0]
    })
  }

  function runAnimations() {
    anime.timeline()
      .add({
        targets: '.quote .first',
        color: '#000000',
        opacity: [0,1],
        translateY: 400,
        duration: 2000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.quote .first',
        opacity: [1,0],
        translateY: 800,
        delay: 400,
        duration: 600,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '.quote .second',
        color: '#000000',
        opacity: [0,1],
        translateY: 300,
        duration: 2000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.quote .second',
        opacity: [1,0],
        translateY: 800,
        delay: 400,
        duration: 600,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '.quote .third',
        color: '#000000',
        opacity: [0,1],
        translateY: 200,
        duration: 2000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.quote .third',
        opacity: [1,0],
        translateY: 800,
        delay: 400,
        duration: 600,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '.quote .final',
        color: '#000000',
        opacity: [0,1],
        translateY: 100,
        duration: 2000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '#links .link-one',
        opacity: [0,1],
        translateX: 200,
        translateY: 500,
        easing: 'easeInOutQuad',
        duration: 1000
      })
      .add({
        targets: '#links .link-two',
        opacity: [0,1],
        translateX: 300,
        translateY: 500,
        duration: 1000,
        easing: 'easeInOutSine'
      });
  }

  window.onload = function(){
    deleteAllThings();
    playSong();

    $('#lineDrawing').fadeIn(4000, () => {
      $('#lineDrawing').fadeOut(4000, () => {
        runAnimations();
        setUpButtons();
      });
    });
  }
})();
