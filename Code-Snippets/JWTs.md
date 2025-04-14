# JWT: Json Web Tokens ##

### Problem with `stateful` tokens (normal tokens) 
By stateful here, we mean that `we need to store these tokens` in a variable right now (and
eventually in a database).

### Problem
The problem is that we need to every time the user wants to `send a request to the database`
hit an `authenticated endpoint`.

### JWTs
JWTs, or JSON Web Tokens, are a compact and `self-contained` way to represent information
between two parties. They are commonly used for authentication and information exchange in
web applications.

`JWTs are Stateless`: JWTs contain all the information needed to authenticate a request, so the
server doesn't need to store session `data`. All the data is stored in the token itself.