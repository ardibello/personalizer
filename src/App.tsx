import { Global, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "./components/Button.tsx";
import PageContainer from "./components/PageContainer.tsx";
import PersonalizationModal from "./components/PersonalizationModal.tsx";
import openSansFont from "./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf";

const App = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "OpenSans",
        primaryColor: "green",
      }}
    >
      <Global
        styles={() => ({
          "@font-face": {
            fontFamily: "OpenSans",
            src: `url('${openSansFont}') format("woff2")`,
            fontWeight: 300,
          },
        })}
      ></Global>
      <PersonalizationModal opened={opened} close={close} />
      <PageContainer>
        <Button text="Click to Personalize" onClick={open} />
      </PageContainer>
    </MantineProvider>
  );
};

export default App;
