import { db } from '../utils/db'
const express = require('express')
const router = express.Router()

/* 查询数据 */
router.get('/notes', function (req, res) {
  db.all("SELECT * FROM notes", function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

/* 新增数据 */
router.post('/notes', function (req, res) {
  db.run("INSERT INTO notes(content) VALUES (?)", [req.body.content], function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({ id: this.lastID });
    }
  });
});

/* 更新数据 */
router.post('/notes/edit', function (req, res) {
  console.log(req.body);
  db.run("UPDATE notes SET content = ? WHERE id = ?", [req.body.content, req.body.id], function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({ id: req.body.id });
    }
  });
});

/* 删除数据 */
router.post('/notes/delete', function (req, res) {
  console.log(req.body.id);
  db.run("DELETE FROM notes WHERE id = ?", [req.body.id], function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({ id: req.params.id });
    }
  });
});

module.exports = router
