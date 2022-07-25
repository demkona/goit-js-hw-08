import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

let time = localStorage.getItem("videoplayer-current-time") || 0;

player.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", data.seconds)
}
    , 1000));

player.setCurrentTime(time);


