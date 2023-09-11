import { Grid, Space, Text } from "@mantine/core";
import Checkbox from "./Checkbox.tsx";

interface SettingsSectionProps {
  title: string;
}

const SettingsSection = ({ title }: SettingsSectionProps) => {
  return (
    <>
      <Space h="lg" />
      <Text fz="sm" fw={700}>
        {title}:
      </Text>
      <Space h="sm" />
      <Grid>
        <Grid.Col xs={12} sm={6}>
          <Checkbox isChecked label="Linkedin Bio"></Checkbox>
          <Checkbox isChecked label="Years of experience"></Checkbox>
          <Checkbox isChecked label="Current Experience"></Checkbox>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Checkbox label="List of past jobs"></Checkbox>
          <Checkbox isDisabled label="Current job description"></Checkbox>
          <Checkbox isDisabled label="Current Job specialities"></Checkbox>
        </Grid.Col>
      </Grid>
      <Space h="md" />
    </>
  );
};

export default SettingsSection;
