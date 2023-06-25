import Header from '../../molecules/main/Header';
import Sidebar from '../../molecules/main/Sidebar';
import Exercises from '../../molecules/main/Exercises';
import { MainWrapper } from '../../../styled/main-wrapper';

const Main = function Main() {
  return (
    <>
      {/* <MainWrapper> */}
        <Header />
        <Sidebar />
        <Exercises />
      {/* </MainWrapper> */}
    </>
  );
};

export default Main;
