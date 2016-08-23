const Koa = require('koa')

const router = require('koa-router')()

const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use(async(ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()
})

router.get('/hello/:name', async(ctx, next) => {
    var name = ctx.params.name
    ctx.response.body = `<h1>Hello, ${name}!</h1>`
})

router.get('/', async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"/></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `
})

router.post('/signin', async(ctx, next) => {
    var 
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''

    console.log(`signin with name: ${name}, password: ${password}`)

    if(name === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`
    } else {
        ctx.response.body = `<h1>Login faild</h1>
        <p><a href="/">Try again</a></p>`
    }
})

app.use(router.routes())
/*
app.use(async(ctx, next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    console.log(`Time: ${ms}ms`)
})

app.use(async(ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello, koa2!</h1>'
})

app.use(async(ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next()
    } else {
        ctx.response.status = 403
    }
})
*/
app.listen(3000)
console.log('app started at port 3000....')