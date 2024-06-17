// football
// responsive
var videoBg = document.querySelector('.football-section');
var video = videoBg.querySelector('video');

// check if browser supports the video element
if (typeof video.canPlayType === 'function' && video.canPlayType('video/mp4') !== '') {
  // video is supported, do nothing
} else {
  // video is not supported, provide fallback option
  var fallbackImg = document.createElement('img');
  fallbackImg.src = 'path/to/fallback-image.jpg';
  fallbackImg.alt = '';
  fallbackImg.style.width = '100%';
  fallbackImg.style.height = '100%';
  videoBg.style.background = 'black'; // set a black background for consistency
  videoBg.appendChild(fallbackImg);
}
