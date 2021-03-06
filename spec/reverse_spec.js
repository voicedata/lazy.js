describe("Lazy", function() {
  describe("reverse", function() {
    ensureLaziness(function() { Lazy(people).reverse(); });

    it("iterates the collection backwards", function() {
      var reversed = Lazy(people).reverse().toArray();

      expect(reversed).toEqual([
        happy,
        daniel,
        adam,
        lauren,
        mary,
        david
      ]);
    });

    it("provides indexed access into the collection", function() {
      var lastPerson = Lazy(people).reverse().get(0);
      expect(lastPerson).toEqual(happy);
    });

    it("does not create an array to index into the collection", function() {
      var reversed = Lazy(people).reverse();
      var lastPerson = reversed.get(0);
      expect(arraysCreated).toBe(0);
    });

    it("passes an index along with each element", function() {
      expect(Lazy(people).reverse()).toPassToEach(1, [0, 1, 2, 3, 4, 5]);
    });
  });
});
