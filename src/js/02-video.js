import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timestamp = localStorage.getItem("timestamp");
if (timestamp !== null) {
  player.setCurrentTime(timestamp);
}

const callback = data => localStorage.setItem("timestamp", String(data.seconds));

player.on('timeupdate', throttle(callback, 1000));

