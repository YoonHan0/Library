import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import Content from './components/Content';
import TOC from './components/TOC';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
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
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_contents_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
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
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;