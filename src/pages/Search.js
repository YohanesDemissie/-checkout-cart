import React from 'react';

class TableData extends React.Component {
  render() {
  return (
    <div>
      <img src={this.props.src} alt={this.props.alt}/>
      <p>{this.props.data}</p>
    </div>
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
      resultsTitle: [],
      resultsImg: [],
      search: [],
      key: '',
    }
  }

  render() {
    // We need to get each row and store it in an array
    const resultsTitle = [];
    const searchterm = this.props.searchTerm

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
        //MEAT AND POTATOS OF RENDERING FINAL MATCH
        resultsTitle.push(<TableTitle title={result.title} />);
        if (searchterm != '')
          resultsTitle.push(<SearchMatch match={key} />);
        resultsTitle.push(<TableData data={result.content} alt={result.title} src={result.imgURL}/>);
      }
    );


    // Then render all. Render using childs. Send them prop.title and prop.data
    return (
      <div>
        {resultsTitle}
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
          <Table searchTerm={this.state.filterText} data={this.props.data} />
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
  "imgURL": "https://cms.qz.com/wp-content/uploads/2018/05/china-pandas-eyes-turned-white-in-sichuan-2018-e1525405988661.jpg?quality=75&strip=all&w=410&h=231",
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