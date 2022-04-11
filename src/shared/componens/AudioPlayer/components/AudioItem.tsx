import React, { FunctionComponent, memo, useCallback, useState } from 'react';
import { Audio } from '../models';
import { Button, Grid } from '@mui/material';
import AudioTrack from '../AudioTrack';

interface Props {
  audioItem: Audio;
}

const AudioItem: FunctionComponent<Props> = ({ audioItem }) => {

  const [on, setOn] = useState<boolean>(true);
  const [track, setTrack] = useState(new AudioTrack(audioItem.src));

  const onPlayHandler = useCallback(async () => {
    await track.stop();
    setOn((on) => !on);
    if (on) {
      await track.playOn();
    } else {
      await track.stop();
      setTrack(new AudioTrack(audioItem.src));
    }
  }, [on, track, setTrack, audioItem.src]);

  return (
    <Grid item xs>
      <Button
        fullWidth
        variant="contained"
        color={on ? 'inherit' : 'error'}
        onClick={onPlayHandler}
      >
        {on ? audioItem.title : 'stop'}
      </Button>
    </Grid>
  );
};

export default memo(AudioItem);
