/* eslint-disable react-hooks/exhaustive-deps */
import { Button, List, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { options } from '../../constant/SettingsQ';
import { useGlobalState } from '../../Context/GlobalStateProvider';
import { doUpperLower } from '../../useUpperLower';
import Question from './Question';

const CUSTOMER_ID = 23;

export default function Catagory({ questions, serviceSettings }) {
   const { dispatch, state, serviceDataState, dispatchServiceData } = useGlobalState();
   const questionRef = useRef([]);
   const [selectedOptions, setSelectedOptions] = useState({});
   const [isFetch, setIsFetch] = useState('');
   const selectedCatagoryOptions = options[serviceSettings];

   const existingServices = serviceDataState?.find((serv) => serv.service === serviceSettings && serv.customerId === CUSTOMER_ID);

   useEffect(() => {
      dispatch({
         type: 'INITIAL_STATE',
         payload: { existingServices, questions, selectedCatagoryOptions },
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [questions]);

   useEffect(() => {
      const options = {};
      questionRef.current.forEach((obj) => {
         if (obj) {
            Object.entries(obj).forEach(([key, value]) => {
               options[key] = value;
            });
         }
      });

      setSelectedOptions(options);
   }, [questionRef.current, questions, isFetch]);

   const data = {};

   const keys = Object.keys(state);

   keys.forEach((key) => {
      data[key] = { [selectedOptions[key]]: state[key][selectedOptions[key]] };
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatchServiceData({
         type: 'ADD_SERVICES_DATA',
         payload: {
            customerId: CUSTOMER_ID,
            service: serviceSettings,
            ...data,
         },
      });
   };

   return (
      <Stack spacing={3} sx={{ bgcolor: 'white', padding: 4, flex: 1, width: '100%' }}>
         <Stack>
            <Typography component="p" fontSize={22} fontWeight="500">
               {doUpperLower(serviceSettings)} - Service Costs
            </Typography>
            <Typography component="span" fontSize={14} color="gray">
               Settings for your {doUpperLower(serviceSettings)} options
            </Typography>
         </Stack>
         <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {questions.map((q, i) => (
               <Question
                  quesitionName={q.question}
                  questionId={q.questionId}
                  key={i}
                  ref={(rl) => {
                     questionRef.current[i] = rl;
                  }}
                  options={selectedCatagoryOptions}
                  serviceSettings={serviceSettings}
                  setIsFetch={setIsFetch}
               />
            ))}
         </List>
         <Button type="button" variant="contained" onClick={handleSubmit}>
            Submit
         </Button>
      </Stack>
   );
}
