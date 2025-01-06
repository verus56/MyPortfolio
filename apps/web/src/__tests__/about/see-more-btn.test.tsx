import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import SeeMoreButton from "@/components/about/see-more-button";
import { sendGTMEvent } from "@/components/google";
import { FaArrowRight } from "react-icons/fa";

jest.mock("@/components/google", () => ({
  sendGTMEvent: jest.fn(),
}));

describe("SeeMoreButton", () => {
  const mockBadge = "See More";
  const mockPath = "/example-path";

  it("navigates to the correct path when clicked", () => {
    render(<SeeMoreButton badge={mockBadge} path={mockPath} icon={FaArrowRight} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockPath);
  });

  it("sends the GTM event when clicked", () => {
    render(<SeeMoreButton badge={mockBadge} path={mockPath} icon={FaArrowRight} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(sendGTMEvent).toHaveBeenCalledWith({
      event: "buttonClicked",
      value: process.env.NEXT_PUBLIC_GTM_ID,
    });
  });

  it("applies the correct styles on hover and active states", () => {
    render(<SeeMoreButton badge={mockBadge} path={mockPath} icon={FaArrowRight} />);

    const button = screen.getByRole("button");

    // Simulate hover
    fireEvent.mouseOver(button);
    expect(button).toHaveClass("hover:scale-105");

    // Simulate active
    fireEvent.mouseDown(button);
    expect(button).toHaveClass("active:scale-95");
  });
});
