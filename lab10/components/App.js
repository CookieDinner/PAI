import React from "react"
import Header from "./Header"
import List from "./List"
import ListItem from "./ListItem"
import Filter from "./Filter"
import itemsList from "./itemsList"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            visibility: false
        }
        this.handleVisibility = this.handleVisibility.bind(this)
    }
    handleVisibility(){
        this.setState(prevState => {
                return {
                    visibility: !prevState.visibility
                }
        })
    }
    render(){
        return (
            <div className="ToDoList">
                <Header/>
                <main>
                    <Filter handleChange={this.handleVisibility} checked={this.state.visibility}/>
                    <List visibility={this.state.visibility}/>
                </main>
            </div>
        )
    }
}
export default App