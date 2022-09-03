import { Component } from 'react';
/*  form태그의 action="" 은 form에서 작업을 수행하고 어디 페이지로 넘어갈지를 정함
    method=""는 post방식, get방식 중에 어떤 식으로 정보를 넘길지를 정함
    onSubmit={}는 html의 form태그의 기본 형식인데 submit을 하게되면 어떤 함수를 실행할지
    
    submit 버튼을 누르면 onSubmit이 실행이 되고 App.js에 있는 CreateContntet에
    onSubmit이라는 함수를 만들고 여기서 props로 받아와 함수를 실행, 함수에 대한 정의는 App.js에서
    */

/** article에 대한 Component */
class CreateContent extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2> 
          <form action="/create_process" method="post" 
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}>
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit" value="Submit"></input>
            </p>
          </form>
        </article>
      );
    }
}

export default CreateContent;