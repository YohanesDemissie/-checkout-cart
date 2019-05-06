import React from 'react';

class TableData extends React.Component {
  render() {
  return (
      <p>{this.props.data}</p>
    )
  }
}

class TableTitle extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.title}</h2>
      </div>
    )
  }
}

class SearchMatch extends React.Component {
  render() {
    return (
      <div>
        <p> Match: {this.props.match}</p>
      </div>
    );
  }
};

// Table Component
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsTitle: [],
      search: [],
      searchterm: this.props.searchTerm,
      key: '',
    }
  }

//    rowsTitle = [];
//     search = [];
//  searchterm = this.props.searchTerm; // need this or it doesnt work
//  key = '';

//   results(e){
//     this.props.data.forEach(function (results) {

//     if (results.title.toLowerCase().indexOf(this.searchterm.toLowerCase()) === -1 &&
//       results.tags.toLowerCase().indexOf(this.searchterm.toLowerCase()) === -1
//     )
//       return;

//     // need to grab the correct match
//     if (results.title.toLowerCase().indexOf(this.searchterm.toLowerCase()) === -1) {
//       var m = results.tags.toLowerCase().split(' ');
//       for (var i in m)
//         if (m[i].indexOf(this.searchterm.toLowerCase()) !== -1)
//           var key = m[i];
//     } else {
//       key = results.title.toLowerCase();
//     }
//     this.rowsTitle.push(<TableTitle title={results.title} />);
//     if (this.searchterm != '')
//       this.rowsTitle.push(<SearchMatch match={key} />);
//     this.rowsTitle.push(<TableData data={results.content} />);
//   }
// )};

  render() {
    // We need to get each row and store it in an array
    var rowsTitle = [];
    var searchterm = this.props.searchTerm;

    this.props.data.forEach((result) => {

        if (result.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 &&
          result.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
        )
          return;

        // need to grab the correct match
        if (result.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1) {
          var m = result.tags.toLowerCase().split(' ');
          for (var i in m)
            if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
              var key = m[i];
        } else {
          key = result.title.toLowerCase();
        }
        rowsTitle.push(<TableTitle title={result.title} />);
        if (searchterm != '')
          rowsTitle.push(<SearchMatch match={key} />);
        rowsTitle.push(<TableData data={result.content} />);
      }
      );


    // Then render all. Render using childs. Send them prop.title and prop.data
    return (
      <div>
        {rowsTitle}
      </div>
    );
  }
}

// App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterText2: '',
      userInput: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  handleUserInput(filter) {
    this.setState({
      filterText: filter,
      userInput: ''
    });
  }

  filterList(event, userInput) {
    // console.log(userInput, 'TYPINGGG')
    this.props.userInput(event.target.value);
  }

  render() {
    return (
      <div>
        <Search
          searchTerm={this.state.filterText}
          userInput={this.handleUserInput}
         >
        </Search>
          <Table searchTerm = {this.state.filterText} data = {this.props.data} />
      </div>
    );
  }
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.filterList = this.filterList.bind(this);
  }
  filterList (event) {
    // console.log(this.props.userInput, 'TYPING')
    this.props.userInput(event.target.value);
  }

  render () {
    return (
      <input type="text"
        placeholder="Start Typing"
        value={this.props.searchTerm}
        onChange={this.filterList} autoFocus>
      </input>
    );
  }
};


// JSON
var DATA = [{
  "title": "Binding",
  "tags": "Binding Hiding Miding Sliding SAVE",
  "content": "This is the binding content area where information about binding is shown"
}, {
  "title": "Constant",
  "tags": "Math bath slather calf save",
  "content": "This is the Constant content area where information about Constant is shown"
}, {
  "title": "Numbers",
  "tags": "Happy birthday sir and maam",
  "content": "This is the Numbers content area where information about Numbers is shown"
}];

export default function Searching(){
  return(
  <App data={DATA} />
  )
};


// Render
// React.render(<App data = {DATA} />, document.getElementById("app"));