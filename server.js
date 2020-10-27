const express = require('express')    // 使用commonjs全局引入express
const app = express()
const port = 3000   // 设置端口号
const mysql = require('mysql')
app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movie'
})
  

connection.connect()
// 轮播图
app.get('/slideshow', (req, res) => {
    connection.query('select * from slideshow  limit 6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/slideshow1', (req, res) => {
    connection.query('select * from slideshow  limit 6,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/slideshow2', (req, res) => {
    connection.query('select * from slideshow  limit 12,8', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
// 新闻页面
app.get('/new_top', (req, res) => {
    connection.query('select * from new_top ', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/new_bottom', (req, res) => {
    connection.query('select * from new_bottom where mold='+req.query.id, function (err, result) {
        const obj={
            status: 200,
            data: result
          
        }
        res.json(obj)
    })
}); 
// 评论页面
app.get('/discuss', (req, res) => {
    connection.query('select * from discuss', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
// 大片
app.get('/tract', (req, res) => {
    connection.query('select * from drama limit 6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/tract2', (req, res) => {
    connection.query('select * from drama limit 6,4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/tract3', (req, res) => {
    connection.query('select * from drama limit 10,4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/tract4', (req, res) => {
    connection.query('select * from drama limit 14,4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/tract5', (req, res) => {
    connection.query('select * from drama limit 18,4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/tract6', (req, res) => {
    connection.query('select * from drama limit 22,4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
// 文字
app.get('/essay', (req, res) => {
    connection.query('select * from essay limit 4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/essay1', (req, res) => {
    connection.query('select * from essay limit 4,3', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/essay2', (req, res) => {
    connection.query('select * from essay limit 7,8', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/essay3', (req, res) => {
    connection.query('select * from essay limit 15,3', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
// 首页
app.get('/index', (req, res) => {
    connection.query('select * from message  limit 3', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口

app.get('/index2', (req, res) => {
    connection.query('select * from message  limit 4,4', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/index3', (req, res) => {
    connection.query('select * from exclusive', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/index4', (req, res) => {
    connection.query('select * from message  limit 8,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/index5', (req, res) => {
    connection.query('select * from message  limit 14,3', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/index6', (req, res) => {
    connection.query('select * from viewpoint', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
// 电影号开始
app.get('/index7', (req, res) => {
    connection.query('select * from graphic limit 1,3', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
app.get('/graphic', (req, res) => {
    connection.query('select * from graphic', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
}); 
//电影号结束
// 电影百科
app.get('/index8', (req, res) => {
    connection.query('select * from film limit 9', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/film', (req, res) => {
    connection.query('select * from film limit 6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/film2', (req, res) => {
    connection.query('select * from film limit 6,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/film3', (req, res) => {
    connection.query('select * from film limit 12,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/film4', (req, res) => {
    connection.query('select * from film limit 18,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
// 电影百科结束
app.get('/index9', (req, res) => {
    connection.query('select * from film limit 9,9', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/index10', (req, res) => {
    connection.query('select * from film limit 24,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/index11', (req, res) => {
    connection.query('select * from film limit 30,6', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/index12', (req, res) => {
    connection.query('select * from film limit 36,10', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.get('/index13', (req, res) => {
    connection.query('select * from film limit 46,10', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))   // 监听端口