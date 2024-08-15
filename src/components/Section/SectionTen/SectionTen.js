import React from "react";
import { SectionTenContainer } from "./SectionTenStyle";
import Img1 from "@assets/SeekPng 2.png";
import Img2 from "@assets/SeekPng1.png";
import Img3 from "@assets/image 2.png";
import Img4 from "@assets/image1.png";
import GooglePlayStore from "@assets/google_play.png";
import AppleStore from "@assets/apple_store.png";
import Arrow from "@assets/Vector.png";

const SectionTen = () => {
  return (
    <SectionTenContainer>
      <div className='container fluid'>
        <div>
          <img src={Img2} alt='Phone' width='302px' height='433px' />
          <img src={Img3} alt='Phone' width='299px' height='433px' />
          <img src={Img1} alt='Phone' width='302px' height='503px' />
          <img src={Img4} alt='Phone' width='300px' height='450px' />
        </div>
        <img
          className='arrow'
          src={Arrow}
          alt='Arrow'
          width='60px'
          height='120px'
        />
        <div className='download_container'>
          <div className='medify_app'>
            <p>
              Download the <span>Medify</span> App
            </p>
          </div>
          <label className='arrow_label'>
            Get the link to download the app
          </label>
          <div className='input-group_container'>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon1'>
                +91
              </span>
              <input
                type='tel'
                className='form-control'
                placeholder='Enter phone number'
                aria-label='Username'
                aria-describedby='basic-addon1'
                pattern='[0-9]{5}-[0-9]{2}-[0-9]{3}'
              />
            </div>
            <button className='btn'>Send SMS</button>
          </div>
          <div className='play_store'>
            <img src={GooglePlayStore} alt='Google Play Store' />
            <img src={AppleStore} alt='Apple Store' />
          </div>
        </div>
      </div>
    </SectionTenContainer>
  );
};

export default SectionTen;
