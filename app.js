
document.addEventListener('DOMContentLoaded', run);

function run() {
  var splashContent = document.getElementById('ossb-spash-content');
  var contentDiv = document.getElementById('ossb-content');
  var scrollContainer = document.getElementById('scroll-container');
  var splashOffsetTop = splashContent.offsetTop;
  var splashHeight = splashContent.clientHeight;
  var threshold = splashHeight / 2;

  splashContent.style.opacity = '0.98';
  splashContent.style.transition = '0.33s';

  scrollContainer.addEventListener('scroll', (ev) => {
    var currOffset = contentDiv.getBoundingClientRect().top;

    if (currOffset <= splashOffsetTop + threshold) {
      splashContent.style.opacity = '0';
    } else {
      splashContent.style.opacity = '0.98';
    }

  })
}
