export const state = () => ({
    list: null
})

export const mutations = {

    GET_TXN(state, playload) {
        state.list = playload
    },

}

export const actions = {
    async gettransaction({ commit }, ReqData) {
        try {
            await this.$axios.post('api/transaction', ReqData).then(res => {
                commit('GET_TXN', res.data)
            })

        } catch (e) { }
    },
}