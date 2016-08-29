describe("calcolaStringa", function() {
    it("testa la stringa vuota", function() { 
    
        calcola('');
      expect( calcola('')).toBe(-1);
        
  });   
    
    it("testa una stringa con una c",function(){
        calcola('ciao'),
            expect(calcola('ciao')).toBe(1);
    });
    
    it("testa una stringa con più c",function(){
        calcola('ciaocc'),
            expect(calcola('ciaocc')).toBe(3);
    });
    
    it("testa una stringa senza c",function(){
        calcola('iao'),
            expect(calcola('iao')).toBe(0);
    });
 
});
