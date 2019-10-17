const db = wx.cloud.database()
function Crud () {}
Crud.prototype.create = function(table, data) {
  const promise = new Promise((resolve, reject) => {
    db.collection(table).add({
        data: data,
        success: res => {
          resolve(res)
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        },
        fail: err => {
          reject(err)
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    })
  return promise
}

Crud.prototype.remove = function (table, _id) {
  const promise = new Promise((resolve, reject) => {
    db.collection(table).doc(_id).remove({
        success: res => {
          resolve(res)
          console.error('[数据库] [删除记录] 成功：', res)
        },
        fail: err => {
          reject(err)
          console.error('[数据库] [删除记录] 失败：', err)
        }
      })
  })
  return promise
}

Crud.prototype.update = function (table, _id, data) {
  const promise = new Promise((resolve, reject) => {
    db.collection(table).doc(_id).update({
      data: data,
      success: res => {
        resolve(res)
        console.error('[数据库] [更新记录] 成功：', res)
      },
      fail: err => {
        reject(err)
        console.error('[数据库] [更新记录] 失败：', err)
      }
    })
  })
  return promise
}

Crud.prototype.set = function (table, _id, data) {
  const promise = new Promise((resolve, reject) => {
    db.collection(table).doc(_id).set({
      data: data,
      success: res => {
        resolve(res)
        console.error('[数据库] [更新记录] 成功：', res)
      },
      fail: err => {
        reject(err)
        console.error('[数据库] [更新记录] 失败：', err)
      }
    })
  })
  return promise
}

Crud.prototype.query = function (table, data = {}, page = 1, pageSize = 100, orderBy = '_id', desc = 'asc') {
  const promise = new Promise((resolve, reject) => {
    db.collection(table).where(data).skip((page - 1) * pageSize).limit(pageSize).orderBy(orderBy, desc).get({
      success: res => {
        resolve(res.data)
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        reject(err)
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  })
  return promise
}

Crud.prototype.query2 = function (table, data = {}, page = 1, pageSize = 100, orderBy = '_id', desc = 'asc',  orderBy2 = '_id', desc2 = 'asc') {
  const promise = new Promise((resolve, reject) => {
    db.collection(table).where(data).skip((page - 1) * pageSize).limit(pageSize).orderBy(orderBy, desc).orderBy(orderBy2, desc2).get({
      success: res => {
        resolve(res.data)
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        reject(err)
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  })
  return promise
}
module.exports = new Crud();
