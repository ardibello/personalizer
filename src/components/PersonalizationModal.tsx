import {
  Container,
  Divider,
  Flex,
  Group,
  Modal,
  Switch,
  Text,
  useMantineTheme,
} from "@mantine/core";
import SettingsSection from "./SettingsSection.tsx";

interface PersonalizationModalProps {
  opened: boolean;
  close: () => void;
}

const PersonalizationModal = ({ opened, close }: PersonalizationModalProps) => {
  const theme = useMantineTheme();

  return (
    <Modal.Root size="xl" opened={opened} onClose={close}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header
          style={{
            backgroundColor: theme.colors[theme.primaryColor][8],
          }}
        >
          <Modal.Title
            style={{
              color: "#ffffff",
              width: "100%",
            }}
          >
            <Flex justify="space-between" align="center" direction="row">
              <Text fz="md" fw={700}>
                Personalization Settings:
              </Text>
              <Group>
                <Text fz="sm">Use Account Research</Text>
                <Switch />
              </Group>
            </Flex>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <SettingsSection title="Profile" />
            <Divider />
            <SettingsSection title="Account" />
          </Container>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default PersonalizationModal;
