// Test Components
import { render, toBeDefined, getByRole, screen, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

// React Component
import Character from "../components/Character";

describe("Character Testing", () => {
  const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  let image;
  let name;
  let characterInfo;

  beforeEach(() => {
    render(<Character character={character} />);

    image = screen.getByRole("img");
    name = screen.getByText("Rick Sanchez")
    characterInfo = screen.getByTitle("info")
  });

  afterEach((cleanup))

  test("should render the character image", () => {
    expect(image).toBeDefined();
  });

  test("should render the character name", () => {
    expect(name).toBeDefined();
  })

  test("should render all the character information", () => {
    expect(characterInfo).toBeDefined()
  })

});
