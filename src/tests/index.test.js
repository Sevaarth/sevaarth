import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

// Mocking child components with display names
jest.mock('@/components/ui/Hero', () => {
  const MockHero = () => <div>Hero Component</div>;
  MockHero.displayName = 'Hero';
  return MockHero;
});

jest.mock('@/components/ui/OurWork', () => {
  const MockOurWork = () => <div>Our Work Component</div>;
  MockOurWork.displayName = 'OurWork';
  return MockOurWork;
});

jest.mock('@/components/ui/ProgrammesSection', () => {
  const MockProgrammesSection = () => <div>Programmes Section Component</div>;
  MockProgrammesSection.displayName = 'ProgrammesSection';
  return MockProgrammesSection;
});

describe('Home Page', () => {
  it('renders Hero, OurWork, and ProgrammesSection components', () => {
    render(<Home />);

    // Assert that all three mocked components are rendered
    expect(screen.getByText('Hero Component')).toBeInTheDocument();
    expect(screen.getByText('Our Work Component')).toBeInTheDocument();
    expect(screen.getByText('Programmes Section Component')).toBeInTheDocument();
  });
});
