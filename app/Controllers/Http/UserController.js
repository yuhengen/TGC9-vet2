'use strict'

const User = use('App/Models/User')

class UserController {
  register({ view }) {
    return view.render('users/register')
  }

  async processRegister({ response, request }) {
    let formData = request.post();
    let user = new User()
    user.username = formData.username
    user.email = formData.email
    user.password = formData.password

    await user.save()
    response.json(user)
  }

  login({ view }) {
    return view.render('users/login')
  }

  async processLogin({ auth, request }) {
    let formData = request.post();
    await auth.attempt(formData.email, formData.password)
    return "Login success"
  }
}

module.exports = UserController
