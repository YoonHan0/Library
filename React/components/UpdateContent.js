import { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
      super(props);
      this.state={
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      };
      this.inputFormHandler = this.inputFormHandler.bind(this); //이렇게하면 함수를 바로 binding해줌
    }
    /**form태그에서 Update부분을 담당하는 함수 */
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
      // 위의 코드를 추가하면서 수정X 변경이 가능해짐
      // e.target.name을 하면 함수가 실행되는 위치의 tag의 name값(title인지 desc인지를 알 수 있음)
      // [e.target.name] 여기서 []는 최신문법
    }
    render() {
      console.log('UpdateContent render!');
      //console.log(this.props.data);
      return (
        <article>
          <h2>Update</h2> 
          <form action="/update_process" method="post" 
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title"
                value={this.state.title}  // 이렇게 값을 불러오기만 함
                onChange={this.inputFormHandler}
                ></input>
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description"
                value={this.state.desc} // 이렇게 값을 불러오기만 함
                onChange={this.inputFormHandler}
                ></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
}

export default UpdateContent;