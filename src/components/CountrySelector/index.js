import { FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'

export default function CountrySelector({value, countries, handleOnChange}) {
    return <FormControl>
        <InputLabel htmlFor="country-selector" shrink>
            Quốc gia
        </InputLabel>
        <NativeSelect
            value={value} 
            onChange={ handleOnChange } 
            inputProps={{
                name: 'country',
                id: 'country-selector'
            }} 
        >
            {
                countries.map((country) => {
                    return <option key={country.ISO2} value={ country.ISO2.toLowerCase()}>{ country.Country }</option>
                })
            }
        </NativeSelect>
        <FormHelperText>Chọn Country</FormHelperText>
    </FormControl>;
}