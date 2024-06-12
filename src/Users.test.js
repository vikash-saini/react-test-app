import Users from "./Users";
import renderer from "react-test-renderer";

test("class component method testing", () => {
  const componentData = renderer.create(<Users />).getInstance();
  expect(componentData.getUserList()).toMatch("users list");
});
