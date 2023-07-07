import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Input } from "../../../components";

describe("Testing Input", () => {
  const inputPlaceholder = "Escreva aqui";
  const inputName = "text-input";

  it("should be render text input successfully", () => {
    const { container } = render(
      <Input name={inputName} placeholder={inputPlaceholder} type="text" />
    );

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should be able to change value", async () => {
    const handleChange = vi.fn();
    const userText = "test value";
    render(
      <Input
        name={inputName}
        placeholder={inputPlaceholder}
        type="text"
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, userText);

    expect(handleChange).toHaveBeenCalled();
    expect(inputElement).toHaveValue(userText);
  });
});
