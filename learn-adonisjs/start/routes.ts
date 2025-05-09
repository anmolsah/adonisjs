/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router
  .get('/movies/my-awesome-movie', async (ctx) => {
    return ctx.view.render('pages/movies', { movie: 'my awesome movies' })
  })
  .as('movies.show')

//   router.get('/movies', () => {}).as('movies.index')
// router.get('/movies/my-awesome-movie', () => {}).as('movies.show')
// router.get('/movies/create', () => {}).as('movies.create')
// router.post('/movies', () => {}).as('movies.store')
// router.get('/movies/my-awesome-movie/edit', () => {}).as('movies.edit')
// router.put('/movies/my-awesome-movie', () => {}).as('movies.update')
// router.delete('/movies/my-awesome-movie', () => {}).as('movies.destroy')
