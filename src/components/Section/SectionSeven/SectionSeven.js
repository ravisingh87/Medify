import React from "react";
import { SectionSevenContainerDiv } from "./SectionSevenStyle";
import Card from "@components/Card/Card";
import demo1 from "@assets/demo4-postimg3-370x300.png";
import DocImg from "@assets/doctor2-80x80.png";

const data = [
  {
    img: demo1,
    type: "Medical",
    date: "March 31, 2022",
    descripton: "6 Tips To Protect Your Mental Health When You’re Sick",
    DocImg,
    DocName: "Rebecca Lee",
  },
  {
    img: demo1,
    type: "Medical",
    date: "March 31, 2022",
    descripton: "6 Tips To Protect Your Mental Health When You’re Sick",
    DocImg,
    DocName: "Rebecca Lee",
  },
  {
    img: demo1,
    type: "Medical",
    date: "March 31, 2022",
    descripton: "6 Tips To Protect Your Mental Health When You’re Sick",
    DocImg,
    DocName: "Rebecca Lee",
  },
];

const SectionSeven = () => {
  return (
    <SectionSevenContainerDiv>
      <p>Blog & News</p>
      <p>Read Our Latest News</p>
      <div className='d-flex gap-5 flex-wrap justify-content-center align-items-center'>
        {data.map((item, idx) => (
          <Card
            proflePic={item.img}
            type={item.type}
            date={item.date}
            descripton={item.descripton}
            docImg={item.DocImg}
            docName={item.DocName}
            key={`${item.DocName}_${idx}`}
          />
        ))}
      </div>
    </SectionSevenContainerDiv>
  );
};

export default SectionSeven;
