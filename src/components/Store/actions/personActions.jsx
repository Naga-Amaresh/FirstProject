export {removeperson} from "../Reducers/personSlice";
import axios from "../../../utils/axios";
import { loadperson } from "../Reducers/personSlice";

export const asyncloadperson = (id) => async(dispatch,getState)=>{
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
        const tvcredits = await axios.get(`/person/${id}/tv_credits`);
        const moviecredits = await axios.get(`/person/${id}/movie_credits`);
        const theUltimateDetails ={
            detail:detail.data,
            externalId:externalId.data,
            combinedcredits:combinedcredits.data,
            tvcredits:tvcredits.data,
            moviecredits:moviecredits.data,
        }
        dispatch(loadperson(theUltimateDetails));
    } catch (error) {
        console.error(error);
    }
}