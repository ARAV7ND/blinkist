import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import BookCard from "./BookCard";

export default {
  title: "Molecules/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const bookCard = Template.bind({});

const tempBook = {
  id: 20,
  title: "steve jobs",
  author: "Walter Isaacson",
  image:
    "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
  time: "12",
  category: "Biography",
  status: true,
  isFinished: false,
};

bookCard.args = {
  book: tempBook,
  visible: true,
  handleClick: () => {},
};
