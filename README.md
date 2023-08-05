# coleccion-discos

## /artists:
GET: get all artists

POST: create artist from query
{name: ""}


### /artists/:artist_id:

GET: get artist that matches the id

PUT: edit artist that matches the id
{name: ""}

DELETE: delete artist that matches the id

## /albums

GET: get all albums

POST: create new album from query
{artist_name: "", album_title: ""}

### /albums/:album_id

GET: get album that matches the id

PUT: edit album that matches the id
{artist_name: "", album_title: ""}

DELETE: delete album that matches the id

## /users

GET: get all users

POST: create user from query
{user_name: ""}

### /users/:user_id

GET: get user that matches the id

PUT: edit user that matches the id
{user_name: ""}

DELETE: delete user that matches the id

### /users/:user_id/collection

GET: get all albums linked to that particular user

POST: add an album to a user's collection
{album_id: ""}



