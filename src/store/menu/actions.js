import {SET_MENU} from '../mutationTypes';

export default {
    fetchMenu({commit}) {
        return this._vm.$axios.get('/menu.json').then(response => {
            commit(SET_MENU, response.data);
        });
    },
};