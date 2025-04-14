## How autentication/signin/signup precess Works ##
1. The user comes to your website (courses.com)
2. The user sends a request to /signin with their username and password. 
3. The user gets back a token
4. In every subsequent request, the user sends the token to identify it self to the backend.

*this above process is to ensure that we'ren't sending the username & pass for evy req.*

