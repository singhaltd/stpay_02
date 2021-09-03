export default function ({ $axios, redirect }, inject) {
    // $axios.onRequest(config => {
    //     console.log('Making request to ' + config.url)
    // })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }

        if (error.response.status === 401 && error.response.statusText === 'invalidToken') {
            // clear auth here (vuex, local storage, cookies) how?
            redirect('/login')
        }
    })
}