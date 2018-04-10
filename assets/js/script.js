$(document).ready( function() {
    document.querySelector('.scroll-indicator-wrapper').style.display = 'none';
	$( document ).scroll( function() {
		var scrollPosition = $( document ).scrollTop();
		if ( 991 < $(window).width() ) {
			if ( 700 > scrollPosition ) {
				scrollPosition = scrollPosition + 700;
			} else if ( 700 < scrollPosition ) {
				scrollPosition = scrollPosition + 400;
			}
			$( '#scrollIndicator' ).css( "top", scrollPosition + 'px' );
		} else {
			if ( 450 > scrollPosition ) {
				scrollPosition = scrollPosition + 392;
			} else {
				scrollPosition = scrollPosition + 150;
			}
			$( '#scrollIndicator' ).css( "top", scrollPosition + 'px' );
			$( 'section' ).each( function() {
				var sectionId = $( this ).attr( 'id' );
				var sectionTop =  $( this ).position().top;
				var sectionBottom = sectionTop + $( this ).outerHeight() + 300;
				if ( ( scrollPosition > sectionTop ) && ( scrollPosition < sectionBottom ) ) {
          if ( 'top' != sectionId ) {
            /*if ( 0 >= $( '#' + sectionId + ' .left-side .section-title-block .animation-text-wrapper' ).length ) {
              animBlockWrapper = '<div class="animation-wrapper"></div>';
              animTextBlockWrapper = '<div class="animation-text-wrapper"></div>';
              $( '#' + sectionId + ' .left-side .section-title-block' ).append( animTextBlockWrapper );
              $( '#' + sectionId + ' .left-side .section-title-block .animation-text-wrapper' ).load( 'animation/_' + sectionId + '/text/demo.html' );
              $( '#' + sectionId + ' .image-wrapper' ).append( animBlockWrapper );
              $( '#' + sectionId + ' .image-wrapper .animation-wrapper' ).load( 'animation/_' + sectionId + '/demo.html', function() {
                if ( 'AI' == sectionId ) {
                  $( '#' + sectionId + ' .image-wrapper .ai_label' ).show();
                }
              });
            }*/
          }
				} else {
					if ( 'top' != sectionId ) {
						if ( 0 < $( '#' + sectionId + ' .left-side .section-title-block .animation-text-wrapper' ).length ) {
							$( '#' + sectionId + ' .left-side .section-title-block .animation-text-wrapper' ).remove();
							$( '#' + sectionId + ' .image-wrapper .animation-wrapper' ).remove();
							if ( 'AI' == sectionId ) {
								$( '#' + sectionId  + ' .image-wrapper .ai_label' ).hide();
							}
						}
					}
				}
			});
		}
	});





	if (  992 < $( window ).width() ) {

		$( 'section .container' ).each( function() {
			var parentBlock = $( this ).parents( 'section' );
			var sideBlockHeight = $( this ).children( '.left-side' ).height();
			if ( parentBlock.hasClass( 'blockchain-block-wrapper' ) ) {
				sideBlockHeight = sideBlockHeight - 175;
			}
			sideBlockHeight = sideBlockHeight  + 'px';
			$( this ).children( '.right-side' ).css( "min-height", sideBlockHeight );
		});
	}
	if ( 991 < $( window ).width() ) {
		$( '.scrollsections' ).scrollSections( {
			createNavigation: false,
			navigation: false,
			before: function( $currentSection, $nextSection ) {
				$( '#scrollIndicator' ).removeClass( 'active' )
			},
			after: function( $currentSection, $previousSection ) {
        var sectionId = $currentSection[0].attributes.id.value;

        if(sectionId==='top'){
        	document.querySelector('.scroll-indicator-wrapper').style.display = 'none';
		}else {
            document.querySelector('.scroll-indicator-wrapper').style.display = 'block';
		}
        if(sectionId==='wizebox'){
        	document.getElementById('path').style.opacity = 1;
          new Vivus('path',
            {
              start: 'autostart',
              forceRender: false,
              dashGap: 0,
              //type: 'scenario-sync',
              duration: 150
            }
						,myCallback);
          function myCallback(){
            document.querySelector('.wizebox-ui').style.opacity = 1;
					}

				}else {
            document.querySelector('.wizebox-ui').style.opacity = 0;
		}
        if(sectionId==='wizebox-mini'){
          $('.wizebox-mini-image').fadeIn();
				}

				if(sectionId==='faq'){



        	if(!$('#faq').hasClass('active')){
            textTyping();
					}
        	$('#faq').addClass('active');

          $('#bgndVideo-video-faq').YTPPlay();
        }else {

          $('#bgndVideo-video-faq').YTPPause();
        }

        if(sectionId==='video-1'){
         // $('#bgndVideo-video-1').YTPPlay();
          document.querySelector('.btnPlayVideo').style.display = 'block';
        }else {
          $('#bgndVideo-video-1').YTPPause();
				}
				$( '#scrollIndicator' ).addClass( 'active' );
				if ( null != $previousSection ) {
					prevSectionId = $previousSection[0].attributes.id.value;
					$( '#' + prevSectionId + ' .left-side .section-title-block .animation-text-wrapper' ).remove();
					$( '#' + prevSectionId + ' .image-wrapper .animation-wrapper' ).remove();
					if ( 'AI' == prevSectionId ) {
						$( '#' + prevSectionId + ' .image-wrapper .ai_label' ).hide();
					}
				}
				var sectionId = $currentSection[0].attributes.id.value;
				$( '#' + sectionId + ' .left-side .section-title-block h2' ).hide();
				animBlockWrapper = '<div class="animation-wrapper"></div>';
				animTextBlockWrapper = '<div class="animation-text-wrapper"></div>';
				$( '#' + sectionId + ' .left-side .section-title-block' ).append( animTextBlockWrapper );
				$( '#' + sectionId + ' .left-side .section-title-block .animation-text-wrapper' ).load( 'animation/_' + sectionId + '/text/demo.html' );
				$( '#' + sectionId + ' .image-wrapper' ).append( animBlockWrapper );
				$( '#' + sectionId + ' .image-wrapper .animation-wrapper' ).load( 'animation/_' + sectionId + '/demo.html', function() {
					if ( 'AI' == sectionId ) {
						$( '#' + sectionId + ' .image-wrapper .ai_label' ).show();
					}
				});

			}
		});
	}
	{
		const items = Array.from( document.querySelectorAll( '.menu .menu__item' ) );

		class Item {
			constructor(el) {
				this.DOM = {};
				this.DOM.el = el;
				this.DOM.label = el.querySelector('.menu__item-label');
				charming(this.DOM.label);
				this.DOM.labelLetters = Array.from(this.DOM.label.querySelectorAll('span'));
				this.initEvents();
			}
			initEvents() {
				this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
					this.isActive = true;
					anime.remove(this.DOM.labelLetters);
					anime({
						targets: this.DOM.labelLetters,
						duration: 20,
						delay: (t,i) => (i+5)*30,
						easing: 'linear',
						opacity: [0,1]
					});	
				}, 50);

				this.mouseleaveFn = () => {
					clearTimeout(this.mouseTimeout);
					if( !this.isActive ) return;
					this.isActive = false;
				};

				this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
				this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
				this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
				this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
			}
		};

		items.forEach(item => new Item(item));
	};
	$('.right-menu').show();
	var rightMenuBtn = $( '#rightNavMenu' );
	if ( 0 < rightMenuBtn.length ) {
		rightMenuBtn.on( 'click', function() {
			$( this ).toggleClass( 'is-active' );
			$( this ).parent( '.nav-menu' ).children( '.menu' ).slideToggle();
		});
	}
	var leftMenuBtn = $( '#leftNavMenu' );
	if ( 0 < leftMenuBtn.length ) {
		leftMenuBtn.on( 'click', function() {
			$( this ).toggleClass( 'is-active' );
			$( this ).parent( '.nav-menu' ).children( '.menu' ).slideToggle();
		});
	}
	/*var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	var hamburgers = document.querySelectorAll(".hamburger");
	if (hamburgers.length > 0) {
		forEach(hamburgers, function(hamburger) {
			hamburger.addEventListener("click", function() {
				this.classList.toggle("is-active");
			}, false);
		});
    }*/













