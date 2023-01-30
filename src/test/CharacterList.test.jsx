// Test Components
import { render, toBeDefined, getByRole, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

// React Component
import CharacterList from "../components/CharacterList";

describe("Character List Testing", () => {
  
  let loading
  let page
  let button
  
  beforeEach(() => {
    render(<CharacterList />);

    loading = screen.getByTitle("loading")
    page = screen.getByTitle("page")
    button = screen.getByText(/next page/i)
  });

  afterEach((cleanup))

  test("should render a loading", () => {
    expect(loading).toBeDefined()
  })

  test("should go forward one page when the button is clicked", () => {
    fireEvent.click(button)
    expect(page + 1)
  })
});