import { CustomButtom } from "./Button";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../Theme/theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "atoms/Button",
  component: CustomButtom,
} as ComponentMeta<typeof CustomButtom>;

const Template: ComponentStory<typeof CustomButtom> = (args) => (
  <ThemeProvider theme={theme}>
    <CustomButtom {...args} />
  </ThemeProvider>
);

export const primary = Template.bind({});

primary.args = {
  label: "primary",
  variant: "contained",
  size: "small",
  color: "primary",
};
