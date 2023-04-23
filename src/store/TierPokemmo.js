import { defineStore } from "pinia";
import axios from "axios";
import { useGetData } from "../composables/getData";

//tierOU: [51, 94, 110, 113, 121, 130, 141, 149, 196, 212, 227, 230, 233, 242, 248, 279, 286, 324, 376, 392, 398, 445, 448, 454, 461, 462, 468, 472, 473, 474, 479, 497, 530, 534, 537, 555, 563, 579, 591, 598, 609, 612, 620, 635, 637],
//tierUU: [3, 9, 31, 34, 68, 82, 132, 135, 143, 160, 169, 178, 197, 232, 260, 308, 350, 356, 373, 395, 437, 4472, 450],
//tierNU: [36, 42, 107, 134, 157, 171, 184, 195, 237, 241, 254, 257, 272, 291, 435, 436, 452, 475],

export const useStoreTier = defineStore('tier', {
    state: () => ({
        allPokemons: null,
        tierOU: [51, 94, 110, 113, 121, 130, 141, 149, 196, 212, 227, 230, 233, 242, 248, 279, 286, 324, 376, 392, 398, 445, 448, 454, 461, 462, 468, 472, 473, 474, 479, 497, 530, 534, 537, 555, 563, 579, 591, 598, 609, 612, 620, 635, 637],
        tierUU: [3, 9, 31, 34, 49, 59, 62, 68, 82, 132, 135, 143, 160, 169, 178, 197, 205, 207, 214, 232, 260, 308, 330, 342, 350, 356, 373, 395, 407, 424, 429, 437, 442, 450, 464, 469, 479, 526, 553, 561, 593, 621, 625, 630, 632],
        tierNU: [36, 42, 65, 73, 76, 80, 91, 101, 107, 134, 157, 171, 184, 195, 199, 208, 211, 221, 226, 229, 237, 241, 254, 257, 272, 291, 302, 319, 334, 359, 423, 430, 435, 436, 452, 475, 478, 479, 503, 560, 571, 573, 589, 594, 604, 623],
    }),
    actions: {
        async getAllPokemos() {
            const dataAllPokemons = useGetData();
            await dataAllPokemons.getData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=637');
            this.allPokemons = dataAllPokemons.data.value.results;
            this.tierOU = this.allPokemons.filter((element, index) => this.tierOU.includes(index + 1));
            this.tierUU = this.allPokemons.filter((element, index) => this.tierUU.includes(index + 1));
            this.tierNU = this.allPokemons.filter((element, index) => this.tierNU.includes(index + 1));
        }
    }
})