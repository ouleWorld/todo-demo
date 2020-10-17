import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./components/Home"
import Todo from "./components/Todo"
import TodoDetail from "./components/TodoDetail"

class App extends Component {
    render() {
        return (
            // BrowserRouter 会使用 HTML5 的 history API 渲染单页路由
            <Router>
                {/*Router 只能有一个子元素*/}
                {/*也可以放一个 Switch 组件*/}
                <div>
                    {/*Route 组件用来匹配 location.path 的值, 并且渲染相应的组件 */}
                    {/*exact 表示路径完全匹配时才算匹配*/}
                    {/*比如 /todo/1 与 /todo 并不是完全匹配, 与 /todo/:id 完全匹配*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/todo" component={Todo} />
                    <Route path="/todo/:id" component={TodoDetail} />
                </div>
            </Router>
        )
    }
}

export default App
