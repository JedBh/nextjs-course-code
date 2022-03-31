import { Fragment } from "react/cjs/react.production.min";
import MainHeader from "./main-header";
function Layout(props) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
