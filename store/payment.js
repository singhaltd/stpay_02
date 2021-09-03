export const state = () => ({
    detail: null,
    hislist: null
})

export const mutations = {

    GET_WATER_DETAIL(state, playload) {
        state.detail = playload
    },
    GET_HISLIST(state, playload) {
        state.hislist = playload
    }

}

export const actions = {
    async createAccount({ commit }, ReqData) {
        try {
            await this.$axios.post('api/account', ReqData).then(res => {
                // commit('GET_ACCOUNT', res.data)
                console.log(res.data)
            })
        } catch (e) { }
    }
}