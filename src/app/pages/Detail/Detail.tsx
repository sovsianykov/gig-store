import React, {FC} from "react";
import PdfViewer from "../../Tabs/containers/PdfViewer/PdfViewer";
import { allSheetPDF } from "../../../assets/pdf/allSheetPDFpdf";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import {Box, Button} from "@mui/material";

const Detail:FC = () => {

  const { id } =  useParams()

  return (
    <Box display='flex' flexDirection='column'>
      <PdfViewer path={allSheetPDF[Number(id)-1].path} />
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
