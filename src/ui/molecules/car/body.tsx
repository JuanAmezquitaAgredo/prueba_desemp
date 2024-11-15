import React from 'react';
import styled from 'styled-components';

interface IMaintenanceTableProps {
  tbody: MaintenanceItem[];
  onEdit?: (rowId: number) => void;
  onDelete?: (rowId: number) => void;
}

const StyledMaintenanceTable = styled.table`
  width: 97%;
  max-width: 100%;
  border-radius: 10px;
  border-collapse: collapse;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  th, td {
    border-bottom: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 14px;
  }

  th {
    background-color: transparent;
    color: #818181;
  }

  td {
    color: #4d4d4d;
    height: 80px;
  }

  td.Colum-Buttons {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  td.Colum-notes {
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;



export default function MaintenanceTableComponent({ tbody }: IMaintenanceTableProps) {
  return (
    <StyledMaintenanceTable>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Kilometraje</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.date}</td>
            <td>{row.type}</td>
            <td>{row.mileage} km</td>
            <td className="Colum-notes">{row.notes || 'Sin notas'}</td>
          </tr>
        ))}
      </tbody>
    </StyledMaintenanceTable>
  );
}
