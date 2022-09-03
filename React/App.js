import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import TOC from './components/TOC';
import Control from './components/Control';


class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;  //이 객체는 state로 안 하는 이유 : UI에 전혀 영향을 주지않는 객체이므로, 불필요한 rendering을 줄이기 위해서 (크게 상관은 없음)
    this.state = {
      mode:'welcome',
      selected_contents_id:2,   // 기본값을 2로 정함
      subject:{title:"WEB", sub:"world wide web!"},
      welcome:{title:"React", desc:"Hello React!!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'HTML is for interactive'}
      ]
    }
  }
  getContent() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add state contents
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;  //max id값 증가
        // this.state.contents.push({
        //   id:this.max_content_id, title:_title, desc:_desc}
        //   );
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );  // concat()을 사용하면 return값이 존재함
        this.setState({
          contents : _contents,
          mode:'read',
          selected_contents_id:this.max_content_id
        });
      }.bind(this)} ></CreateContent>
    }
    else if(this.state.mode === 'update') {
      //console.log('Update');
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents); //_content 배열을 복사
          var i = 0;
          while(i<_contents.length){
            if(_contents[i].id === _id){              
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i += 1;
          }
          this.setState({
            contents : _contents,
            mode:'read'
          });
      }.bind(this)} ></UpdateContent>
    }
    return _article;
  }
  /**선택된 list의 id값을 return해주는 함수 */
  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_contents_id) {
        return data;
      }
      i += 1;
    }
  }
  render() {
    console.log('App render!');
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){   //클릭되었을 때 어떤 함수를 실행시킬지
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>
        </Subject>

        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_contents_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('Really Delete?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length) {
                if(_contents[i].id === this.state.selected_contents_id) {
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('Delete!');
            }
          } else{
            this.setState({
              mode:_mode
            }); 
          }
             
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
