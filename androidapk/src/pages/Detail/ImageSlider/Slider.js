import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Button } from "@mui/material";
import { createTheme } from "@mui/system";
import Viewer from "../360Viewer/Viewer360";
import Image from "next/image";
import * as THREE from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import DiffSlider from "./DiffSlider";

const Loader = () => {
  return (
    <div
      role="status"
      className="w-[100%] h-[500px] flex items-center justify-center absolute z-10"
    >
      <svg
        aria-hidden="true"
        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#ccc"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="#006d77"
        />
      </svg>
    </div>
  );
};

const Scene = ({ src }) => {
  const texture = useTexture(src);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[20, 100, 100]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <OrbitControls />
    </>
  );
};

export const Item = ({ src }) => {
  const [show, setShow] = useState(true);
  const [err, setErr] = useState(false);

  async function isImageURL(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        setErr(false);
        setShow(false);
      } else {
        setErr(true);
        setShow(false);
        console.log(url, "these are the ones who dont work");
      }
    } catch (error) {
      setErr(true);
      setShow(false);
      console.log(url, "these are the ones who dont work");
    }
  }

  useEffect(() => {
    isImageURL(src);
  });
  return (
    <>
      {show ? (
        <Loader />
      ) : err ? (
        <div className="w-[100%] h-[500px] flex items-center justify-center bg-[#ccc] rounded-[20px]">
          <p className="text-[20px] font-bold capitalize">
            Image Failed to load!
          </p>
        </div>
      ) : (
        <Canvas
          camera={ { position: [0.1, 0, 0], fov: 55 } }
          gl={ { antialias: false } }
          style={ {
            width: "100%",
            height: "500px",
            borderRadius: "20px",
          } }
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.outputEncoding = THREE.sRGBEncoding;
          } }
        >
          <pointLight position={[0, 4, 0]} intensity={0.4} color="white" />
          <Scene src={src} />
          <ambientLight intensity={0.7} />
        </Canvas>
      )}
    </>
  );
};

