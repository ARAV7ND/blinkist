import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import StatusTab from "./StatusTab";

export default {
  title: "organisms/StatusTab",
  component: StatusTab,
} as ComponentMeta<typeof StatusTab>;

const Template: ComponentStory<typeof StatusTab> = () => <StatusTab />;

export const statusTab = Template.bind({});
