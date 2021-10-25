import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadCardStyled from "../../../styles/common/components/UploadCard.styled";

export default function UploadCard({ title }) {
  return (
    <UploadCardStyled>
      <div className="dashed-border">
        <CloudUploadIcon style={{ fontSize: "50px", color: "#909398" }} />
        <p className="title">{title}</p>
      </div>
    </UploadCardStyled>
  );
}
