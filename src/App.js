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

    render() {
        let todo = localStorage.setItem('todo',JSON.stringify(this.state.datalist));
        //设置tar1,tar2两个计数值，统计上下两栏的数量
        let tar1 = 0;
        let tar2 = 0;
        //遍历对标志值进行判断
        this.state.datalist.map(item => {
            if(item.tar === 1){
                tar2++;
            }
            else{
                tar1++;
            }
        });
        //调用子组件
        return (
            <div>
                <Todoinput add = {this.addItem}/>
                <Todolist tar1={tar1} tar2={tar2} del={this.delItem} cha={this.chaItem} datalist={this.state.datalist}/>
            </div>
        )
    }
}
