import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  deleteDbMeasurement,
  getDbMeasurementsBySensorId,
} from "../../api/measurementDbApi";
import MeasurementPageStyled from "../../../styles/measurements/pages/MeasurementPage.styled";
import MeasurementEditForm from "../components/MeasurementEditForm";
import MeasurementAddForm from "../components/MeasurementAddForm";

export default function MeasurementPage() {
  let { id } = useParams();
  const [measurements, setMeasurements] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);

  useEffect(() => {
    getDbMeasurementsBySensorId(id)
      .then(({ data }) => setMeasurements(data))
      .catch((err) => console.log(err));
  }, [id]);

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
            rowsPerPageOptions={[5]}
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
