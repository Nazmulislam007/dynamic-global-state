/* eslint-disable react-hooks/exhaustive-deps */
import { Button, List, Stack, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { options } from '../../constant/SettingsQ';
import { useGlobalState } from '../../Context/GlobalStateProvider';
import Question from './Question';

export default function Catagory({ questions, serviceSettings }) {
   const { dispatch } = useGlobalState();
   const selectedCatagoryOptions = options[serviceSettings];

   const que = useMemo(() => ({}), [questions]);
   const opt = useMemo(() => ({}), [questions]);

   selectedCatagoryOptions.forEach((option) => {
      opt[option] = '';
   });

   questions.forEach((question) => {
      que[question.questionId] = opt;
   });

   useEffect(() => {
      dispatch({
         type: 'INITIAL_STATE_KEYS',
         payload: que,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [questions]);

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <Stack spacing={3} sx={{ bgcolor: 'white', padding: 4, flex: 1, width: '100%' }}>
         <Stack>
            <Typography component="p" fontSize={22} fontWeight="500">
               {serviceSettings} - Service Costs
            </Typography>
            <Typography component="span" fontSize={14} color="gray">
               Settings for your {serviceSettings} options
            </Typography>
         </Stack>
         <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {questions.map((q, i) => (
               <Question
                  quesitionName={q.question}
                  questionId={q.questionId}
                  key={i}
                  options={selectedCatagoryOptions}
                  serviceSettings={serviceSettings}
               />
            ))}
         </List>
         <Button type="button" variant="contained" onClick={handleSubmit}>
            Submit
         </Button>
      </Stack>
   );
}
