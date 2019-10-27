import React, { Component } from 'react'
import Todolist from './Todolist/Todolist'
import Todoinput from './Todolist/Todoinput'

export default class App extends Component {
    constructor(){
        super();
        let todo = JSON.parse(localStorage.getItem('todo'));
        if(todo == null){
            this.state = {
                datalist:[]
            }
        }
        else{
            this.state={
                datalist:todo
            }
        }
    }
    //定义状态
    //添加
    addItem = (data)=>{
        let d = {'key':data,'tar':0};
        this.setState({
            datalist:[...this.state.datalist,d]
        })
    }
    //删除
    delItem = (index)=>{
        let datalist = [...this.state.datalist];
        datalist.splice(index,1);
        this.setState
        ({
            datalist:datalist
        })
    }
    //改变数据的标志值，实现上下切换
    chaItem = (index)=>{
        let datalist=[...this.state.datalist];
        if(datalist[index].tar===1){
            datalist[index].tar=0;
            this.setState({
                datalist:datalist
            })
        }
        else{
            datalist[index].tar=1;
            this.setState({
                datalist:datalist
            })
        }
    }

    render(){
        //调用子组件
        return (
            <div>
                <Todoinput add = {this.addItem}/>
                <Todolist del={this.delItem} cha={this.chaItem} datalist={this.state.datalist}/>
            </div>
        )
    }
}
