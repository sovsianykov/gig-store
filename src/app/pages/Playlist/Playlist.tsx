import React from 'react';
import Page from "../../../shared/componens/Page/Page";
import PlaylistDropDown from "../../../shared/componens/SheetsPlayListDroopDown/PlaylistDropDown";

const Playlist = () => {
    return (
        <Page title={'playlist'}>
          <PlaylistDropDown/>  
        </Page>
    );
};

export default Playlist;