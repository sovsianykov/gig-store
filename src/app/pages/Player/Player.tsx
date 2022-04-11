import React from "react";
import Page from "../../../shared/componens/Page/Page";
import AudioPlayer from "../../../shared/componens/AudioPlayer/containers/AudioPlayer";
import { audioPlaylist } from "../../../assets/mp3/audioplaylist";

const Player = () => {
  return (
    <Page title={"diana songs"}>
      <AudioPlayer audioItems={audioPlaylist} />
    </Page>
  );
};

export default Player;
