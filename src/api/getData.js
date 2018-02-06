import fetch from './fetch'

export const friends = data => fetch('/friend', data, 'GET')

export const removeFriends = data => fetch('/friend', data, 'POST')

export const meaus = data => fetch('/meau', data, 'GET')

export const getUsers = data => fetch('/users', data, 'GET')
