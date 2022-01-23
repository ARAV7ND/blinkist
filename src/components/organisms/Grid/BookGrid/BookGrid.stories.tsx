import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import BookGrid from "./BookGrid";

export default {
  title: "organisms/BookGrid",
  component: BookGrid,
} as ComponentMeta<typeof BookGrid>;

const Template: ComponentStory<typeof BookGrid> = (args) => (
  <BookGrid {...args} />
);
export const bookGrid = Template.bind({});
const books = [
  {
    id: 8,
    title: "Hyper-Learning",
    author: "Edward D.Hess",
    time: "13",
    category: "Education",
    image:
      "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
    status: true,
    isFinished: false,
  },
  {
    id: 12,
    title: "Let's Talk",
    author: "Therese Huston",
    time: "13",
    category: "Communcation skills",
    image:
      "https://images.blinkist.com/images/books/60547aca6cee0700076902e8/1_1/470.jpg",
    status: true,
    isFinished: false,
  },
  {
    id: 13,
    title: "The Motivation Myth",
    author: "Jeff Haden",
    time: "13",
    category: "Motivation",
    image:
      "https://images.blinkist.com/images/books/6082d1516cee0700072c7da1/1_1/470.jpg",
    status: true,
    isFinished: false,
  },
  {
    id: 15,
    title: "Fear",
    author: "Bob Woodward",
    category: "Politics",
    time: "15",
    image:
      "https://images.blinkist.com/images/books/609901436cee0700077e6675/1_1/470.jpg",
    status: true,
    isFinished: false,
  },
  {
    id: 3,
    title: "The Bully Pulpit",
    author: "Goodwin",
    time: "19",
    category: "Politics",
    image:
      "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
    status: false,
    isFinished: false,
  },
];
bookGrid.args = {
  bookList: books,

  handleClick: () => {
    console.log("clicked");
  },
};
