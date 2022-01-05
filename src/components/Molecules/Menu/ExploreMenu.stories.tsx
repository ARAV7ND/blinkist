import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import ExploreMenu from "./ExploreMenu";

export default {
  title: "Molecules/MenuItems",
  component: ExploreMenu,
} as ComponentMeta<typeof ExploreMenu>;

const Template: ComponentStory<typeof ExploreMenu> = () => <ExploreMenu />;

export const ExpandList = Template.bind({});
