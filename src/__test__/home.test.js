test("", function () {
  // screen load
  render(<Component />);
  // target elemett
  const result = screen.getElem("#");
  // assert if its present
  expect(result).toBeInDocument();
});
