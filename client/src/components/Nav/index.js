import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand mx-auto align-middle NavbarTitle">Business Ideas Forum</a>
      <a class="btn btn-success" href="/" role="button">
        Logout
      </a>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
