import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
    const data = ref(null);

    const getData = async (url) => {
        try {
            const answer = await axios.get(url);
            data.value = answer.data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        data,
        getData,
    }
}