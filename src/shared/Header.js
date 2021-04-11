import React from "react";

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnccpJbEdCSCPpmMILg_s302bDVPF1O0x22O6IrUT7160l1jieeghRgGuEoQx62Krym8&usqp=CAU"
              alt=""
            />
          </a>
        </span>
      </nav>
    </header>
  );
}
