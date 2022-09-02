import { Component } from 'react';

/** Nav에 해당하는 Component */
class TOC extends Component {
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i<data.length) {
        //console.log(data[i].id);    1, 2, 3
        lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              //console.log(e.target.dataset.id); 1, 2, 3
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>);
        i += 1;
      }
      return (
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
}

export default TOC;