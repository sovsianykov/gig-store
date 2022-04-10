import React from "react";
import MyList from "../../../shared/componens/MyList/MyList";
import allSheets from "../../../db/db.json";
import Page from "../../../shared/componens/Page/Page";

const Scores = () => {
  return (
    <Page  title={"scores"}>
      <MyList sheetsList={allSheets.pdf} add  />
    </Page>
  );
};

export default Scores;
