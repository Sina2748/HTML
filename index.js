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
        duration: 1000
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
        duration: 750
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