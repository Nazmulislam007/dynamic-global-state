const reducer = (state, { type, payload }) => {
   switch (type) {
      case 'INITIAL_STATE_KEYS': {
         return {
            ...payload,
         };
      }

      case 'UPDATE_STATE': {
         return {
            ...state,
            [payload.questionId]: {
               ...state[payload.questionId],
               [payload.activeOption]:
                  (payload.existingServices[payload.questionId] &&
                     payload.existingServices[payload.questionId][payload.activeOption]) ||
                  '',
            },
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
      default:
         return state;
   }
};

export default reducer;
