import { Component } from 'react';

/** header에 해당하는 Component */
class Subject extends Component {
    render() {
      return(
        <header>  
          <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
}

export default Subject;