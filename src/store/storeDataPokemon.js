import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useStoreDataPokemon = defineStore('pokemons', () => {
    //Estos valores definen según el númer el índice del pokemon al que corresponden
    const tierOU = [51, 94, 110, 113, 121, 130, 141, 149, 196, 212, 227, 230, 233, 242, 248, 279, 286, 324, 376, 392, 398, 445, 448, 454, 461, 462, 468, 472, 473, 474, 479, 497, 530, 534, 537, 555, 563, 579, 591, 598, 609, 612, 620, 635, 637];
    const tierUU = [3, 9, 31, 34, 49, 59, 62, 68, 82, 132, 135, 143, 160, 169, 178, 197, 205, 207, 214, 232, 260, 308, 330, 342, 350, 356, 373, 395, 407, 424, 429, 437, 442, 450, 464, 469, 479, 526, 553, 561, 593, 621, 625, 630, 632];
    const tierNU = [36, 42, 65, 73, 76, 80, 91, 101, 107, 134, 157, 171, 184, 195, 199, 208, 211, 221, 226, 229, 237, 241, 254, 257, 272, 291, 302, 319, 334, 359, 423, 430, 435, 436, 452, 475, 478, 479, 503, 560, 571, 573, 589, 594, 604, 623];

    //Valores que contienen a los pokemones que se mostrarán en la app
    let modifierData = null; //Modifica la lista de filtro para dataPokemons
    const dataPokemons = ref(null); //Muestra (range) pokemones como máximo en el componente
    let answer = null;  //Contiene los 637 pokemones de la 5ta gen

    //cantidad de pokemones que se muestran en el panel
    let initial = 0
    let range = 80;

    //función que llena la solicitud de todos los pokemones hasta la 5ta generaión
    const getDataAllPokemon = async () => {
        try {
            answer = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=637');
            answer = answer.data.results;
            fillDataPokemons();
        } catch (error) {
            console.log(error);
        }
    }

    //función que controla la variable reactiva dataPokemons
    const modifierDataPokemons = () => {
        dataPokemons.value = modifierData.slice(initial, initial + range);
    }// Llena al modificador de filtro con todos los pokemones
    const fillDataPokemons = () => {
        modifierData = answer;
        modifierDataPokemons();
    }//Avnza 80 pokemones para mostrar
    const nextDataPokemons = () => {
        if (initial + range < modifierData.length) {
            initial += range;
            modifierDataPokemons();
        }
    }//Retrocede 80 pokemones para mostrar
    const previewDataPokemons = () => {
        if (initial > 0) {
            initial -= range;
            modifierDataPokemons();
        }
    }//Llena el modifier data con los pokemones Over Used
    const fillDataPokemonsWhitOU = () => {
        modifierData = answer.filter((element, index) => tierOU.includes(index + 1))
        initial = 0;
        modifierDataPokemons();
    }//Llena el modifier data con los pokemones Under Used
    const fillDataPokemonsWhitUU = () => {
        modifierData = answer.filter((element, index) => tierUU.includes(index + 1))
        initial = 0;
        modifierDataPokemons();
    }//Llena el modifier data con los pokemones Never Used
    const fillDataPokemonsWhitNU = () => {
        modifierData = answer.filter((element, index) => tierNU.includes(index + 1))
        initial = 0;
        modifierDataPokemons();
    }//Llena el modifier data con los pokemones Sin Tier
    const fillDataPokemonsWhitNullTier = () => {
        const reemplace = answer.filter((element, index) => !(tierOU.includes(index + 1) || tierUU.includes(index + 1) || tierNU.includes(index + 1)))
        modifierData = reemplace;
        initial = 0;
        modifierDataPokemons();
    }

    //función que selecciona la vista de los pokemones
    const selectedDataPokemons = (value) => {
        switch (value) {
            case 'All':
                fillDataPokemons();
                break;
            case 'OU':
                fillDataPokemonsWhitOU();
                break;
            case 'UU':
                fillDataPokemonsWhitUU();
                break;
            case 'NU':
                fillDataPokemonsWhitNU();
                break;
            case 'ST':
                fillDataPokemonsWhitNullTier();
                break;
        }
    }

    return {
        dataPokemons,
        getDataAllPokemon,
        fillDataPokemons,
        nextDataPokemons,
        previewDataPokemons,
        fillDataPokemonsWhitOU,
        fillDataPokemonsWhitUU,
        fillDataPokemonsWhitNU,
        fillDataPokemonsWhitNullTier,
        selectedDataPokemons,
    }
});