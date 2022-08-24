import React from 'react'
import EventBus from "./EventBus";

interface IAppProps {}

interface IAppState {
  symbol: string|null
}

class App extends React.Component<IAppProps, IAppState> {
  private some_symbols_for_ya:Array<string> = ['!','@','Whoa','#','$','%','&','*','Cool!'];
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      symbol: null
    };
  }
  componentDidMount(): void {
    this.setRandomSymbol();
  }
  setRandomSymbol(): void {
    const rando:string = this.some_symbols_for_ya[Math.floor(Math.random()*this.some_symbols_for_ya.length)]
    if(rando !== this.state.symbol){
      this.setState({ symbol: rando });
    } else {
      this.setRandomSymbol();
    }
  }
  handleSymbolClick(): void {
    this.setRandomSymbol();
  }
  render(): React.ReactNode { return (
  <div className="App center cursor-pointer user-select-none" onClick={this.handleSymbolClick.bind(this)}>
    <div>HELLO WORLD!</div>
    <div>{this.state.symbol}</div>
  </div>
  ) }
}

export default App
