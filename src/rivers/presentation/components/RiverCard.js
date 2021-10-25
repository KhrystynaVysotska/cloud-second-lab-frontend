import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RiverCardStyled from "../../../styles/rivers/components/RiverCard.styled";
import RiverEditForm from "./forms/RiverEditForm";

export default function RiverCard({ river, onDelete }) {
  const [showEditForm, setShowEditForm] = React.useState(false);

  const editRiverHandler = (e) => {
    e.stopPropagation();
    setShowEditForm(true);
  };

  return (
    <>
      <RiverCardStyled>
        <Card
          style={{
            borderRadius: "10px",
            boxShadow: "0px 0px 15px -4px rgba(110, 155, 189, 0.2)",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={river.image_url}
              alt="river image"
            />
            <CardContent>
              <div className="row">
                <p className="name">{river.name}</p>
                <div className="icons">
                  <EditOutlinedIcon
                    fontSize="small"
                    onClick={editRiverHandler}
                  />
                  <DeleteOutlineOutlinedIcon
                    fontSize="small"
                    onClick={(e) => onDelete(e, river.name, river.id)}
                  />
                </div>
              </div>
              <p className="length">
                Довжина:
                <span>{river.length_in_km} км</span>
              </p>
              <p className="basin_area">
                Площа басейну:
                <span> {river.basin_area_in_sq_km} км²</span>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </RiverCardStyled>
      <RiverEditForm
        river={river}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
      />
    </>
  );
}
