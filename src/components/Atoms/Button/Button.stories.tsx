import CustomButton from "./Button";
import theme from "../../configuration/Theme/theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default {
  title: "atoms/Button",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <ThemeProvider theme={theme}>
    <CustomButton {...args} />
  </ThemeProvider>
);

export const primary = Template.bind({});

primary.args = {
  label: "primary",
  variant: "contained",
  size: "small",
  color: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
  label: "secondary",
  variant: "outlined",
  color: "secondary",
};

export const outLinedPrimary = Template.bind({});
outLinedPrimary.args = {
  variant: "outlined",
  label: "item",
  color: "primary",
};

export const navButton = Template.bind({});
navButton.args = {
  variant: "text",
  label: "item",
  endIcon: <ExpandMore />,
};
