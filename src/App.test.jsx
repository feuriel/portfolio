import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi, beforeAll } from "vitest";
import App from "./App";

describe("App Component", () => {
  beforeAll(() => {
    // Mock IntersectionObserver (reusable mock)
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }))
    );
  });
  test("renders with required element IDs", () => {
    render(<App />);

    // Test for specific IDs you expect in your App component
    expect(document.getElementById("about")).toBeInTheDocument();
    expect(document.getElementById("journey")).toBeInTheDocument();
    expect(document.getElementById("projects")).toBeInTheDocument();
    expect(document.getElementById("contact")).toBeInTheDocument();
  });
});
