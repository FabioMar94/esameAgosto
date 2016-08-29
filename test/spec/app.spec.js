describe("calcolaStringa", function() {
    it("testa la stringa vuota", function() { 

      expect( calcola('')).toBe(-1);
        
  });   
    
    it("testa una stringa con una c",function(){
            expect(calcola('ciao')).toBe(1);
    });
    
    it("testa una stringa con più c",function(){

            expect(calcola('ciaocc')).toBe(3);
    });
    
    it("testa una stringa senza c",function(){

            expect(calcola('iao')).toBe(0);
    });
 
});
