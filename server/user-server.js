module.exports = {
    get: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.body)
        dbInstance.get_user([req.body.username, req.body.password]).then(user=> {
            console.log('user retrieved', user)
                req.session.user={
                    id: user[0].id,
                    username: user[0].username, 
                    password: user[0].password
                }
            console.log('req.session', req.session.user)
            res.status(200).json({user: req.session.user})
        }).catch(error=>{'db error',error})
    },
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.body)
        dbInstance.create_user([req.body.username, req.body.password]).then(user=> {
            console.log('user registered', user)
                req.session.user={
                    id: user[0].id,
                    username: user[0].username, 
                    password: user[0].password
                }
            console.log('req.session', req.session.user)
            res.status(200).json({user: req.session.user})
        }).catch(error=>{'db error',error})
    },
    logout: (req, res, next) => {
        req.session.destroy();
        console.log('req.session', req.session)
        res.status(200).send();
    },
    books_out: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.body)
            dbInstance.books_out([req.body.uid]).then(books=> {
                
                res.status(200).json(books)
        }).catch(error=>{'db error',error})
    },
}