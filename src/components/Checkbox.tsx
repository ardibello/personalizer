import { Badge, Checkbox as MCheckbox, Group, Space } from "@mantine/core";
import { useState } from "react";

interface CheckboxProps {
  label: string;
  isChecked?: boolean;
  isDisabled?: boolean;
}

const Checkbox = ({ label, isChecked, isDisabled }: CheckboxProps) => {
  const [isCheckedState, setIsCheckedState] = useState(isChecked ?? false);
  const handleOnClick = () => {
    setIsCheckedState((current) => !current);
  };

  return (
    <>
      <Group>
        <MCheckbox
          label={label}
          onClick={handleOnClick}
          checked={isCheckedState}
          disabled={isDisabled}
          readOnly
        />
        {isDisabled ? (
          <Badge color="red" style={{ fontWeight: 900 }}>
            DISABLED
          </Badge>
        ) : null}
      </Group>
      <Space h="sm" />
    </>
  );
};

export default Checkbox;
