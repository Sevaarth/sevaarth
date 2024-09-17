import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

// Mocking child components
jest.mock("@/components/ui/Hero", () => () => <div>Hero Component</div>);
jest.mock("@/components/ui/OurWork", () => () => <div>Our Work Component</div>);
jest.mock("@/components/ui/ProgrammesSection", () => () => (
  <div>Programmes Section Component</div>
));

describe("Home Page", () => {
  it("renders Hero, OurWork, and ProgrammesSection components", () => {
    render(<Home />);

    // Assert that all three mocked components are rendered
    expect(screen.getByText("Hero Component")).toBeInTheDocument();
    expect(screen.getByText("Our Work Component")).toBeInTheDocument();
    expect(
      screen.getByText("Programmes Section Component")
    ).toBeInTheDocument();
  });
});
