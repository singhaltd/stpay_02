const states = {
    list: null
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
}

export default {
    states,
    mutation,
    actions
}