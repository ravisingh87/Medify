import React, { useEffect, useState } from "react";
import logo from "@assets/logo.png";
import {
  HeaderButton,
  HeaderNav,
  HeaderTitle,
  NavbarCollapse,
  NavLiTag,
} from "./NavStyle";
import { HeaderStyle } from "@components/Home/HomeStyle";
import { Link, useLocation } from "react-router-dom";
const data = [
  {
    name: "Find Doctors",
    link: "/finddoctors",
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
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === "/finddoctors") {
      handleChange("Find Doctors");
    }
  }, []);

  return (
    <>
      <HeaderStyle>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </HeaderStyle>
      <div className='container'>
        <HeaderNav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <Link
              className='navbar-brand'
              to='/'
              onClick={() => handleChange("")}
            >
              <img src={logo} alt='Medify' width='25' height='25' />
              <HeaderTitle>Medify</HeaderTitle>
            </Link>
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
                    <Link
                      className={
                        links.name === item.name
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current='page'
                      to={item.link}
                      onClick={() => handleChange(item.name)}
                    >
                      {item.name}
                    </Link>
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
        </HeaderNav>
      </div>
    </>
  );
};

export default Nav;
