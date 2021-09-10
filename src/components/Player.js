import ReactAudioPlayer from 'react-audio-player';
import frameborder from 'react'
//


export default function Player() {
    return(
 <iframe src="https://app.kshost.com.br/player-barra01/12462/false" frameBorder="0" scrolling="no" width="231" height="73">
<ReactAudioPlayer

src="https://player-ssl.kshost.com.br:12462/live"
type="audio/mpeg"
autoPlay="true"
controls

/>
</iframe>



    )
}