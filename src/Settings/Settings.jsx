import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { questions } from '../constant/SettingsQ';
import SelectDropDown from './SelectDropDown';
import Catagory from './SevicingCost/Catagory';

export default function Settings() {
   const [serviceSettings, setServiceSettings] = useState('tiles');
   const selectedCatagoryQuestions = questions[serviceSettings];

   return (
      <>
         <Stack direction="row" justifyContent="flex-end" alignItems="center" my={6} spacing={2}>
            <Typography variant="caption" fontSize={20} fontWeight="600">
               Settings
            </Typography>
            <SelectDropDown
               menuItems={[
                  'vanities',
                  'tiles',
                  'bathroom-faucets',
                  'kitchen-faucets',
                  'shower-kit',
                  'cabinets',
                  'countertop',
                  'flooring',
                  'bath-tub',
               ]}
               value={serviceSettings}
               onChange={(e) => setServiceSettings(e.target.value)}
            />
         </Stack>
         <Stack direction="row" sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap-reverse', gap: 5 }}>
            <Catagory questions={selectedCatagoryQuestions} serviceSettings={serviceSettings} />
         </Stack>
      </>
   );
}
