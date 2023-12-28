import { Props } from "./interfaces";
import * as Styled from "./field-set.styles";

const validationValues = [0, 1, 2, 3, 4, 5, 6, 7];

export const FieldSet = ({ updateValues, ...props }: Props) => {

  const validate = (type: string, event: any) => {
    if (!validationValues.includes(parseInt(event.target.value))) return;

    updateValues({
      ...props,
      [type]: event.target.value
    })
  }

  return (
    <Styled.Grid>
      <Styled.Labels>
        <Styled.Label>Owner</Styled.Label>
        <Styled.Label>Group</Styled.Label>
        <Styled.Label>Everyone Else</Styled.Label>
      </Styled.Labels>
      <Styled.Fields>
        <Styled.Field inputMode="numeric" defaultValue={0} type="number" onChange={(event: any) => validate("read", event)} />
        <Styled.Field inputMode="numeric" defaultValue={0} type="number" onChange={(event: any) => validate("write", event)} />
        <Styled.Field inputMode="numeric" defaultValue={0} type="number" onChange={(event: any) => validate("execute", event)} />
      </Styled.Fields>
    </Styled.Grid>
  )
}