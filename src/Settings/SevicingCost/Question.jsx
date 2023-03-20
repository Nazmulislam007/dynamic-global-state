import AddIcon from '@mui/icons-material/Add';
import { Button, Input, InputLabel, ListItem } from '@mui/material';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useGlobalState } from '../../Context/GlobalStateProvider';
import Options from './Options';
import PerSqft from './PerSqft';

const CUSTOMER_ID = 23;

const Question = forwardRef(({ quesitionName, questionId, options, serviceSettings, setIsFetch }, ref) => {
   const { state, dispatch, serviceDataState } = useGlobalState();
   const [activeOption, setActiveOption] = useState('free');

   const defaultInputValue = state[questionId] && state[questionId][activeOption];
   const existedSqftState = activeOption === 'square-foot' && defaultInputValue;

   const existingServices = serviceDataState?.find((serv) => serv.service === serviceSettings && serv.customerId === CUSTOMER_ID);

   const updateAciveOption = existingServices[questionId] && Object.keys(existingServices[questionId])[0];

   // console.log(updateAciveOption);

   useEffect(() => {
      if (updateAciveOption) {
         setActiveOption(updateAciveOption);
      }
   }, [updateAciveOption, quesitionName]);

   useEffect(() => {
      setIsFetch(activeOption);
   }, [activeOption, setIsFetch]);

   const handleInputValueChange = (e) => {
      dispatch({
         type: 'HANDLE_INPUT_VALUE',
         payload: {
            value: e.target.value,
            questionId,
            activeOption,
         },
      });
   };

   const createIncreBtn = () => {
      dispatch({
         type: 'CREATE_INCREMENT_STATE',
         payload: {
            questionId,
            activeOption,
            id: Date.now(),
         },
      });
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useImperativeHandle(ref, () => ({ [questionId]: activeOption }), [updateAciveOption, activeOption, questionId]);

   return (
      <ListItem sx={{ padding: '30px 10px', display: 'flex', gap: 2, flexDirection: 'column', borderBottom: '1px solid' }}>
         <InputLabel fontWeight="500">How much do you charge to {quesitionName}</InputLabel>
         <Options questionId={questionId} options={options} activeOption={activeOption} setActiveOption={setActiveOption} />

         {['flat-rate', 'per-piece'].includes(activeOption) && (
            <Input
               disableUnderline
               name={questionId}
               sx={{ border: '1px solid', padding: '4px', minWidth: 250 }}
               value={defaultInputValue || ''}
               onChange={handleInputValueChange}
            />
         )}

         {activeOption === 'square-foot' && (
            <>
               {existedSqftState &&
                  existedSqftState.map(({ id, perSqft, totalSqft }) => (
                     <PerSqft
                        questionId={questionId}
                        key={id}
                        id={id}
                        totalSqft={totalSqft}
                        perSqft={perSqft}
                        activeOption={activeOption}
                     />
                  ))}
               <Button variant="text" startIcon={<AddIcon />} sx={{ color: 'gray' }} onClick={createIncreBtn}>
                  Add Increment
               </Button>
            </>
         )}
      </ListItem>
   );
});

export default Question;
