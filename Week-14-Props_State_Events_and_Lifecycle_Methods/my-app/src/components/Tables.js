import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Rating from "./Stars";
import { Name, NewComment } from "./UserComment";

export default function Tables(props) {
  console.log(props);
  const initState = [];
  const [state, setState] = useState(initState);
} //return (
//     <Table>
//       <td>
//         <Name />
//       </td>
//       <td>
//         <NewComment />
//       </td>
//       <td>
//         <Rating />
//       </td>
//     </Table>
//   );
// }
