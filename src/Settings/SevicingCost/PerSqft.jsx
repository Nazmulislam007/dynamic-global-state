import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Input, Stack } from '@mui/material';
import { useGlobalState } from '../../Context/GlobalStateProvider';

export default function PerSqft({ id, questionId, perSqft, totalSqft, activeOption }) {
   const { dispatch } = useGlobalState() || {};

   const handleChange = (e) => {
      dispatch({
         type: 'HANDLE_CHANGE_INCREMENT_VALUE',
         payload: {
            id,
            questionId,
            activeOption,
            name: e.target.name,
            value: e.target.value,
         },
      });
   };

   const deleteIncreBtn = () => {
      dispatch({
         type: 'DELETE_INCREMENT_STATE',
         payload: { id, questionId, activeOption },
      });
   };

   return (
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} position="relative" minWidth={250}>
         <DeleteIcon
            sx={{ position: 'absolute', right: 10, top: 10, color: '#e91e63', fontSize: 22, cursor: 'pointer' }}
            onClick={deleteIncreBtn}
         />
         <Stack>
            <Box fontWeight={500} fontSize={13} width="80px" lineHeight="15px" mb="2px">
               For sq. ft at or above
            </Box>
            <Stack direction="row" gap={1} alignItems="center">
               <Input
                  name="totalSqft"
                  disableUnderline
                  sx={{ border: '1px solid', padding: '4px 0 4px 15px', width: 80 }}
                  value={totalSqft || ''}
                  onChange={handleChange}
               />
               <Box fontWeight={500}>charge</Box>
            </Stack>
         </Stack>
         <Stack>
            <Box fontWeight={500} fontSize={13} width="90px" lineHeight="15px" mb="2px">
               Price per Square foot
            </Box>
            <Stack direction="row" gap={1} alignItems="center" position="relative">
               <Box sx={{ position: 'absolute', left: 8 }}>$</Box>
               <Input
                  name="perSqft"
                  disableUnderline
                  sx={{ border: '1px solid', padding: '4px 0 4px 20px', width: 80 }}
                  value={perSqft || ''}
                  onChange={handleChange}
               />
               <Box fontWeight={500}>per square foot</Box>
            </Stack>
         </Stack>
      </Stack>
   );
}
