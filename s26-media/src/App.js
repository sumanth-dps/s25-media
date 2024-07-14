import "./App.css";
import gangleader from "./images/gangleader.jpg";
import Hoyna_Hoyna from "./audio/Hoyna_Hoyna.mp3";
import Hoyna_Hoyna_song from "./video/Hoyna_Hoyna_song.mp4";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Nani's Gangleader</h1>
      <img
        className="image"
        src="https://services.brninfotech.com/tws/media2/posters/gangLeader.jpg"
        alt="image"
      ></img>
      <img className="image" src="./images/gangleader2.jpeg"></img>
      <img className="image" src={gangleader}></img>
      <audio
        src="https://services.brninfotech.com/tws/media2/songs/Gang Leader/04 - Gangu Leader.mp3"
        controls
      ></audio>
      <audio src={Hoyna_Hoyna} controls></audio>
      <audio
        src="./audio/Ninnu_Chuse_Anandamlo.mp3"
        controls
        autoPlay
        loop
      ></audio>
      <hr></hr>
      <video
        className="video"
        src="https://services.brninfotech.com/tws/media2/trailers/gangLeader.mp4"
        controls
        muted
        autoPlay
        loop
      ></video>
      <video
        className="video"
        src="./video/Ninnu_Chuse_Anandamlo_Video.mp4"
        controls
        muted
        autoPlay
        loop
      ></video>

      <video
        className="video"
        src={Hoyna_Hoyna_song}
        controls
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
}

export default App;
