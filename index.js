let solid = document.querySelector('.block-overlay1');
let content = document.querySelector('.block-content1');
let container = document.querySelector('.container1');

const blockReveal1 = (solid, content, container) => {

  let blockHeight = content.clientHeight;
  let blockWidth = content.clientWidth;

  solid.style.height = blockHeight + 'px';
  container.style.width = blockWidth + 'px';

  const solidAnimation1 = () => {
    
    var tl1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 700
      });
    tl1
      .add({
        targets: solid,
        width: blockWidth,
        complete: function (tl1) {
          solid.style.right = "0";
          content.style.opacity = "1";
        }

       })
       .add({
         targets: solid,
         width: '0'
       });
    }
  solidAnimation1();
};

blockReveal1(solid, content, container);

// --------------- 2

let solid2 = document.querySelector('.block-overlay2');
let content2 = document.querySelector('.block-content2');
let container2 = document.querySelector('.container2');

const blockReveal2 = (solid2, content2, container2) => {

  let blockHeight = content2.clientHeight;
  let blockWidth = content2.clientWidth;

  solid2.style.height = blockHeight + 'px';
  container2.style.width = blockWidth + 'px';

  const solidAnimation2 = () => {
    
    var tl2 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 650
      });
    tl2
      .add({
        targets: solid2,
        width: blockWidth,
        complete: function (tl2) {
          solid2.style.right = "0";
          content2.style.opacity = "1";
        }

       })
       .add({
         targets: solid2,
         width: '0'
       });
    }
  solidAnimation2();
};

blockReveal2(solid2, content2, container2);


// --------------- 3

let img = document.querySelector('.grid__hero__top');
let content3 = document.querySelector('.block-content3');
let btn = document.querySelector('.btnWrap');

const blockReveal3 = ( content3, btn ) => {

  const solidAnimation3 = () => {
    
    var tl3 = anime.timeline({
        easing: 'easeOutCubic',
        duration: 800
      });
    tl3
        .add({
          targets: content3,
          // delay: 100,
          opacity: 1,
        })
        .add({        
          targets: btn,
          // delay: 100,
          translateX: -5 + "rem",
          opacity: 1   
       })

   

        var tl4 = anime.timeline({
          easing: 'easeOutCubic',
          duration: 1500
        });


      tl4
 
          .add({
            targets: img,
            delay: 1000,
            opacity: 1,
            translateY: -5 + "rem",          
          });
    
    }
  solidAnimation3();
};

blockReveal3( content3, btn );