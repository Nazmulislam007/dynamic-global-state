const reducer = (state, { type, payload }) => {
   switch (type) {
      case 'INITIAL_STATE': {
         const { selectedCatagoryOptions, questions, existingServices } = payload;

         const que = {};
         const opt = {};

         selectedCatagoryOptions.forEach((option) => {
            opt[option] = '';
         });

         questions.forEach((question) => {
            que[question.questionId] = existingServices[question.questionId]
               ? { ...opt, ...existingServices[question.questionId] }
               : opt;
         });

         return {
            ...que,
         };
      }

      case 'HANDLE_INPUT_VALUE': {
         return {
            ...state,
            [payload.questionId]: { ...state[payload.questionId], [payload.activeOption]: payload.value },
         };
      }

      case 'CREATE_INCREMENT_STATE': {
         return {
            ...state,
            [payload.questionId]: {
               ...state[payload.questionId],
               [payload.activeOption]: [
                  ...state[payload.questionId][payload.activeOption],
                  {
                     id: payload.id,
                     totalSqft: '',
                     perSqft: '',
                  },
               ],
            },
         };
      }

      case 'HANDLE_CHANGE_INCREMENT_VALUE': {
         return {
            ...state,
            [payload.questionId]: {
               ...state[payload.questionId],
               [payload.activeOption]: state[payload.questionId][payload.activeOption].map((sqft) => {
                  if (sqft.id === payload.id) {
                     return {
                        ...sqft,
                        [payload.name]: payload.value,
                     };
                  }
                  return sqft;
               }),
            },
         };
      }

      case 'DELETE_INCREMENT_STATE': {
         return {
            ...state,
            [payload.questionId]: {
               ...state[payload.questionId],
               [payload.activeOption]: state[payload.questionId][payload.activeOption].filter((sqft) => sqft.id !== payload.id),
            },
         };
      }

      default:
         return state;
   }
};

export const databaseReducer = (state, { type, payload }) => {
   switch (type) {
      case 'ADD_SERVICES_DATA': {
         return [
            ...state.filter((serv) => !(serv.customerId === payload.customerId && serv.service === payload.service)),
            payload,
         ];
      }
      default:
         return state;
   }
};

export default reducer;
