import React from "react"
import ListItem from "./ListItem"
import itemsList from "./itemsList"
import Form from "./Form"

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            text: "",
            itemsListData: itemsList
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateText = this.updateText.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    handleChange(id){
        this.setState(prevState => {
            const newitemsListData = prevState.itemsListData.map(x => {
                if(x.id == id){
                    return {
                        id: x.id,
                        text: x.text,
                        checked: !x.checked
                    }
                }
                else
                    return x
            })
            return {
                itemsListData: newitemsListData
            }
        })
    }
    addItem(){
        this.setState(prevState => {
              let newitemsListData = prevState.itemsListData
              const lastid = prevState.itemsListData.length
              newitemsListData.push({
                  id: lastid,
                  text: prevState.text,
                  checked: false
              })
        })
        this.forceUpdate()
    }
    updateText(evt){
        const text = evt.target.value
        this.setState((prevState) => {
            return {
                itemsListData: prevState.itemsListData,
                text: text
            }
        })
    }
    render(){
        let listcomponents = this.state.itemsListData.map(x => {
            if(x.checked && this.props.visibility){}
            else if(x.checked)
                return (
                    <ListItem key={x.id} id={x.id} text={<strike>{x.text}</strike>} checked={x.checked} handleChange={this.handleChange}/>
                )
            else
                return (
                    <ListItem key={x.id} id={x.id} text={x.text} checked={x.checked} handleChange={this.handleChange}/>
                )
        })
        return (
            <div>
                <div className="list">
                    {listcomponents}
                </div>
                <Form addItem={this.addItem} updateText={this.updateText}/>
            </div>
        )
    }
}

export default List