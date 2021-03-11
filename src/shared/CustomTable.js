import React from "react";

const TableHeadItem = ({ item }) => {
  return <td title={item}>{item}</td>;
};

const TableRow = ({ data }) => {
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

const Table = ({ theadData, tbodyData, customClass }) => {
  return (
    <table className={customClass}>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.id} data={item.items} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
