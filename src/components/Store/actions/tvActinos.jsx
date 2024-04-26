export {removetv} from "../Reducers/tvSlice";
import axios from "../../../utils/axios";
import { loadtv } from "../Reducers/tvSlice";

export const asyncloadtv = (id) => async(dispatch,getState)=>{
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        const theUltimateDetails ={
            detail:detail.data,
            externalId:externalId.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find(m => m.type === "Trailer"),
            watchProviders:watchProviders.data.results.IN,      
        }
        dispatch(loadtv(theUltimateDetails));
    } catch (error) {
        console.error(error);
    }
}