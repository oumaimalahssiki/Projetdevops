import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import "../styles/Home.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';
import CalendarNavBar from './CalendarNavBar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { counterActions } from '../redux/State';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import Select from 'react-select';
import { IoLocationOutline } from "react-icons/io5";

import { LoginSocialGoogle } from 'reactjs-social-login';
import { StickyContainer, Sticky } from 'react-sticky';
import GoogleButton from 'react-google-button'

const Home = ({ toggle, setToggle }) => {

  const [inputValue, setInputeValue] = useState("");

  const [linkClickedVlaue, setLinkClickedValue] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  let [children, setChildren] = useState(0);

  let [infants, setInfants] = useState(0);

  const [verified, setVerified] = useState(false);

  const [userimage, setUserImage] = useState("");



  const adultsQuantity = useSelector((state) => state.counter.value);

  const dispacth = useDispatch();

  const increaeHandler = () => {
    dispacth(counterActions.increaseCount());
  }


  const decreaseHandler = () => {
    dispacth(counterActions.decrementCount());
  }

  const inputValueHandler = (e) => {
    setInputeValue(e.target.value);
  }

  const options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ]

  const childrenAdd = () => {
    setChildren(children + 1)
  }

  const childrenLess = () => {
    if (children <= 0) {
      return
    }
    else {
      setChildren(children - 1)
    }
  }

  const infantsAdd = () => {
    setInfants(infants + 1)
  }

  const infantsLess = () => {
    if (infants <= 0) {
      return
    }
    else {
      setInfants(infants - 1)
    }
  }



  const placesArray = [
    {
      id: "1",
      place: "london"
    },
    {
      id: "2",
      place: "russia"
    },
    {
      id: "3",
      place: "spain"
    },
    {
      id: "4",
      place: "brazil"
    },
    {
      id: "5",
      place: "india"
    },
    {
      id: "6",
      place: "france"
    },

    {
      id: "9",
      place: "italy"
    },
    {
      id: "10",
      place: "australia"
    },
    {
      id: "11",
      place: "canada"
    },
    {
      id: "12",
      place: "spain"
    },
    {
      id: "13",
      place: "usa"
    },
    {
      id: "14",
      place: "kyiv"
    },
    {
      id: "15",
      place: "ukraine"
    },
    {
      id: "16",
      place: "newyork"
    },
    {
      id: "17",
      place: "europe"
    },

  ]


  return (


    <div>
      <nav className=" bg-white w-full navBar flex relative justify-between items-center mx-auto px-8 h-20">
        {/* logo */}
        <div className="inline-flex">
          <Link className="_o6689fn" to={"/"}>
            <div className="hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="135.000000pt" height="107.000000pt" viewBox="0 0 270.000000 214.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,214.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M943 1822 c-91 -72 -86 -67 -78 -91 10 -33 41 -25 106 28 l60 48 155 -116 154 -116 0 -402 0 -403 -95 0 -95 0 0 153 c0 108 -4 158 -12 169 -18 22 -349 292 -376 307 -19 10 -35 0 -172 -114 -115 -97 -150 -132 -150 -150 0 -28 20 -37 48 -22 12 7 75 58 141 114 l119 102 166 -136 166 -136 0 -167 c0 -116 4 -170 12 -178 8 -8 57 -12 155 -12 130 0 143 2 153 19 6 13 10 173 10 450 0 411 -1 432 -19 450 -45 45 -342 261 -358 260 -10 0 -50 -26 -90 -57z"/>
<path d="M471 1675 c-90 -73 -168 -139 -172 -147 -5 -7 -9 -182 -9 -390 l0 -376 -27 -10 c-47 -16 -117 -87 -148 -148 -25 -50 -30 -71 -30 -135 1 -182 134 -314 315 -313 99 0 164 29 227 98 25 28 50 63 55 78 l10 28 292 0 292 0 44 45 c24 25 47 45 50 45 3 0 27 -27 53 -60 27 -33 55 -60 63 -60 7 0 31 22 53 49 l39 50 45 -50 c24 -27 49 -49 55 -49 6 0 31 24 55 54 l44 54 37 -44 c20 -24 45 -44 55 -44 9 0 40 28 68 63 85 106 83 97 33 162 -24 31 -51 60 -61 66 -11 5 -267 9 -643 9 -554 0 -626 -2 -640 -16 -20 -19 -20 -19 0 -38 14 -14 85 -16 639 -16 l624 0 25 -32 c26 -34 26 -38 -17 -88 l-28 -33 -43 48 c-49 56 -55 55 -112 -19 l-37 -48 -48 52 c-55 60 -66 59 -114 -10 -23 -34 -31 -39 -39 -28 -46 61 -91 108 -103 108 -8 0 -40 -25 -72 -55 l-58 -55 -281 0 c-154 0 -287 -3 -295 -6 -9 -3 -27 -30 -42 -60 -32 -66 -95 -117 -166 -134 -188 -45 -354 121 -309 309 16 66 90 151 155 178 l45 18 0 387 0 387 147 121 c81 66 150 120 153 120 3 0 77 -58 165 -130 88 -71 168 -130 178 -130 21 0 32 23 20 43 -13 25 -347 287 -363 286 -8 0 -89 -60 -179 -134z"/>
<path d="M580 1545 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M670 1545 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M1719 1498 c-55 -31 -84 -89 -84 -168 1 -121 52 -181 161 -188 100 -7 165 41 185 136 19 95 -13 182 -81 221 -51 28 -132 28 -181 -1z m154 -26 c35 -31 49 -72 49 -142 0 -105 -41 -165 -112 -165 -83 0 -135 102 -110 218 13 60 26 81 66 102 34 18 79 13 107 -13z"/>
<path d="M2020 1505 c0 -8 9 -15 19 -15 28 0 31 -18 31 -160 0 -142 -3 -160 -31 -160 -10 0 -19 -7 -19 -15 0 -12 14 -15 70 -15 53 0 70 3 70 14 0 7 -9 16 -20 19 -18 5 -20 14 -20 76 l0 71 95 0 95 0 0 -71 c0 -62 -2 -71 -20 -76 -11 -3 -20 -12 -20 -19 0 -11 17 -14 70 -14 56 0 70 3 70 15 0 8 -9 15 -20 15 -19 0 -20 7 -20 156 0 147 1 156 20 161 11 3 20 12 20 19 0 11 -17 14 -70 14 -53 0 -70 -3 -70 -14 0 -7 9 -16 20 -19 17 -4 20 -14 20 -71 l0 -66 -95 0 -95 0 0 66 c0 57 3 67 20 71 11 3 20 12 20 19 0 11 -17 14 -70 14 -56 0 -70 -3 -70 -15z"/>
<path d="M580 1455 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M670 1455 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M670 1100 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30 -27 0 -30 -3 -30 -30z"/>
<path d="M760 1100 c0 -25 4 -30 25 -30 21 0 25 5 25 30 0 25 -4 30 -25 30 -21 0 -25 -5 -25 -30z"/>
<path d="M670 1010 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30 -27 0 -30 -3 -30 -30z"/>
<path d="M760 1010 c0 -25 4 -30 25 -30 21 0 25 5 25 30 0 25 -4 30 -25 30 -21 0 -25 -5 -25 -30z"/>
<path d="M1600 845 c0 -57 4 -95 10 -95 6 0 10 18 10 40 l0 40 40 0 40 0 0 -40 c0 -22 5 -40 10 -40 6 0 10 38 10 95 0 57 -4 95 -10 95 -5 0 -10 -18 -10 -40 l0 -40 -40 0 -40 0 0 40 c0 22 -4 40 -10 40 -6 0 -10 -38 -10 -95z"/>
<path d="M1833 930 c-29 -12 -43 -40 -43 -88 0 -53 27 -85 70 -85 43 0 60 24 60 88 0 73 -34 106 -87 85z m55 -32 c17 -17 15 -93 -2 -108 -8 -6 -25 -10 -38 -8 -20 3 -23 10 -26 52 -2 27 -1 55 2 62 7 17 48 18 64 2z"/>
<path d="M1990 845 c0 -78 3 -95 15 -95 12 0 15 14 15 68 l1 67 24 -30 c21 -25 27 -28 35 -15 5 8 10 18 10 23 0 4 7 7 15 7 12 0 15 -13 15 -60 0 -33 4 -60 10 -60 6 0 10 38 10 95 0 106 -12 122 -46 60 -10 -19 -22 -35 -27 -35 -4 0 -17 16 -28 35 -37 62 -49 47 -49 -60z"/>
<path d="M2210 845 l0 -95 60 0 c47 0 60 3 60 15 0 11 -12 15 -45 15 -41 0 -45 2 -45 25 0 21 5 25 30 25 20 0 30 5 30 15 0 10 -10 15 -30 15 -25 0 -30 4 -30 25 0 23 4 25 45 25 33 0 45 4 45 15 0 12 -13 15 -60 15 l-60 0 0 -95z"/>
<path d="M2424 930 c-49 -20 -32 -79 28 -96 23 -7 34 -16 36 -32 3 -19 -1 -22 -28 -22 -18 0 -33 6 -36 15 -4 8 -12 15 -20 15 -17 0 -17 -5 -4 -30 21 -39 102 -32 115 10 9 27 -9 48 -57 67 -26 10 -38 21 -36 32 4 22 56 27 64 7 3 -9 12 -16 20 -16 26 0 12 30 -23 49 -25 13 -30 13 -59 1z"/>
<path d="M363 530 c-70 -29 -45 -140 32 -140 12 0 34 9 49 21 64 51 -3 151 -81 119z"/>
</g>
</svg>
            </div>
            <div className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="135.000000pt" height="107.000000pt" viewBox="0 0 270.000000 214.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,214.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M943 1822 c-91 -72 -86 -67 -78 -91 10 -33 41 -25 106 28 l60 48 155 -116 154 -116 0 -402 0 -403 -95 0 -95 0 0 153 c0 108 -4 158 -12 169 -18 22 -349 292 -376 307 -19 10 -35 0 -172 -114 -115 -97 -150 -132 -150 -150 0 -28 20 -37 48 -22 12 7 75 58 141 114 l119 102 166 -136 166 -136 0 -167 c0 -116 4 -170 12 -178 8 -8 57 -12 155 -12 130 0 143 2 153 19 6 13 10 173 10 450 0 411 -1 432 -19 450 -45 45 -342 261 -358 260 -10 0 -50 -26 -90 -57z"/>
<path d="M471 1675 c-90 -73 -168 -139 -172 -147 -5 -7 -9 -182 -9 -390 l0 -376 -27 -10 c-47 -16 -117 -87 -148 -148 -25 -50 -30 -71 -30 -135 1 -182 134 -314 315 -313 99 0 164 29 227 98 25 28 50 63 55 78 l10 28 292 0 292 0 44 45 c24 25 47 45 50 45 3 0 27 -27 53 -60 27 -33 55 -60 63 -60 7 0 31 22 53 49 l39 50 45 -50 c24 -27 49 -49 55 -49 6 0 31 24 55 54 l44 54 37 -44 c20 -24 45 -44 55 -44 9 0 40 28 68 63 85 106 83 97 33 162 -24 31 -51 60 -61 66 -11 5 -267 9 -643 9 -554 0 -626 -2 -640 -16 -20 -19 -20 -19 0 -38 14 -14 85 -16 639 -16 l624 0 25 -32 c26 -34 26 -38 -17 -88 l-28 -33 -43 48 c-49 56 -55 55 -112 -19 l-37 -48 -48 52 c-55 60 -66 59 -114 -10 -23 -34 -31 -39 -39 -28 -46 61 -91 108 -103 108 -8 0 -40 -25 -72 -55 l-58 -55 -281 0 c-154 0 -287 -3 -295 -6 -9 -3 -27 -30 -42 -60 -32 -66 -95 -117 -166 -134 -188 -45 -354 121 -309 309 16 66 90 151 155 178 l45 18 0 387 0 387 147 121 c81 66 150 120 153 120 3 0 77 -58 165 -130 88 -71 168 -130 178 -130 21 0 32 23 20 43 -13 25 -347 287 -363 286 -8 0 -89 -60 -179 -134z"/>
<path d="M580 1545 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M670 1545 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M1719 1498 c-55 -31 -84 -89 -84 -168 1 -121 52 -181 161 -188 100 -7 165 41 185 136 19 95 -13 182 -81 221 -51 28 -132 28 -181 -1z m154 -26 c35 -31 49 -72 49 -142 0 -105 -41 -165 -112 -165 -83 0 -135 102 -110 218 13 60 26 81 66 102 34 18 79 13 107 -13z"/>
<path d="M2020 1505 c0 -8 9 -15 19 -15 28 0 31 -18 31 -160 0 -142 -3 -160 -31 -160 -10 0 -19 -7 -19 -15 0 -12 14 -15 70 -15 53 0 70 3 70 14 0 7 -9 16 -20 19 -18 5 -20 14 -20 76 l0 71 95 0 95 0 0 -71 c0 -62 -2 -71 -20 -76 -11 -3 -20 -12 -20 -19 0 -11 17 -14 70 -14 56 0 70 3 70 15 0 8 -9 15 -20 15 -19 0 -20 7 -20 156 0 147 1 156 20 161 11 3 20 12 20 19 0 11 -17 14 -70 14 -53 0 -70 -3 -70 -14 0 -7 9 -16 20 -19 17 -4 20 -14 20 -71 l0 -66 -95 0 -95 0 0 66 c0 57 3 67 20 71 11 3 20 12 20 19 0 11 -17 14 -70 14 -56 0 -70 -3 -70 -15z"/>
<path d="M580 1455 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M670 1455 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25 -20 0 -25 -5 -25 -25z"/>
<path d="M670 1100 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30 -27 0 -30 -3 -30 -30z"/>
<path d="M760 1100 c0 -25 4 -30 25 -30 21 0 25 5 25 30 0 25 -4 30 -25 30 -21 0 -25 -5 -25 -30z"/>
<path d="M670 1010 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30 -27 0 -30 -3 -30 -30z"/>
<path d="M760 1010 c0 -25 4 -30 25 -30 21 0 25 5 25 30 0 25 -4 30 -25 30 -21 0 -25 -5 -25 -30z"/>
<path d="M1600 845 c0 -57 4 -95 10 -95 6 0 10 18 10 40 l0 40 40 0 40 0 0 -40 c0 -22 5 -40 10 -40 6 0 10 38 10 95 0 57 -4 95 -10 95 -5 0 -10 -18 -10 -40 l0 -40 -40 0 -40 0 0 40 c0 22 -4 40 -10 40 -6 0 -10 -38 -10 -95z"/>
<path d="M1833 930 c-29 -12 -43 -40 -43 -88 0 -53 27 -85 70 -85 43 0 60 24 60 88 0 73 -34 106 -87 85z m55 -32 c17 -17 15 -93 -2 -108 -8 -6 -25 -10 -38 -8 -20 3 -23 10 -26 52 -2 27 -1 55 2 62 7 17 48 18 64 2z"/>
<path d="M1990 845 c0 -78 3 -95 15 -95 12 0 15 14 15 68 l1 67 24 -30 c21 -25 27 -28 35 -15 5 8 10 18 10 23 0 4 7 7 15 7 12 0 15 -13 15 -60 0 -33 4 -60 10 -60 6 0 10 38 10 95 0 106 -12 122 -46 60 -10 -19 -22 -35 -27 -35 -4 0 -17 16 -28 35 -37 62 -49 47 -49 -60z"/>
<path d="M2210 845 l0 -95 60 0 c47 0 60 3 60 15 0 11 -12 15 -45 15 -41 0 -45 2 -45 25 0 21 5 25 30 25 20 0 30 5 30 15 0 10 -10 15 -30 15 -25 0 -30 4 -30 25 0 23 4 25 45 25 33 0 45 4 45 15 0 12 -13 15 -60 15 l-60 0 0 -95z"/>
<path d="M2424 930 c-49 -20 -32 -79 28 -96 23 -7 34 -16 36 -32 3 -19 -1 -22 -28 -22 -18 0 -33 6 -36 15 -4 8 -12 15 -20 15 -17 0 -17 -5 -4 -30 21 -39 102 -32 115 10 9 27 -9 48 -57 67 -26 10 -38 21 -36 32 4 22 56 27 64 7 3 -9 12 -16 20 -16 26 0 12 30 -23 49 -25 13 -30 13 -59 1z"/>
<path d="M363 530 c-70 -29 -45 -140 32 -140 12 0 34 9 49 21 64 51 -3 151 -81 119z"/>
</g>
</svg>
            </div>
          </Link>
        </div>

        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">



              <label htmlFor='my-modal-4' className='navbarAnyHold flex inpWidth2 cursor-pointer'>
                <p className=' inline-block'> Anywhere <p className=' inline-block ml-1'> | </p> </p>
                <p className=' inline-block'> Any Week <p className=' inline-block ml-1'> | </p> </p>
                <p className=' text-gray-400 whitespace-nowrap '> Add guests <AiOutlineSearch className=' whitespace-nowrap inline-block' /> </p>
              </label>


              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <input placeholder="Search For Your Destanation" onChange={inputValueHandler} onClick={() => setToggle(!toggle)} value={inputValue} type="text" className="flex outline-none items-center flex-grow-0 flex-shrink pl-2 relative inputBox  border  px-1  py-1" />





                  <div className='searchTabsHold relative flex top-28 right-1'>
                    <Tabs variant='soft-rounded' colorScheme='red'>
                      <TabList>
                        <Tab>PLACE</Tab>
                        <Tab>DATES</Tab>
                        <Tab>GUESTS</Tab>
                      </TabList>


                      <TabPanels>

                        <TabPanel>

                          <div className='absolute z-50 tabContentPlaces'>
                            {inputValue === "" ? <> <div className='tabContent1Hold cursor-pointer'>
                              <Link to={`/location/usa`}>
                                <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' className='tabContent1Image' />
                              </Link>
                              <Link to={`/location/europe`}>
                                <img src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' className='tabContent1Image' />
                              </Link>

                              <Link to={`/location/london`}>
                                <img src='https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320' className='tabContent1Image' />
                              </Link>

                            </div>

                              <div className='secImages'>
                                <Link to={`/location/canada`}>
                                  <img src='https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320' className='tabContent1Image' />
                                </Link>
                                <Link to={`/location/italy`}>
                                  <img src='https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320' className='tabContent1Image mr-1' />
                                </Link>
                                <Link to={`/location/kyiv`}>
                                  <img src='https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320' className='tabContent1Image' />
                                </Link>
                              </div>

                              <div className='secText flex  top-24 relative left-16'>
                                <p className='fs'> SouthEast Asia </p>
                                <p className='fs'> Indonesia </p>
                                <p className='fs'> MiddleEast </p>
                              </div>


                              <div className='imgCaptionHold flex flex-wrap'>
                                <p className='fs'> All the world  </p>
                                <p className='fs'> Europe</p>
                                <p className='fs'> United Kingdom </p>

                              </div>  </> : <>
                              <div className='serachResultsHold'>
                                <p className=' fof text-xl text-center mt-3'> MOST TRAVELLED PLACES </p>
                                <div className=' flex flex-row flex-wrap searchDisplayParent'>
                                  {placesArray.filter((item) => {

                                    if (inputValue === "") {
                                      return ""
                                    }
                                    else if (item.place.toLocaleLowerCase().includes(inputValue)) {
                                      return item
                                    }
                                  }).map((item) => {
                                    return (
                                      <div className='searcdisplayIndivitual'>
                                        <div>
                                          <Link to={`/location/${linkClickedVlaue}`}>
                                            <IoLocationOutline className=' inline-block mb-2 text-2xl' />
                                            <p onMouseOver={(e) => setLinkClickedValue(e.target.innerText)} className="capitalize fof inline-block">  {item.place} </p>
                                          </Link>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            </>}


                          </div>



                        </TabPanel>
                        <TabPanel>
                          <CalendarNavBar />
                        </TabPanel>

                        <TabPanel>
                          <div className='tab3MainHold flex flex-col'>
                            <div className='adultsKidsHold flex-col flex text-lg font-medium fof'>
                              <p> Adults  </p>
                              <p>Children</p>
                              <p>Infants  </p>
                              <p> Pets </p>
                            </div>

                            <div className='adultCriteriaHold flex flex-col relative'>
                              <p className=' text-gray-400'> Ages 13 or above </p>
                              <p className=' text-gray-400'> Ages 2-12 </p>
                              <p className=' text-gray-400'> Under 2 </p>
                              <p className=' text-gray-400'> Select pet friendly </p>
                            </div>


                            <div className='divideLineHold flex flex-col'>
                              <p className='navLine'>  </p>
                              <p className='navLine'>  </p>
                              <p className='navLine'>  </p>
                            </div>

                            <div className='btnControlsPlus flex flex-col relative'>
                              <AiOutlinePlusCircle className='fss' onClick={increaeHandler} />
                              <AiOutlinePlusCircle className='fss' onClick={childrenAdd} />
                              <AiOutlinePlusCircle className='fss' onClick={infantsAdd} />
                            </div>

                            <div className='btnControlMinus flex flex-col relative cursor-pointer' id='btnmin'>
                              <AiOutlineMinusCircle className='fss' onClick={decreaseHandler} />
                              <AiOutlineMinusCircle className='fss' onClick={childrenLess} />
                              <AiOutlineMinusCircle className='fss' onClick={infantsLess} />

                            </div>

                            <div className='navQtyHold relative'>
                              <p className=' w-3'> {adultsQuantity} </p>
                              <p className=' w-3'> {children}</p>
                              <p className=' w-3'>{infants} </p>
                            </div>


                            <div className='selectWrapper'>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className="outline-none"
                              />
                            </div>



                          </div>
                        </TabPanel>

                      </TabPanels>
                    </Tabs>

                  </div>

                </label>
              </label>

            </div>
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
              </div>
              <div className="block relative">
                <button type="button" className="inline-block py-2 hover:bg-gray-200 rounded-full relative ">
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /></svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="block">
              <div className="inline relative">
                {<button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div className="pl-1 googleAuthBtnHold w-10">
                    <LoginSocialGoogle
                      client_id={`${process.env.REACT_APP_AUTH_CLIENT}.apps.googleusercontent.com`}
                      scope="openid profile email"
                      discoveryDocs="claims_supported"
                      access_type="offline"
                      onResolve={({ provider, data }) => {
                        (data.email_verified === true ? setUserImage(data.picture) : setVerified(false));

                      }}
                      onReject={(err) => {
                        console.log(err)
                      }}
                    >
                      <GoogleButton type='dark' label='' className='googleAuthBtn' />
                    </LoginSocialGoogle>
                  </div>
                  {userimage.length > 2 ? <img src={userimage} className="UserLoginImage ml-5" /> : <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </svg>
                  </div>}

                </button>}

              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav >

    </div >
  )
}

export default Home
