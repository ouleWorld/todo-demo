import Api from './api'

class TodoApi extends Api {
    add(data, callback) {
        // 使用 ajax 发送数据给服务器
        let path = '/add'
        this.post(path, data, callback)
    }

    delete(todoId, callback) {
        let path = '/delete/' + todoId
        this.get(path, callback)
    }

    update(todoId, data, callback) {
        let path = '/update/' + todoId
        this.post(path, data, callback)
    }

    all(callback) {
        let path = '/all'
        this.get(path, callback)
    }
}

export default TodoApi
