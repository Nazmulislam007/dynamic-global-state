const questions = {
   vanities: [
      { question: 'deliver a new vanity?', questionId: 'deliver' },
      { question: 'install new vanity?', questionId: 'install' },
      { question: 'remove existing vanity?', questionId: 'remove' },
      { question: 'dispose an existing vanity?', questionId: 'dispose' },
   ],
   'kitchen-faucets': [
      { question: 'install new fucets?', questionId: 'install' },
      { question: 'remove existing faucets?', questionId: 'remove' },
   ],
   tiles: [
      { question: 'deliver a new tiles?', questionId: 'deliver' },
      { question: 'install new tiles?', questionId: 'install' },
      { question: 'remove existing tiles?', questionId: 'remove' },
      { question: 'install underlayment?', questionId: 'underlayment' },
      { question: 'dispose an old floors?', questionId: 'dispose' },
   ],
   countertop: [
      { question: 'deliver a new countertops?', questionId: 'deliver' },
      { question: 'install new countertops?', questionId: 'install' },
      { question: 'remove existing countertops?', questionId: 'remove' },
      { question: 'install cut holes for sink and faucet?', questionId: 'cut' },
      { question: 'dispose old countertops?', questionId: 'dispose' },
   ],
   flooring: [
      { question: 'deliver a new floors?', questionId: 'deliver' },
      { question: 'install new floors?', questionId: 'install' },
      { question: 'remove existing floors?', questionId: 'remove' },
      { question: 'install underlayment?', questionId: 'underlayment' },
      { question: 'dispose old floors?', questionId: 'dispose' },
   ],
   'bath-tub': [
      { question: 'deliver a new bathtub?', questionId: 'deliver' },
      { question: 'install new bathtub?', questionId: 'install' },
      { question: 'remove an existing shower?', questionId: 'remove-shower' },
      { question: 'remove an existing bathtub?', questionId: 'remove-bathtub' },
      { question: 'dispose an existing bathtub?', questionId: 'dispose' },
   ],
   cabinets: [
      { question: 'deliver a new cabinets?', questionId: 'deliver' },
      { question: 'install new cabinets?', questionId: 'install' },
      { question: 'remove existing cabinets?', questionId: 'remove' },
      { question: 'dispose old cabinets?', questionId: 'dispose' },
      { question: 'add lighting to cabinets?', questionId: 'lighting' },
      { question: 'paint new cabinet doors?', questionId: 'paint-doors' },
      { question: 'paint new cabinet boxes?', questionId: 'paint-boxes' },
   ],
   'bathroom-faucets': [
      { question: 'install new fuacets?', questionId: 'install' },
      { question: 'remove old fuacets?', questionId: 'remove' },
   ],
   'shower-kit': [
      { question: 'deliver a new shower kit?', questionId: 'deliver' },
      { question: 'install new shower kit?', questionId: 'install' },
      { question: 'remove existing shower kit?', questionId: 'remove-shower' },
      { question: 'remove existing bathtub?', questionId: 'remove-bathtub' },
      { question: 'dispose an existing shower kit?', questionId: 'dispose' },
   ],
};

const options = {
   vanities: ['free', 'flat-rate', 'not-available'],
   'kitchen-faucets': ['free', 'flat-rate', 'per-piece', 'not-available'],
   tiles: ['free', 'flat-rate', 'square-foot', 'not-available'],
   countertop: ['free', 'flat-rate', 'square-foot', 'not-available'],
   flooring: ['free', 'flat-rate', 'square-foot', 'not-available'],
   'bath-tub': ['free', 'flat-rate', 'not-available'],
   cabinets: ['free', 'flat-rate', 'per-piece', 'not-available'],
   'bathroom-faucets': ['free', 'flat-rate', 'per-piece', 'not-available'],
   'shower-kit': ['free', 'flat-rate', 'not-available'],
};

export { questions, options };

//
