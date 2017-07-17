import React, { Component } from 'react';
import './index.css';

class About extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 text-left'>
            <h1 className='intro-title'>About Me</h1>
            <p className='intro-content'>
              &nbsp;&nbsp;Hi！我是一名前端开发者，擅长语言JavaScript。就读于电子科技大学电子信息工程系本科，自学前端开发一年，目前正在找实习中...
              <br />
              &nbsp;&nbsp;本人自学过计算机数据结构和算法，对计算机基础知识有一定了解，前端既可以说是我的爱好，也可以说是我将来为之奋斗的方向。
              我喜欢用前端的知识编写出不同的网页、App，呈现给用户更好的体验。
              <br />
              &nbsp;&nbsp;由于经验有限，之前没有实习过，所以实战经验匮乏，目前一边找实习一边恶补自己的知识盲点，同时也在写一些小项目，希望能提高自己的编码能力和思想，找到一个好公司、好平台努力发展！
            </p>
          </div>
          <div className='col-md-4 profolio'></div>
        </div>
        <hr />

        <div className='row'>
          <div className='col-md-8'>
            <h1>项目列表</h1>
            <div className='list-group text-center'>
              <div className='col-md-6'>
                <a href="https://codepen.io/flyrk/full/Nbgpgv" className='list-group-item'>JavaScript计算器</a>
              </div>
              <div className='col-md-6'>
                <a href="https://codepen.io/flyrk/full/EmOPrG" className='list-group-item'>XO棋</a>
              </div>
            </div>
          </div>
        </div>
        <hr />

        
      </div>
    );
  }
}

export default About;
