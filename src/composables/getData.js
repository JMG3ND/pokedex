//Archivo js para hacer consultas a los servidores

import axios from "axios";
import { ref } from "vue";
//import { useStoreTier } from '../store/TierPokemmo'

export const useGetData = () => {
    const data = ref(null);
    //const { tierOU } = useStoreTier();

    const getData = async (url) => {
        try {
            const answer = await axios.get(url);
            data.value = answer.data;
        } catch (error) {
            console.log(error);
        }
    };

    //Esta función obtiene de la api los pokemones registrados como OU dentro del store TierPokemmo
    /*const getDataOU = async (url) => {
        try {
            const answer = await axios.get(url);
            answer.data.results = answer.data.results.filter((element, index) => tierOU.includes(index + 1));
            data.value = answer.data;
        } catch (error) {
            console.log(error);
        }
    }*/

    return {
        data,
        getData,
        //getDataOU,
    }
}