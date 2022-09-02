import { Component } from 'react';
// a 태그를 클릭했을 때 function이 실행되면서 e.preventDefalut하고
// props중에 onChangeMode라는 것(함수)을 가져와서 함수니까 인자값을 보냄
/** header에 해당하는 Component */
class Control extends Component {
    render() {
      return(
        <ul>    
          <li><a href='./create' onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>

          <li><a href='./update' onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
}

export default Control;