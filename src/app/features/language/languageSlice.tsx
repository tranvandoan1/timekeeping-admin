import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataES, dataVN } from '../../../assets/language/dataLanguage';
export const setLanguage = createAsyncThunk(
    'setLanguage',
    async (data: string) => {
        localStorage.removeItem('language')
        if (data == 'es') {
            localStorage.setItem('language', JSON.stringify('es'))
            return {
                language: data,
                data: dataES
            }
        } else {
            localStorage.setItem('language', JSON.stringify('vn'))
            return {
                language: data,
                data: dataVN
            }
        }
    }
)
const checkLanguage = () => {
    const getLanguageLoca:any = localStorage.getItem('language')
    if (getLanguageLoca == null || JSON.parse(getLanguageLoca) == 'vn') {
        return {
            language: JSON.parse(getLanguageLoca),
            data: dataVN
        }
    } else {
        return {
            language: JSON.parse(getLanguageLoca),
            data: dataES
        }
    }
}
const languageSilce = createSlice({
    name: 'language',
    initialState: {
        value: checkLanguage(),
        loading: false
    },
    reducers: {
        // uploadLanguage(state, action) {
        //     state.loading=true
        //     state.value=
        // }
    },
    extraReducers: (build) => {
        build.addCase(setLanguage.fulfilled, (state: any, action: any) => {
            state.loading = true
            state.value = action.payload
        })
        // build.addCase(setLanguage.rejected, (state: any, action: any) => {
        //     state.loading = false
        //     state.value = {}
        // })
    }
})
// export const {uploadLanguage } = counterSlice.actions
export default languageSilce.reducer