function textTyping() {
  $('.faq-section__item-title').each(function (i) {
    let text = $(this).text();
    $(this).before('<div class="typed-strings" id="typed-'+i+'"><p>'+text+'</p></div>');
    $(this).html('<span id="text-typed-'+i+'"></span>');

  });

  setTimeout(function () {

    for (let i = 0; i <  $('.faq-section__item-title').length;i++){
      setTimeout(function () {
        $('#typed-'+i).parent('.faq-section__item').css('opacity',1)
        setTimeout(function () {
          new Typed('#text-typed-'+i, {
            stringsElement: '#typed-'+i,
            cursorChar: ''
          });
        },500);
      },1200*i)
    }
  },500);
}

/*
if(window.outerWidth < 943){
  textTyping();
}
*/







  let togglesFunc = function () {




    let wrapper = $('.faq-section__items-wrappe'),
				item    = $('.faq-section__item'),
				title   = $('.faq-section__item-title'),
				info    = $('.faq-section__item-info');

    title.click(function () {
      let wrapper = $(this).parent(item);


      if(!wrapper.hasClass('active')){
        item.removeClass('active').find(info).slideUp();
        wrapper.addClass('active').find(info).slideDown();
      }else {
        wrapper.removeClass('active').find(info).slideUp();
      }

    });

  };
  togglesFunc();

  $('#bgndVideo-video-1,#bgndVideo-video-faq').YTPlayer();

  //$('#bgndVideo-video-1').YTPPlay();
	const inputStage3 = document.getElementById('stage-3');
	const line = document.getElementById('stage-3-line');
	const textLine = document.getElementById('percent-stage-3');

	line.style.width = inputStage3.value + '%';
  textLine.textContent = inputStage3.value + '%'


  document.querySelector('.btnPlayVideo').addEventListener('click',function () {
    this.style.display = 'none';
    $('#bgndVideo-video-1').YTPPlay();
  })
});