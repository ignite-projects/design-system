import type { StoryObj, Meta } from "@storybook/react";
import {Text, TextProps } from "@ign-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, libero officia? Eveniet consectetur magnam sapiente, qui mollitia dolores ullam quisquam! Mollitia maxime rem, impedit a nam excepturi quia perspiciatis sequi?',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
