window.App = {
  initialize: function (context) {
    App.ceremonyPhotos = JSON.parse(context.ceremony);
    App.partyPhotos = JSON.parse(context.party);
    App.gettingReady = JSON.parse(context.getting_ready);
    App.captainsCove = JSON.parse(context.captains_cove);
    App.sayings = [
      'How much fun we had :)',
      'What an amazing wedding it was.',
      'The amazing day we had.'
    ];
    App.BEGINNING_PAGE = '.container.beginning';
  },

  runApplication: function(){
    this.createInitialPage();
  },

  audio() {
    return document.getElementsByClassName("two-of-us")[0];
  },

  playSong() {
    this.audio().play();
  },

  stopSong() {
    this.audio().pause();
  },

  createInitialPage() {
    this.deleteAllThings();
    this.playSong();

    $('#lineDrawing').fadeIn(4000, () => {
      $('#lineDrawing').fadeOut(4000, () => {
        this.runAnimations();
        this.setUpButtons();
      });
    });
  },

  transitionTo(elementToFade, transitionInto) {
    let randomSaying = this.sayings[Math.floor(Math.random()*this.sayings.length)];
    $('h1.saying').html(`${randomSaying}`);

    anime.timeline()
      .add({
        targets: elementToFade,
        opacity: [1,0],
        easing: 'easeInOutQuad',
        duration: 500
      })
      .add({
        targets: '.container.saying h1.pre',
        opacity: [0,1],
        translateY: 400,
        easing: 'easeInOutSine',
        duration: 2000
      })
      .add({
        targets: '.container.saying h1.saying',
        opacity: [0,1],
        translateY: 400,
        easing: 'easeInOutSine',
        duration: 2000
      })
      .add({
        targets: '.container.saying',
        opacity: [1,0],
        easing: 'easeInOutSine',
        delay: 500,
        duration: 2000
      })
      .add({
        targets: transitionInto,
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration: 500
      });
  },

  backToBeginning(elementToFade) {
    this.transitionTo(elementToFade, this.BEGINNING_PAGE)
  },

  createGallery() {
    this.transitionTo(this.BEGINNING_PAGE, '.container.gallery');

    $('.all-images').html(
      `<div class="images">
      </div>`
    );

    let timeline = anime.timeline({ autoplay: false });

    this.ceremonyPhotos.forEach((photo, index) => {
      let fileName = photo.replace('app/', '');
      fileName = fileName.replace('/images', '');
      $('.images').append(`
          <div class="image-with-text image-${index}">
            <div class="image-number-${index}">
              <img src="${fileName}"/>
            </div>
            <p class="image-${index}">This is some text</p>
          </div>
      `);

      anime({
        targets: [`image-number-${index}`, `p.image-${index}`],
        opacity: [1,0],
      });

      timeline
      .add({
        targets: `.image-number-${index}`,
        translateX: 1200,
        opacity: [0,1],
        easing: 'easeInOutSine',
        duration: 2000,
      })
      .add({
        targets: `p.image-${index}`,
        translateX: 1200,
        opacity: [0,1],
        easing: 'easeInOutSine',
        duration: 2000,
      })
      .add({
        targets: `.image-with-text.image-${index}`,
        opacity: [1,0],
        easing: 'easeInOutQuad',
        duration: 2000,
        delay: 1000,
        complete: function() {
          $(`.image-with-text.image-${index}`).remove();
        }
      })
    });

    setTimeout(() => timeline.play(), 3000);

    $('.back-to-beginning').on('click', (() => {
      $('.all-images').html('');
      this.backToBeginning('.container.gallery');
    }));
  },

  createVideo() {
    this.stopSong();
    this.transitionTo(this.BEGINNING_PAGE, '.container.video');
    $('.video-iframe').html(`<iframe width="854" height="480" src="https://www.youtube.com/embed/fhaOX31jjUo" frameborder="0" allowfullscreen>
    </iframe>`);

    $('.back-to-beginning').on('click', (() => {
      $('.video-iframe').html('');
      this.playSong();
      this.backToBeginning('.container.video');
    }));
  },

  setUpButtons() {
    ['video-button', 'gallery-button'].forEach((buttonElement) => {
      $(`.${buttonElement}`).mouseover(function(){
        anime({
          targets: this,
          borderRadius: 20,
          easing: 'easeInOutSine',
          duration: 100,
          padding: 10,
        });
      });

      $(`.${buttonElement}`).mouseleave(function(){
        anime({
          targets: this,
          borderRadius: 2,
          easing: 'easeInOutSine',
          duration: 100,
          padding: 5,
        });
      });
    })

    $('.gallery-button').on('click', ((e) => {
      e.preventDefault();
      this.createGallery();
    }));

    $('.video-button').on('click', ((e) => {
      e.preventDefault();
      this.createVideo();
    }));
  },

  deleteAllThings() {
    anime({
      targets: '.container.gallery',
      opacity: [1,0]
    })
    anime({
      targets: '.container.video',
      opacity: [1,0]
    })
    anime({
      targets: '.container.saying',
      opacity: [1,0]
    })
    anime({
      targets: '#links .link-one',
      opacity: [1,0]
    })
    anime({
      targets: '#links .link-two',
      opacity: [1,0]
    })
    anime({
      targets: ['.quote .first', '.quote .second', '.quote .third', '.quote .final'],
      opacity: [1,0]
    })
  },

  runAnimations() {
    anime.timeline()
      // .add({
      //   targets: '.quote .first',
      //   opacity: [0,1],
      //   translateY: 400,
      //   duration: 2000,
      //   easing: 'easeInOutSine'
      // })
      // .add({
      //   targets: '.quote .first',
      //   opacity: [1,0],
      //   translateY: 800,
      //   delay: 400,
      //   duration: 600,
      //   easing: 'easeInOutQuad'
      // })
      // .add({
      //   targets: '.quote .second',
      //   opacity: [0,1],
      //   translateY: 300,
      //   duration: 2000,
      //   easing: 'easeInOutSine'
      // })
      // .add({
      //   targets: '.quote .second',
      //   opacity: [1,0],
      //   translateY: 800,
      //   delay: 400,
      //   duration: 600,
      //   easing: 'easeInOutQuad'
      // })
      // .add({
      //   targets: '.quote .third',
      //   opacity: [0,1],
      //   translateY: 200,
      //   duration: 2000,
      //   easing: 'easeInOutSine'
      // })
      // .add({
      //   targets: '.quote .third',
      //   opacity: [1,0],
      //   translateY: 800,
      //   delay: 400,
      //   duration: 600,
      //   easing: 'easeInOutQuad'
      // })
      .add({
        targets: '.quote .final',
        opacity: [0,1],
        translateY: 100,
        duration: 2000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '#links .link-one',
        opacity: [0,1],
        translateX: 200,
        translateY: 300,
        easing: 'easeInOutQuad',
        duration: 1000
      })
      .add({
        targets: '#links .link-two',
        opacity: [0,1],
        translateX: 300,
        translateY: 300,
        duration: 1000,
        easing: 'easeInOutSine'
      });
  }
};
