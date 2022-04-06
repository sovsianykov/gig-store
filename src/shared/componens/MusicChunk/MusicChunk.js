import * as React from 'react';
import Chip from '@mui/material/Chip';
import {Link} from 'react-router-dom'

const MusicChunk =({title,id})=> {

    return (
            <Link to={`${id}`}>
                <Chip label={title} variant="outlined"   />
            </Link>
    );
}

export default MusicChunk