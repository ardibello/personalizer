import { Container as MContainer } from "@mantine/core";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: ContainerProps) => {
  return (
    <MContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {children}
    </MContainer>
  );
};

export default PageContainer;
