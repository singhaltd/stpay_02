const states = {
    userData: null
}

const mutation = {

}

const actions = {
    async login({ commit }, ReqData) {
        try {
            await this.$api.post('/auth', ReqData).then(res => {
                console.log(res)
            })
        } catch (e) { }
    },
    async register({ commit }, ReqData) {
        try {
            await this.$api.post('/register', ReqData).then(res => {
                console.log(res)
            })
        } catch (e) { }
    }
}

export default {
    states,
    mutation,
    actions
}