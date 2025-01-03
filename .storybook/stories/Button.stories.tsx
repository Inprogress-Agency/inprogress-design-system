import React from "react";
import { Button } from "../../src/index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "onPress" },
  },
};

export const Primary = {
  args: {
    title: "Primary",
  },
};

export const Secondary = {
  args: {
    title: "Secondary",
    variant: "secondary",
  },
};

// export const Default = () => <Button title="Click me" />;
