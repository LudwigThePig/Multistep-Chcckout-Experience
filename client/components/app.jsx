class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: true,
      form2: false,
      form3: false,
    }
  }
  render() {
    return (
      <div>
        <h1>Multi Part Checkout</h1>
        {this.state.form1 ? <Form1 /> : this.state.form2 ? <Form2 /> : this.state.form3 ? <Form3 /> : <Review />}
      </div>
    )
  }
}


class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email: '',
      password: ''
    }

    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value)
    return this.setState({
      [field]: value
    })
  }

  handleForm(e) {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <label>Name</label>
          <input 
          type="text" 
          name="name"
          value={this.state.name}
          onChange={this.handleChange} 
          ></input><br />

          <label>Email</label>
          <input 
            type="text" 
            name="email"
            value={this.state.email}
            onChange={this.handleChange} 
            ></input><br />

          <label>Password</label>
          <input 
          type="text" 
          name="password"
          value={this.state.password}
          onChange={this.handleChange} 
          ></input><br />

          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleForm}>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
      )
    }
  }

  class Form3 extends React.Component {
    constructor(props) {
      super(props);
      this.handleForm = this.handleForm.bind(this);
    }
    
    handleForm(e) {
      e.preventDefault();
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleForm}>
            <input type="text"></input>
            <input type="submit"></input>
          </form>
        </div>
      )
    }
  }



const Review = () => (
  <div>
    <h1>Thanks for shopping with us!</h1>
  </div>
)

  // F1 collects name, email, and password for account creation.
  // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
  // F3 collects credit card #, expiry date, CVV, and billing zip code.

ReactDOM.render(<App />, document.getElementById("root"));