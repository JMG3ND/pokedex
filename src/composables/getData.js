//Archivo js para hacer consultas a los servidores

import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {

    const data = ref(null);
    const loadData = ref(true);

    const getData = async (url) => {
        try {
            loadData.value = true;
            const answer = await axios.get(url);
            data.value = answer.data;
        } catch (error) {
            console.log(error);
        } finally {
            loadData.value = false;
        }
    };

    return {
        data,
        getData,
        loadData
    }
}