import React from "react";
import { Slider, Button, MantineProvider } from "@mantine/core";

function Demo() {
  const sliderRef = React.useRef<HTMLInputElement>(null);
  return (
    <MantineProvider>
      <Slider
        ref={sliderRef}
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />

      <Button
        onClick={() => {
          console.log(sliderRef.current);
        }}
      >
        Print value
      </Button>
    </MantineProvider>
  );
}

export default function App() {
  return <Demo />;
}
