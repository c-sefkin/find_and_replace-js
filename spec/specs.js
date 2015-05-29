describe('findReplace', function() {

  it("will find and replace a word in a string", function() {
    expect(findReplace("i love dogs", "dogs", "cats")).to.eq("i love cats")
  });

  it("will find and replace a word in a string", function() {
    expect(findReplace("i love dogs dogs", "dogs", "cats")).to.eq("i love cats cats")
  });

});
