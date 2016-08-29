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
    
 /* it("test all the game", function() {  
        TriviaModel.init();
        TriviaModel.isAnswerCorrect("Athens");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("1896");
      TriviaModel.next();
        TriviaModel.isAnswerCorrect("Michael Phelps");
      TriviaModel.next();
      expect( TriviaModel.isAnswerCorrect("Nadia Comaneci")).toBeTruthy;

  });  
    it("test the end of game", function() {  
        TriviaModel.init();
        TriviaModel.isAnswerCorrect("Athens");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("1896");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("Michael Phelps");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("Nadia Comaneci");
        expect(TriviaModel.next()).toBeFalsy;
  }); 
    it("test the uncorrect answer", function() {  
        TriviaModel.init();
        expect(TriviaModel.isAnswerCorrect("asdfasddf")).toBeFalsy;
        
  });  
    it("test the the first answer ", function() {  
        TriviaModel.init();
        expect(TriviaModel.getCurrentQuestion().answer).toBe("Athens");
        
  }); 
    */
 
});
