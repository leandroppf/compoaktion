import { Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

const Template = (args: ButtonProps) => <Button {...args}>Sou um botão</Button>;

export const Default = Template.bind({});
