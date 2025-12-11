import { render, screen } from "@testing-library/react";
import App from "./App";
// import { expect } from "vitest"; // opcional, ya tienes globals

test("render el componente de App", () => {
  render(<App />);

  const tituloElemento = screen.getByRole("heading", {
    name: /vite \+ react/i,
  });

  expect(tituloElemento).toBeInTheDocument();
});
