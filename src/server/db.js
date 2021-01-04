const mysql = require('mysql');

/* 登录阿里云香港虚拟主机中数据库时所需的信息 */
const mysqlConfig = {
  host: 'hdm721879549.my3w.com',
  user: 'hdm721879549',
  password: 'Grayfox1',
  database: 'hdm721879549_db',
  port: '3306'
}
/* 创建新表 */
const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true // 多语句查询
});
var setValue = function () {
  pool.getConnection((err, connection) => {
    var sql = 'INSERT INTO test(id, name) VALUES (1, "blog")'
    connection.query(sql, (err, result) => {
      console.log(result);
      connection.release();
    });
  });
};
// 进入到表test中 设置新键值对1 blog
setValue();

// 查询数据，？ 的值填入 connection.jquery 的第二个参数（数组）中
// WHERE id = ? AND name = ? ---> connetion.query(sql, [1, "blog"], () => )
var getValue = function () {
  pool.getConnection((err, connection) => {
    var sql = 'SELECT * FROM test WHERE id = ?'
    connection.query(sql, [1], (err, result) => {
      console.log(result);
      connection.release();
    })
  })
}
getValue();

/*
$ node db.js
[ RowDataPacket { id: '1', name: 'blog' } ]
*/

// 更新数据
var updValue = function () {
  pool.getConnection((err, connection) => {
    var sql = 'UPDATE test SET name = ? WHERE id = ?'
    connection.query(sql, [22, 1], (err, result) => {
      console.log(result);
      connection.release();
    })
  })
}
updValue();

// 删除数据
var delValue = function () {
  pool.getConnection((err, connection) => {
    var sql = 'DELETE FROM test WHERE id = ?'
    connection.query(sql, [1], (err, result) => {
      console.log(result);
      connection.release();
    })
  })
}
delValue();
