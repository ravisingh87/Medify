import React, { useEffect, useState } from "react";
import {
  FindDoctorsContainerDiv,
  FindDoctorsPatchDiv,
  FindDoctorsSearchDiv,
} from "./FindDoctorsStyle";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import axios from "axios";
import Search from "./Search";
import FindDoctorsCard from "@components/FindDoctorsCard/FindDoctorsCard";

const FindDoctors = () => {
  let timer = null;
  const [states, setStates] = useState({
    data: [],
    tempData: [],
  });
  const [cities, setCities] = useState({
    data: [],
    tempData: [],
  });
  const [data, setData] = useState({
    states: "",
    city: "",
    from: "",
  });
  const [hospitalData, setHospitalData] = useState([]);

  const fetchStates = async () => {
    try {
      const res = await axios("https://meddata-backend.onrender.com/states");
      setStates({ ...states, data: [...res.data] });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async (val) => {
    try {
      const res = await axios(
        `https://meddata-backend.onrender.com/cities/${val}`
      );
      const sortedRes = res.data.sort();
      setCities({ ...cities, data: [...sortedRes] });
    } catch (error) {
      console.log(error);
    }
  };

  const handleState = (val) => {
    let newData = states.data.filter(
      (state) => state.toLowerCase().includes(val) || state.includes(val)
    );
    if (newData.length > 0) {
      setStates({ ...states, tempData: [...newData] });
      setCities({ ...cities, tempData: [] });
    } else {
      setStates({ ...states, tempData: [] });
      setCities({ ...cities, tempData: [] });
    }
  };
  const handleCity = (val) => {
    let newData = cities.data.filter(
      (state) => state.toLowerCase().includes(val) || state.includes(val)
    );
    if (newData.length > 0) {
      setCities({ ...cities, tempData: [...newData] });
    } else {
      setCities({ ...cities, tempData: [] });
    }
  };

  const debounce = (fn, delay) => {
    if (timer) {
      clearTimeout(timer);
    }
    return (args) => {
      timer = setTimeout(() => {
        fn(args);
      }, delay);
    };
  };

  const handleData = (name, val) => {
    setData({ ...data, [name]: val, from: "" });
    fetchCities(val);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios(
        `https://meddata-backend.onrender.com/data?state=${data.states}&city=${data.city}`
      );
      if (res.status === 200) {
        setHospitalData([...res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(hospitalData);

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <FindDoctorsContainerDiv>
      <FindDoctorsPatchDiv />
      <FindDoctorsSearchDiv className='container fluid'>
        <div className='input-group'>
          <span className='input-group-text'>
            <IoLocationOutline />
          </span>
          <input
            type='text'
            className='form-control state'
            placeholder='State'
            aria-label='State'
            aria-describedby='basic-addon1'
            name='states'
            value={data.states}
            onClick={() => setData({ ...data, from: "states" })}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
              debounce(handleState(e.target.value), 1000);
            }}
          />
          {data.from === "states" && data.states !== "" && (
            <Search
              data={states.tempData}
              handleData={handleData}
              from='states'
            />
          )}
        </div>

        <div className='input-group'>
          <span className='input-group-text'>
            <IoLocationOutline />
          </span>
          <input
            type='text'
            className='form-control city'
            placeholder='City'
            aria-label='City'
            aria-describedby='basic-addon1'
            name='city'
            value={data.city}
            onClick={() => setData({ ...data, from: "city" })}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
              debounce(handleCity(e.target.value), 1000);
            }}
          />
          {data.from === "city" && (
            <Search
              data={cities.tempData}
              handleData={handleData}
              from='city'
            />
          )}
        </div>

        <button
          type='button'
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          <IoSearch /> &nbsp; Search
        </button>
      </FindDoctorsSearchDiv>
      {hospitalData.length > 0 && <FindDoctorsCard data={hospitalData} />}
    </FindDoctorsContainerDiv>
  );
};

export default FindDoctors;
