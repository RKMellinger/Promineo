import React, { useState } from "react";
import { Table } from "react-bootstrap";
import rating from "./Stars";
import newComment from "./UserComment";

export default function Table(props) {
  console.log(props);
  const initState = [];
  const [state, setState] = useState(initState);
  return (
    <Table>
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </Table>
  );
}
