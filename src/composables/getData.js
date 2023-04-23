//Archivo js para hacer consultas a los servidores

import axios from "axios";
import { ref } from "vue";
import { useStoreTier } from '../store/TierPokemmo'

export const useGetData = () => {

    const data = ref(null);
    const { tierOU } = useStoreTier();

    const getData = async (url) => {
        try {
            const answer = await axios.get(url);
            data.value = answer.data;

        } catch (error) {
            console.log(error);
        }
    };

    const getDataOU = async (url) => {
        try {
            const answer = await axios.get(url);
            data.value = answer.data
            data.value.results = answer.data.results.filter((element, index) => tierOU.includes(index + 1));
            console.log(data.value)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        data,
        getData,
        getDataOU,
    }
}