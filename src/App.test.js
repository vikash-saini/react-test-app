import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// beforeAll(() => {
//   console.log("***This will trigger before all tests***");
// });

// beforeEach(() => {
//   console.log("***This will trigger before each test***");
// });

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("app componenets screen test", () => {
  render(<App />);
  const ele = screen.getByText("let's code");
  const altText = screen.getByAltText("AI generated Image");
  expect(ele).toBeInTheDocument();
  expect(altText).toBeInTheDocument();
});

test("testing input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkPlaceholder = screen.getByPlaceholderText(/enter username/i);
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "Username");
  expect(checkInput).toHaveAttribute("id", "userId");
});

test("general testing", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("placeholder", "enter username");
});

describe.skip("testiung  UI", () => {
  test("testing input box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    let checkPlaceholder = screen.getByPlaceholderText(/enter username/i);
    expect(checkPlaceholder).toBeInTheDocument();
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "Username");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  test("general testing", () => {
    render(<App />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("placeholder", "enter username");
  });
});

test("input Event testing", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(input.value).toBe("abc");
});

test("button click test", () => {
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText(/updated data/i)).toBeInTheDocument();
});

afterAll(() => {
  console.log("***This will trigger after all tests***");
});

// afterEach(()=>{
//   console.log("***This will trigger before each test***");
// })

test("snapshot testing",()=>{
  const container = render(<App/>);
  expect(container).toMatchSnapshot();
})