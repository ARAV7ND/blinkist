import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import NavBar from "./NavBar";

export default {
  title: "organisms/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const navBar = Template.bind({});
