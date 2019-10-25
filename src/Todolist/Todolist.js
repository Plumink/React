import React, { Component } from 'react'
import './todo.css'

export default class Todolist extends Component {
    render() {
        const {datalist} = this.props;
        //对调用的数据进行解构
        return(
            <div className='bb'> 
                <div className='bb1'>
                    <h2>正在进行 <span style={{float:"right",color:"#fff"}}>{this.props.tar1}</span> </h2>
                    <ul>
                        {
                           datalist.map((item,idx)=>{
                               if(item.tar == 0){
                                   console.log(item.key);
                                   return(
                                       <li id='word'>
                                           <input style={{float:'left'}} type="checkbox" onClick={()=>this.props.cha(idx)}/>
                                            <p style={{float:'left'}}>{item.key}</p>
                                            <button style={{float:'right'}} onClick={()=>this.props.del(idx)}>删除</button>
                                       </li>
                                   )
                               }
                               return "";
                           })
                        }
                    </ul>
                    <h2>已经完成 <span style={{float:"right",color:"#fff"}}>{this.props.tar2}</span> </h2>
                    <ul>
                        {
                            datalist.map((item,idx)=>{
                                if(item.tar == 1){
                                    return(
                                        <li id='word'>
                                            <input style={{float:'left'}} type="checkbox" checked='checked' onchange="update(0,'done',false)" onClick={()=>this.props.cha(idx)}></input>
                                            <p style={{float:'left'}}>{item.key}</p>
                                            <button style={{float:'right'}} onClick={()=>this.props.del(idx)}>删除</button>
                                        </li>
                                    )
                                }
                                return "";
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
