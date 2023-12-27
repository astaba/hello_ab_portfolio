import Image from "next/image";
import React from "react";

type DevImgProps = {
  devImgStyles: {
    wrapper: string;
    imgSrc: string;
  };
};

const DevImg: React.FC<DevImgProps> = ({devImgStyles}) => {
  return (
    <div className={devImgStyles.wrapper}>
      <Image src={devImgStyles.imgSrc} alt="developer picture" priority fill />
    </div>
  );
};

export default DevImg;
