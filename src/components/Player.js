import ReactAudioPlayer from 'react-audio-player';
//


export default function Player() {
    return(
<ReactAudioPlayer
  src="https://player-ssl.kshost.com.br:12462/live"
  type="audio/mpeg"
  autoPlay="true"
  controls
  
/>



    )
}