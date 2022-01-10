import CustomButton from "./Button";
import theme from "../../configuration/Theme/theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

// import Button from "@mui/material/Button";
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
  label: "secondary",
  variant: "contained",
  size: "small",
  color: "primary",
};
