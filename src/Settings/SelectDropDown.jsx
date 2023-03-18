import { InputLabel, Stack } from '@mui/material';
import { CustomMenuItem, CustomSelect } from '../Custom/selectiStyle';
import { doUpperLower } from '../useUpperLower';

export default function SelectDropDown({ menuItems, label, initialVal, ...rest }) {
   return (
      <Stack>
         <InputLabel>{label}</InputLabel>
         <CustomSelect disableUnderline variant="standard" sx={{ padding: '2px 8px', width: '100%' }} {...rest}>
            {initialVal && <CustomMenuItem value={initialVal}>{initialVal}</CustomMenuItem>}
            {menuItems?.map((val, i) => (
               <CustomMenuItem value={val} key={i}>
                  {doUpperLower(val)}
               </CustomMenuItem>
            ))}
         </CustomSelect>
      </Stack>
   );
}
