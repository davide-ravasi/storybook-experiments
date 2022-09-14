import React, { useEffect, useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


const Captcha = () => {
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [randomImg, setRandomImg] = useState(-1);

  const btnCss = "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";

  // useEffect(() => {
  //   setRandomImg();
  // });

  const setCaptcha = () => {
    let maximum = 6;
    let minimum = 1;
    const maxmin = maximum - minimum + 1;
    const rndmImg = Math.floor(Math.random() * maxmin) + minimum;
    console.log(rndmImg);
    setRandomImg(rndmImg);
    setCaptchaVisible(true)
  }

  const checkImgNumber = (number) => {
    console.log(number);
  }

  return (
    <div>
      <div className={`max-w-sm grid grid-cols-3 gap-4 ${!captchaVisible && 'hidden'}`}>
        <img alt="one" id="1" src={ONE} onClick={() => checkImgNumber(1)} />
        <img alt="2" id="2" src={TWO} onClick={() => checkImgNumber(2)} />
        <img alt="3" id="3" src={THREE} onClick={() => checkImgNumber(3)} />
        <img alt="4" id="4" src={FOUR} onClick={() => checkImgNumber(4)} />
        <img alt="5" id="5" src={FIVE} onClick={() => checkImgNumber(5)} />
        <img alt="6" id="6" src={SIX} onClick={() => checkImgNumber(6)} />
      </div>
      <button className={btnCss} onClick={() => setCaptcha()}>I'm not a Robot</button>
    </div>)
};


export default Captcha;