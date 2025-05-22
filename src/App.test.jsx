import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi, beforeAll } from "vitest";
import App from "./App";

describe("App Component", () => {
  beforeAll(() => {
    // Mock IntersectionObserver
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );
  });
  test("renders with required element IDs", () => {
    render(<App />);

    // Test for specific IDs you expect in your App component
    expect(document.getElementById("about")).toBeInTheDocument();
    expect(document.getElementById("journey")).toBeInTheDocument();
    expect(document.getElementById("projects")).toBeInTheDocument();
    expect(document.getElementById("contact")).toBeInTheDocument();

    // Alternatively, if you're using regular HTML ids:
    // expect(screen.getByTestId('header')).toBeInTheDocument();
    // expect(screen.getByTestId('main')).toBeInTheDocument();
    // expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
