import './App.css';
import { NewHomes, MarketingFooter, FormCheckout, Nav, SearchMessage, CardMessageCollection, ButtonNew, ButtonSubmit, InputTest, SelectTest, SideBar, TestNavBar } from './ui-components';

function App() {
  return (
    <div className="App">
      <TestNavBar position="fixed" width="100%" style={{ zIndex:'1111' }} />
      <div style={{ position:"fixed", top:"60px", right:"0", zIndex:'111', textAlign:"center", backgroundColor:"#fff", }}>
        <SearchMessage style={{ margin:"16px 0 0" }} />
        <CardMessageCollection />
        <ButtonNew />
        <ButtonSubmit style={{ margin:"0 auto 16px", display:"inline-block"}} />
      </div>
      <NewHomes />
      <FormCheckout />
      <MarketingFooter />
      {/* <InputTest />
      <SelectTest /> */}
    </div>
  );
}

export default App;
