import { render, screen } from "@testing-library/react";
import App from "./App";
import { useState } from "react";
import { handleSubmit } from "./inputdatatamu";

describe("Test function", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId("buku");
    expect(linkElement).toBeInTheDocument();
  });

  // Mock setDataTamu to capture its calls
  const mockSetDataTamu = jest.fn();

  // Mock event object
  const mockEvent = {
    preventDefault: jest.fn(),
    target: {
      fullname: { value: "John Doe" },
      alamat: { value: "123 Main St" },
      pesan: { value: "Test message" },
    },
  };

  describe("handleSubmit", () => {
    it("should prevent form submission and update dataTamu", () => {
      handleSubmit(mockEvent, [], mockSetDataTamu);

      // Verify that preventDefault is called
      expect(mockEvent.preventDefault).toHaveBeenCalled();

      // Verify that setDataTamu is called with the expected data
      expect(mockSetDataTamu).toHaveBeenCalledWith([
        {
          fullname: "John Doe",
          alamat: "123 Main St",
          pesan: "Test message",
          id: expect.any(Number), // Check if id is a number
        },
      ]);
    });
  });
});
