/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(function () {
  Route.post('/auth', 'AuthController.login')
  Route.post('/authAd', 'AuthController.loginAd')
  Route.post('/logout', 'AuthController.logout')
  Route.post('/register', 'AuthController.register')
  Route.get('/usprofile', 'AuthController.uprofile')


  /// Account walkin settting
  Route.post('/acdetail', 'AccountsController.detail')
  Route.post('/account', 'AccountsController.store')
  Route.patch('/account', 'AccountsController.status')
  Route.get('/acretries', 'AccountsController.retries')



  Route.post('/transaction', 'TxAuthsController.transaction')


  
  Route.post('/payment', 'PaymentsController.payment')




  Route.get('/facebook/redirect', async ({ ally }) => {
    return ally
      .use('facebook')
      .redirect((redirectRequest) => {
        redirectRequest
          .param('access_type', 'offline')
          .param('prompt', 'select_account')
      })
  })
}).prefix('api/v1')