import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-dark bg-primary" id="Navigation">
      <a className="navbar-brand mx-auto align-middle NavbarTitle">
      <img src="https://image.flaticon.com/icons/svg/3050/3050484.svg" width="50" height="50" class=" pr-2 d-inline-block align-top" alt="" loading="lazy"/>
        Business Ideas Forum</a>
      <a class="btn btn-success" href="/" onClick={()=>{localStorage.removeItem("usernameData")}} role="button">
        Logout
      </a>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
