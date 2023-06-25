import Header from '../../molecules/main/Header';
import Sidebar from '../../molecules/main/Sidebar';
import Exercises from '../../molecules/main/Exercises';
import { GridTemplate } from '../../../styled/main-wrapper';

const Main = function Main() {
  return (
    <GridTemplate>
      <Header />
      <Sidebar />
      <Exercises />
    </GridTemplate>
  );
};

export default Main;
