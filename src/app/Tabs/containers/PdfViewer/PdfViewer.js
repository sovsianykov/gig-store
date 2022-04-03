import React, { useCallback, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import purpleLight from "../../../../assets/pdf/Purple_light.pdf";
import { Button, ButtonGroup, Grid } from "@mui/material";

const PdfViewer = () => {
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
        <Document file={purpleLight} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height={600} pageNumber={pageNumber} />
        </Document>
      </Grid>
      <Grid item xs={12} alignItems="center">
        <p>
          {" "}
          Page {pageNumber} of {numPages}
        </p>
        <ButtonGroup>
          {pageNumber > 1 && (
            <Button variant="text" color="inherit" onClick={changePageBack}>
              Previous Page{" "}
            </Button>
          )}
          {pageNumber < numPages && (
            <Button variant="text" color="inherit" onClick={changePageNext}>
              Next Page{" "}
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default PdfViewer;