const Slider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //   const data = [
  //     {
  //       img: "9.jpg",
  //       avatar: "1.jpg",
  //       title: "Liguid Wave",
  //       author: "Sound Box",
  //     },
  //     {
  //       img: "10.jpg",
  //       avatar: "2.jpg",
  //       title: "Liguid Wave",
  //       author: "Sound Box",
  //     },
  //   ];

  const checFnc = (str) => {
    if (str[0] === " ") {
      return str.slice(1);
    } else {
      return str;
    }
  };

  function endsWithDesktopIni(str) {
    return str.endsWith("desktop.ini");
  }

  return (
    <>

      {props.type ? (
        <DiffSlider images={props.images} image360={props.view360.status} />
      ) : (
        <div className="galleries">
          <div className="detail-gallery">
            <div className="product-image-carousel">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                className={` md:w-full  ${props.images.length >= 3 ? "w-[75%]" : "w-full"}`}
              >

                {props.images.map((item, i) => {
                  // props.images[0]
                  //   ? !endsWithDesktopIni(checFnc(props.images[0]))
                  //     ? `https://testerp1apis.nextsolutions.in/${checFnc(
                  //         props.images[0]
                  //       )}`
                  //     : `https://testerp1apis.nextsolutions.in/${checFnc(
                  //         props.images[1]
                  //       )}`
                  //   : "/assets/imgs/page/homepage8/img-4.jpg"
                  return (
                    <Carousel.Item key={i}>
                      <div className="checkkkkkk mt-4">
                        {!props.type ? (
                          <img
                            // src="/assets/imgs/page/homepage8/img-new.jpg"
                            src={`https://testerp1apis.nextsolutions.in/${item}`}
                            alt="First slide"
                            className={`w-full object-contain   ${props.images.length >= 3 ? "h-[500px]" : "h-[600px]"}`}
                          />

                        ) : (
                          <Item
                            src={`https://testerp1apis.nextsolutions.in/${item}`}
                          />
                        )}
                      </div>
                      {/* <Button
                    className="button-360"
                    variant="contained"
                    onClick={() => {
                      props.view360.set360(1);
                    } }
                  >
                    360
                  </Button> */}
                    </Carousel.Item>
                  );
                })}

                {/* <Carousel.Item>
                <div className="checkkkkkk">
                  <Image
                    // src="/assets/imgs/page/homepage8/img-new.jpg"
                    src={
                      props.images[0]
                        ? !endsWithDesktopIni(checFnc(props.images[0]))
                          ? `https://testerp1apis.nextsolutions.in/${checFnc(
                              props.images[0]
                            )}`
                          : `https://testerp1apis.nextsolutions.in/${checFnc(
                              props.images[1]
                            )}`
                        : "/assets/imgs/page/homepage8/img-4.jpg"
                    }
                    alt="First slide"
                    className="w-[100%]"
                    style={ {
                      width: "100% !important",
                    } }
                    width={500}
                    height={500}
                  />
                </div>
                <Button
                  className="button-360"
                  variant="contained"
                  onClick={() => {
                    props.view360.set360(1);
                  } }
                >
                  360
                </Button>
              </Carousel.Item>
              <Carousel.Item>
                <div className="checkkkkkk">
                  <Image
                    // src="/assets/imgs/page/homepage8/img-new.jpg"
                    src={
                      props.images[0]
                        ? !endsWithDesktopIni(checFnc(props.images[0]))
                          ? `https://testerp1apis.nextsolutions.in/${checFnc(
                              props.images[0]
                            )}`
                          : `https://testerp1apis.nextsolutions.in/${checFnc(
                              props.images[1]
                            )}`
                        : "/assets/imgs/page/homepage8/img-4.jpg"
                    }
                    alt="Second slide"
                    className="w-[100%]"
                    style={ {
                      width: "100% !important",
                    } }
                    width={500}
                    height={500}
                  />
                </div>
                <Button
                  className="button-360"
                  variant="contained"
                  onClick={() => {
                    props.view360.set360(1);
                  } }
                >
                  360
                </Button>
              </Carousel.Item>
              <Carousel.Item>
                <div className="checkkkkkk">
                  <Image
                    // src="/assets/imgs/page/homepage8/img-new.jpg"
                    src={
                      props.images[0]
                        ? !endsWithDesktopIni(checFnc(props.images[0]))
                          ? `https://testerp1apis.nextsolutions.in/${checFnc(
                              props.images[0]
                            )}`
                          : `https://testerp1apis.nextsolutions.in/${checFnc(
                              props.images[1]
                            )}`
                        : "/assets/imgs/page/homepage8/img-4.jpg"
                    }
                    alt="Third slide"
                    className="w-[100%]"
                    style={ {
                      width: "100% !important",
                    } }
                    width={500}
                    height={500}
                  />
                </div>
                <Button
                  className="button-360"
                  variant="contained"
                  onClick={() => {
                    props.view360.set360(1);
                  } }
                >
                  360
                </Button>
              </Carousel.Item> */}
              </Carousel>
            </div>
            {/* <div className="slider-nav-thumbnails">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="slider-nav-thumbnails-align"
              >
                <div className="overflow-y-scroll">
                  {
                    props?.images && props.images.length >= 3 && props.images.map((images, idx) => {
                      return (

                        <SwiperSlide
                          onClick={() => {
                            setIndex(0);
                          } }
                        >
                          <div className="checkkkkkk" key={idx}>
                            <img
                              src={`https://testerp1apis.nextsolutions.in/${images}`}
                              alt="product image"
                              className="w-[100%] object-cover rounded-24px"
                              style={ {
                                width: "100% !important",
                              } }

                            />
                          </div>
                        </SwiperSlide>

                      )
                    })
                  }
                </div>
              </Swiper>
            </div> */}

            {
              props.images && props.images.length >= 3 && (
                <>
                  <div className="slider-nav-thumbnails md:hidden">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={3}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="slider-nav-thumbnails-align"
                    >
                      <SwiperSlide
                        onClick={() => {
                          setIndex(0);
                        } }

                      >
                        <div className="checkkkkkk">
                          <img
                            src={`https://testerp1apis.nextsolutions.in/${props.images[0]}`}
                            alt="product image"
                            className="w-[100%] object-cover rounded-24px"
                            style={ {
                              width: "100% !important",
                            } }

                          />
                        </div>

                      </SwiperSlide>
                      <SwiperSlide
                        onClick={() => {
                          setIndex(1);
                        } }
                        style={ {
                          width: "100%"
                        } }
                      >
                        <img

                          src={`https://testerp1apis.nextsolutions.in/${props.images[1]}`}
                          alt="product image"
                          className="w-[100%] object-cover rounded-24px "
                          style={ {
                            width: "100% !important",
                            height: "100px !important"
                          } }

                        />
                      </SwiperSlide>
                      <SwiperSlide
                        onClick={() => {
                          setIndex(2);
                        } }
                        style={ {
                          width: "100%"
                        } }
                      >
                        <img
                          src={`https://testerp1apis.nextsolutions.in/${props.images[2]}`}
                          alt="product image"
                          className="w-[100%] object-cover rounded-24px h-200"
                          style={ {
                            width: "100% !important",
                          } }

                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </>
              )
            }
          </div>

        </div >
      )}
    </>
  );
};

export default Slider;
