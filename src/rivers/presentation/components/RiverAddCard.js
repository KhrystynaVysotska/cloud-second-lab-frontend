import React from "react";
import RiverAddCardStyled from "../../../styles/rivers/components/RiverAddCard.styled";
import AddIcon from "@mui/icons-material/Add";

export default function RiverAddCard({ onClick }) {
  return (
    <RiverAddCardStyled onClick={onClick}>
      <div className="dashed-border">
        <AddIcon style={{ fontSize: "60px", color: "#909398" }} />
        <p className="add-river">Додати річку</p>
      </div>
    </RiverAddCardStyled>
  );
}
