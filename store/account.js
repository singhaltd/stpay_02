export const state = () => ({
    detail: null,
    list: null
})

export const mutations = {

    GET_ACCOUNT_DETAIL(state, playload) {
        state.detail = playload
    },
    GET_ACCOUNT(state, playload) {
        state.list = playload
    }

}

export const actions = {
    async getFcAccountDetail({ commit }, ReqData) {
        try {
            await this.$axios.post('api/acdetail', ReqData).then(res => {
                res.status == 200 ?
                    commit('GET_ACCOUNT_DETAIL', res.data['data']['Acvws-Acdcbird-Cust-Account-Full'])
                    : commit('GET_ACCOUNT_DETAIL', res.data['data']['FCUBS_ERROR_RESP'])

            })

        } catch (e) { }
    },
    async retries({ commit }, ReqData) {
        try {
            await this.$axios.get('api/acretries', ReqData).then(res => {
                commit('GET_ACCOUNT', res.data)
            })
        } catch (e) { }
    },
    async createAccount({ commit }, ReqData) {
        try {
            await this.$axios.post('api/account', ReqData).then(res => {
                // commit('GET_ACCOUNT', res.data)
                console.log(res.data)
            })
        } catch (e) { }
    }
}