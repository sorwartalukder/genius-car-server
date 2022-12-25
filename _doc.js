/*
create server road map
1. create project folder
2. npm init -y
3. npm install express
4. npm install cors
5. npm install mongodb
shortcut (npm install express cors mongodb)
6. npm install dotenv
7. git init
8. .gitignore(node_modules)
9. "scripts": {
     "start": "node index.js",
10. create .env file
11. add .gitignore(.env)
12. create mongoDb user
13. start mongoDb crud operation
    crud operation client link: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch\
    crud operation server link: https://www.mongodb.com/docs/drivers/node/current/usage-examples/

*/

/*
mongodb problem
create json data 67-2 time 12:49
error-> user is not allowed to do action [find] 67-3 time 02:19
*/

/*
jot token->
npm install jsonwebtoken; (sever)

const jwt = require('jsonwebtoken'); (index.js file )
ctrl+j -> node (enter)
require('crypto').randomBytes(64).toString('hex')
ACCESS_TOKEN_SECRET=require('crypto').randomBytes(64).toString('hex'); (.env)
send user client (login) to server
send access token sever to client;
send headers (authorization: access token)


function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' });
        }
        req.decoded = decoded;
        next()
    });
}

 const decoded = req.decoded;
            if (decoded.email !== req.query.email) {
                res.status(401).send({ message: 'unauthorized access email' })
            }

.then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })

*/


/*
add vercel config
add:"build": "node index.js", in package.json file
vercel
[
C:\projects\genius-car-server>vercel
Vercel CLI 28.4.12
? Set up and deploy “C:\projects\genius-car-server”? [Y/n] y
? Which scope do you want to deploy to? sorwartalukder
? Link to existing project? [y/N] n
? What’s your project’s name? genius-car-server
? In which directory is your code located? ./
]

https://vercel.com/sorwartalukder
select project
setting
add: Environment Variables
*/



// https://wokiee-demos.myshopify.com/