//touch main.js
//用以把Greeter模块返回的节点插入页面
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';                 //使用require导入css文件
render(
  <Greeter />, document.querySelector("#root")
);
