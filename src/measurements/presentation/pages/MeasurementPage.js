import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@mui/x-data-grid";
import {
  deleteDbMeasurement,
  getDbMeasurementsBySensorId,
} from "../../api/measurementDbApi";
import MeasurementPageStyled from "../../../styles/measurements/pages/MeasurementPage.styled";
import MeasurementEditForm from "../components/MeasurementEditForm";
import MeasurementAddForm from "../components/MeasurementAddForm";
import ReloadIconStyled from "../../../styles/measurements/components/ReloadIcon.styled";

export default function MeasurementPage() {
  let { id } = useParams();
  const [measurements, setMeasurements] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [rotate, setRotate] = React.useState(0);

  const getUpdatedMeasurements = (sensor_id) =>
    getDbMeasurementsBySensorId(sensor_id)
      .then(({ data }) => {
        data = data.map((value) => {
          return {
            ...value,
            timestamp: value["timestamp"].split("T").join(" "),
          };
        });
        setMeasurements(data.reverse().slice(0, 100));
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getUpdatedMeasurements(id);
  }, [id]);

  const useStyles = makeStyles({
    root: {
      "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
        outline: "none",
      },
    },
  });

  const classes = useStyles();

  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    {
      field: "timestamp",
      headerName: "Дата та час",
      width: 250,
      editable: true,
    },
    {
      field: "water_level_in_metres",
      headerName: "Рівень води (м)",
      width: 250,
      editable: true,
      type: "number",
    },
    {
      width: 230,
      field: "actions",
      headerName: "",
      headerAlign: "right",
      editable: false,
      sortable: false,
      filterable: false,
      disableExport: true,
      disableColumnMenu: true,
      disableClickEventBubbling: true,
      renderHeader: () => (
        <ReloadIconStyled
          onAnimationEnd={() => setRotate(0)}
          rotate={rotate}
          onClick={(e) => {
            e.stopPropagation();
            setRotate(1);
            getUpdatedMeasurements(id);
          }}
        />
      ),
    },
  ];

  const handleSelectionModelChange = (rows) => {
    setSelectedRows(rows);
  };

  const handleDelete = () => {
    let measurementsCopy = measurements.slice();
    selectedRows.map((id) => {
      deleteDbMeasurement(id);
      return (measurementsCopy = measurements.filter(
        (measurement) => measurement.id !== id
      ));
    });
    setMeasurements(measurementsCopy);
  };

  const handleEdit = (id, body) => {
    const updatedMeasurements = measurements.map((el) =>
      el.id === id ? body : el
    );
    setMeasurements(updatedMeasurements);
  };

  const handleCreate = (body) => {
    let measurementsCopy = measurements.slice();
    measurementsCopy.push(body);
    setMeasurements(measurementsCopy);
  };

  return (
    <>
      <MeasurementPageStyled selectedRows={selectedRows}>
        <p className="header">Перегляд записів:</p>
        <button className="add-button" onClick={() => setShowAddForm(true)}>
          Додати запис
        </button>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={measurements}
            columns={columns}
            pageSize={10}
            className={classes.root}
            onSelectionModelChange={handleSelectionModelChange}
          />
          <div className="buttons">
            <button className="delete-button" onClick={handleDelete}>
              Видалити
            </button>
            <button
              className="edit-button"
              onClick={() => setShowEditForm(true)}
            >
              Редагувати
            </button>
          </div>
        </div>
      </MeasurementPageStyled>
      <MeasurementEditForm
        handleEdit={handleEdit}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
        measurement={measurements.filter((el) => el.id === selectedRows[0])}
      />
      <MeasurementAddForm
        floatSensorId={id}
        showAddForm={showAddForm}
        handleCreate={handleCreate}
        setShowAddForm={setShowAddForm}
      />
    </>
  );
}
