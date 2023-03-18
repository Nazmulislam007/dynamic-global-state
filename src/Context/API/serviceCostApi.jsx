const serviceCostApi = [
   {
      customerId: 23,
      service: 'tiles',
      deliver: {
         'square-foot': [
            {
               id: 1,
               totalSqft: 100,
               perSqft: 2,
            },
         ],
      },
      install: {
         'square-foot': [
            {
               id: 2,
               totalSqft: 50,
               perSqft: 1.5,
            },
         ],
      },
      remove: { free: '' },
      dispose: { free: '' },
      underlayment: { 'flat-rate': '225' },
   },
   {
      customerId: 23,
      service: 'flooring',
      deliver: { free: '' },
      install: {
         'square-foot': [
            {
               id: 2,
               totalSqft: 50,
               perSqft: 1.5,
            },
         ],
      },
      remove: { free: '' },
      dispose: {
         'square-foot': [
            {
               id: 1,
               totalSqft: 100,
               perSqft: 2,
            },
         ],
      },
      underlayment: { 'flat-rate': 225 },
   },
   {
      customerId: 23,
      service: 'countertop',
      deliver: { free: '' },
      install: {
         free: '',
      },
      remove: {
         'square-foot': [
            {
               id: 2,
               totalSqft: 50,
               perSqft: 1.5,
            },
         ],
      },
      dispose: {
         'square-foot': [
            {
               id: 1,
               totalSqft: 100,
               perSqft: 2,
            },
         ],
      },
      cut: { 'flat-rate': 225 },
   },
   {
      customerId: 23,
      service: 'vanities',
      deliver: { free: 0 },
      install: { 'flat-rate': 230 },
      remove: { free: 0 },
      dispose: { 'not-available': 0 },
   },
   {
      customerId: 24,
      service: 'vanities',
      deliver: { free: 0 },
      install: { 'flat-rate': 220 },
      remove: { free: 0 },
      dispose: { 'not-available': 0 },
   },
   {
      customerId: 23,
      service: 'bath-tub',
      deliver: { free: 0 },
      install: { 'flat-rate': 220 },
      'remove-bathtub': { free: 0 },
      'remove-shower': { 'flat-rate': 10 },
      dispose: { 'not-available': 0 },
   },
   {
      customerId: 23,
      service: 'kitchen-faucets',
      install: { 'flat-rate': 220 },
      remove: { free: 0 },
      deliver: { free: 0 },
   },
   {
      customerId: 23,
      service: 'bathroom-faucets',
      install: { 'flat-rate': 220 },
      remove: { free: 0 },
      deliver: { free: 0 },
   },
   {
      customerId: 23,
      service: 'shower-kit',
      deliver: { free: 0 },
      install: { 'flat-rate': 30 },
      'remove-bathtub': { free: 0 },
      'remove-shower': { 'flat-rate': 10 },
      dispose: { 'not-available': 0 },
   },
   {
      customerId: 23,
      service: 'cabinets',
      deliver: { free: 0 },
      install: { 'flat-rate': 30 },
      remove: { 'per-piece': 100 },
      dispose: { 'flat-rate': 10 },
      lighting: { 'not-available': 0 },
      'paint-doors': { 'per-piece': 22 },
      'paint-boxes': { 'not-available': 0 },
   },
];

export { serviceCostApi };

//
