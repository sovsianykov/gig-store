import React, {FC} from "react";
import PdfViewer from "../../Tabs/containers/PdfViewer/PdfViewer";
import { allSheetPDF } from "../../../assets/pdf/allSheetPDFpdf";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {Box, Button} from "@mui/material";

const Detail:FC = () => {
  const location = useLocation();
  const index = location.pathname.slice(location.pathname.length - 1);
  return (
    <Box display='flex' flexDirection='column'>
      <PdfViewer path={allSheetPDF[Number(index)-1].path} />
      <Link to={"/scores"}  style={{ alignSelf: "center" }}>
        <Button
          variant="contained"
          color="error"
        >
          BACK
        </Button>
      </Link>
    </Box>
  );
};

export default Detail;