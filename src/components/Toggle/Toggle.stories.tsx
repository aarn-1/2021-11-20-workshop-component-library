import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleOn = Template.bind({});
ToggleOn.args = {
  state: true,
};
export const ToggleOff = Template.bind({});
ToggleOff.args = {
  state: false
};
