import React from 'react';


const DATA = [{
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

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: DATA,
      searchTerm : this.props.searchTerm
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //setting user input to JS Object
  handleChange(event) {
    this.setState({input: event.target.value});
    console.log(this.state.input, 'USER INPUT');
  }

  handleSubmit(event) {
    this.setState({data: event.target.value})
    event.preventDefault()
  }

  results(e) {
    DATA.map(e => {console.log(e.title)})
  }

  render() {
    // this.props.data(forEach)
    console.log(this.state.input, 'CHANGING')
    console.log(this.results())
    return(
      <div>
        <h1>Search Items</h1>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <button onSubmit={this.handleSubmit}>Search</button>
          {DATA.map(e =>
            <p>
              <b>{e.title}</b>: { e.content}
            </p>
          )}
      </div>
    )
  }
}

export default Search;
