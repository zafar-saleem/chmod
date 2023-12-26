import * as Styled from "./table.styles";

export const Table = () => {
  return (
    <Styled.Table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>None</td>
          <td>0+0+0 = 0</td>
        </tr>
        <tr>
          <td>Execute</td>
          <td>0+0+1 = 1</td>
        </tr>
        <tr>
          <td>Write</td>
          <td>0+2+0 = 2</td>
        </tr>
        <tr>
          <td>Write & Execute</td>
          <td>0+2+1 = 3</td>
        </tr>
        <tr>
          <td>Read</td>
          <td>4+0+0 = 4</td>
        </tr>
        <tr>
          <td>Read & Execute</td>
          <td>4+0+1 = 5</td>
        </tr>
        <tr>
          <td>Read & Write</td>
          <td>4+2+0 = 6</td>
        </tr>
        <tr>
          <td>Read, Write & Execute</td>
          <td>4+2+1 = 7</td>
        </tr>
      </tbody>
    </Styled.Table>
  )
}