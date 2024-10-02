import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

// Mocking the Hero component
jest.mock("@/components/ui/Hero", () => {
  const MockHero = () => <div>Hero Component</div>;
  MockHero.displayName = "Hero";
  return MockHero;
});

// Mocking the InfoCards component
jest.mock("@/components/ui/InfoCards", () => {
  const MockInfoCards = () => <div>InfoCards Component</div>;
  MockInfoCards.displayName = "InfoCards";
  return MockInfoCards;
});

// Mocking the OurWork component
jest.mock("@/components/ui/OurWork", () => {
  const MockOurWork = () => <div>Our Work Component</div>;
  MockOurWork.displayName = "OurWork";
  return MockOurWork;
});

// Mocking the ProgrammesSection component
jest.mock("@/components/ui/ProgrammesSection", () => {
  const MockProgrammesSection = () => <div>Programmes Section Component</div>;
  MockProgrammesSection.displayName = "ProgrammesSection";
  return MockProgrammesSection;
});

// Mocking the Template component
jest.mock("@/components/ui/Template", () => {
  const MockTemplate = () => <div>Template Component</div>;
  MockTemplate.displayName = "Template";
  return MockTemplate;
});

describe("Home Page", () => {
  it("should render Hero, InfoCards, Template, OurWork, and ProgrammesSection components", () => {
    render(<Home />);

    expect(screen.getByText("Hero Component")).toBeInTheDocument();
    expect(screen.getByText("InfoCards Component")).toBeInTheDocument();
    expect(screen.getByText("Template Component")).toBeInTheDocument(); // Check for Template
    expect(screen.getByText("Our Work Component")).toBeInTheDocument();
    expect(
      screen.getByText("Programmes Section Component"),
    ).toBeInTheDocument();
  });
});
