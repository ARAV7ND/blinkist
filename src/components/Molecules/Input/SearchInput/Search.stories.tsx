import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../configuration/Theme/theme";
import SearchInput from "./SearchInput";
export default {
  title: "Molecules/SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <ThemeProvider theme={theme}>
    <SearchInput {...args} />
  </ThemeProvider>
);

export const searchInput = Template.bind({});
searchInput.args = {
    
};
