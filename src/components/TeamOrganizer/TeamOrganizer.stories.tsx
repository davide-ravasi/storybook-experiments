import React from "react";
import TeamOrganizer from "./TeamOrganizer";

export default {
  title: "Components/TeamOrganizer",
  component: TeamOrganizer
}

const Template = (args) => <TeamOrganizer {...args} />

export const Default = Template.bind({});

Default.args = {
  players: [
    "Alice",
    "Bob",
    "Carol",
    "Daniel",
    "Elaine",
    "Finley",
    "Gary",
    "Hector",
  ]
};