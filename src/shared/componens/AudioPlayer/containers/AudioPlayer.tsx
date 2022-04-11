import React, {FunctionComponent, memo} from 'react';
import { Grid } from '@mui/material';
import { Audio } from '../models';
import AudioItem from '../components/AudioItem';

interface AudioPlayerProps {
  audioItems: Audio[];
}
const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({ audioItems }) => {

  return (
    <Grid container spacing={1} flexDirection='column' maxWidth={450}>
      {audioItems.map((audioItem) => (
        <AudioItem audioItem={audioItem} key={audioItem.id} />
      ))}
    </Grid>
  );
};

export default memo(AudioPlayer);
