// Test Components
import { render, toBeDefined, getByRole, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

// React Component
import App from "../App"

describe("App Testing", () => {
  
  let logo
  
  beforeEach(() => {
    render(<App />);

    logo = screen.getByRole("img")
  });

  afterEach((cleanup))

  test("should render the logo", () => {
    expect(logo).toBeDefined()
  })

  
});