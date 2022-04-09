import React, { useCallback, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100wv",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const PdfViewer = ({ path }) => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);
  const changePage = useCallback((offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }, []);
  const changePageBack = useCallback(() => {
    changePage(-1);
  }, [changePage]);
  const changePageNext = useCallback(() => {
    changePage(+1);
  }, [changePage]);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box className={classes.root}>
          <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
            <Page height={500} pageNumber={pageNumber} />
          </Document>
        </Box>
      </Grid>
      <Grid item xs={12} alignItems="center">
        <ButtonGroup>
          {pageNumber > 1 && (
            <Button variant="text" color="error" onClick={changePageBack}>
              Previous Page{" "}
            </Button>
          )}
          {pageNumber < numPages && (
            <Button variant="text" color="error" onClick={changePageNext}>
              Next Page{" "}
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default PdfViewer;
