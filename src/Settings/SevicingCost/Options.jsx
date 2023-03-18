import { CustomMenuItem, CustomSelect } from '../../Custom/selectiStyle';
import { doUpperLower } from '../../useUpperLower';

export default function Options({ questionId, options, setActiveOption, activeOption }) {
   return (
      <CustomSelect
         disableUnderline
         variant="standard"
         name={questionId}
         value={activeOption || 'free'}
         onChange={(e) => setActiveOption(e.target.value)}
         sx={{ fontWeight: '400', padding: '5px 10px', minWidth: 250 }}
      >
         {options.map((val, i) => (
            <CustomMenuItem value={val} key={i}>
               {doUpperLower(val)}
            </CustomMenuItem>
         ))}
      </CustomSelect>
   );
}
