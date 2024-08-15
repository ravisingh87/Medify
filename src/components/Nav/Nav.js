import React, { useEffect, useState } from "react";
import logo from "@assets/logo.png";
import {
  HeaderButton,
  HeaderTitle,
  NavAnchorTag,
  NavbarCollapse,
  NavLiTag,
} from "./NavStyle";
const data = [
  {
    name: "Find Doctors",
    link: "#",
  },
  {
    name: "Hospitals",
    link: "#",
  },
  {
    name: "Medicines",
    link: "#",
  },
  {
    name: "Surgeries",
    link: "#",
  },
  {
    name: "Software for Provider",
    link: "#",
  },
  {
    name: "Facilities",
    link: "#",
  },
];
const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [links, setLinks] = useState("");
  const handleChange = (val) => {
    setLinks({ ...links, name: val });
  };
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [width]);

  return (
    <div className='container-fluid'>
      <a className='navbar-brand' href='#'>
        <img src={logo} alt='Medify' width='25' height='25' />
        <HeaderTitle>Medify</HeaderTitle>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <NavbarCollapse
        $size={width}
        className='collapse navbar-collapse justify-content-end'
        id='navbarNav'
      >
        <ul className='navbar-nav jutify-content-center align-items-center gap-3'>
          {data.map((item, idx) => (
            <NavLiTag
              className={
                links.name === item.name ? "nav-item active" : "nav-item"
              }
              key={`${item.name}_${idx}`}
            >
              <NavAnchorTag
                className={
                  links.name === item.name ? "nav-link active" : "nav-link"
                }
                aria-current='page'
                href={item.link}
                onClick={() => handleChange(item.name)}
              >
                {item.name}
              </NavAnchorTag>
            </NavLiTag>
          ))}
          <li className='nav-item'>
            <HeaderButton type='button' className='btn btn-primary'>
              My Bookings
            </HeaderButton>
          </li>
        </ul>
      </NavbarCollapse>
    </div>
  );
};

export default Nav;
