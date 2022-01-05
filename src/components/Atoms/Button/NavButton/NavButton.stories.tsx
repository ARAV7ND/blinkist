import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import NavButton from "./NavButton";

export default {
  title: "atoms/NavButton",
  component: NavButton,
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => (
  <NavButton {...args} />
);

export const navButton = Template.bind({});

navButton.args = {
  label: "item-one",
};
