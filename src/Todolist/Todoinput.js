import React, { Component } from 'react'
import './todo.css'

export default class Todoinput extends Component {
    //定义键盘点击事件函数
    handleInput =(e)=>{
        if(e.keyCode == 13){
            if(e.target.value !== ''){
                this.props.add(e.target.value);
                e.target.value = '';
            }else{
                alert("请输入内容！");
            }
        }
    }

    render() {
        return (
            <div className="total">
                <div className="total1">
                    <h1 >ToDoList</h1>
                    <input onKeyDown={this.handleInput} placeholder="添加ToDo"/>
                </div>
            </div>
        )
    }
}
