import React from 'react';
import {Link} from 'react-router-dom';

//===== Ресурсы =====//
import { MdSubdirectoryArrowRight as ArrowRightBottomIcon } from "react-icons/md";
import './AboutUs.scss';

import PhotoDogs from '../../assets/3._about_us/animal-back.png';
import PhotoVeterinarianFemale from '../../assets/3._about_us/VeterinarianFemale.jpg';
import PhotoManagingPartnerMale from '../../assets/3._about_us/ManagingPartnerMale.jpg';
import PhotoManagingPartnerFemale from '../../assets/3._about_us/ManagingPartnerFemale.jpg';
import PhotoHeadShelterFemale from '../../assets/3._about_us/HeadShelterFemale.jpg';

const AboutUs = () => {
  return (
    <div className='AboutUs'>

      {/* Секция 1. О Vetland Adoption */}
      <section className="Introduction">
        <div className="Introduction__wrapper">
          <div className="Introduction__container">

            <div className="Introduction__header">
              <div className="Introduction__header-nav">
                <Link to='/' className='Introduction__link-main' >
                  <span className="Introduction__link-text">Главная</span>
                  <ArrowRightBottomIcon className='icon' />
                </Link>
                <span className="Introduction__current-page">О нас</span>
              </div>
              <h2 className="Introduction__header-title">O Vetland Adoption</h2>
            </div>

            <div className="Introduction__body">
              <div className="Introduction__mission">
                
                <div className="Introduction__missons-marquee-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="973" height="207" fill="none" viewBox="0 0 973 207">
                    <g>
                      <title>Layer 1</title>
                      <path stroke="null" id="svg_1" fill="#282828" d="m7.6722,6.24968l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm0,192.03423l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.20475,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-125.45988l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm1.66787,0l1.83274,-0.69906l-0.49561,-1.18699l-1.33714,0l0,1.88605zm51.99643,124.52252l-1.83274,0.69878l0.49561,1.18727l1.33714,0l0,-1.88605zm28.05858,0l0,1.88605l1.33497,0l0.49728,-1.18538l-1.83225,-0.70067zm51.99663,-124.05364l0,-1.88605l-1.33595,0l-0.4963,1.18463l1.83225,0.70142zm1.66748,0l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm0,124.99101l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.2054,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-192.03423l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-52.38932,0l0,-1.88605l-1.32411,0l-0.50222,1.17075l1.82633,0.7153zm-55.33257,129.02317l0,1.88605l1.32411,0l0.50222,-1.17124l-1.82633,-0.71481zm-2.3542,0l-1.82633,0.71481l0.50222,1.17124l1.32411,0l0,-1.88605zm-55.33207,-129.02317l1.82584,-0.7153l-0.50202,-1.17075l-1.32382,0l0,1.88605zm-54.36231,0l0,192.03423l3.94669,0l0,-192.03423l-3.94669,0zm1.97334,193.92028l41.20475,0l0,-3.7721l-41.20475,0l0,3.7721zm43.17809,-1.88605l0,-125.45988l-3.94669,0l0,125.45988l3.94669,0zm-1.97334,-123.57383l1.66787,0l0,-3.7721l-1.66787,0l0,3.7721zm-0.16497,-1.18689l51.99653,124.52214l3.66559,-1.39851l-51.99653,-124.52186l-3.66559,1.39822zm53.82927,125.70941l28.05858,0l0,-3.7721l-28.05858,0l0,3.7721zm29.89083,-1.18538l51.99564,-124.05298l-3.66351,-1.40275l-51.99663,124.05346l3.6645,1.40228zm50.16438,-122.86826l1.66748,0l0,-3.7721l-1.66748,0l0,3.7721zm-0.30587,-1.88605l0,124.99101l3.94669,0l0,-124.99101l-3.94669,0zm1.97334,126.87706l41.2054,0l0,-3.7721l-41.2054,0l0,3.7721zm43.17874,-1.88605l0,-192.03423l-3.94669,0l0,192.03423l3.94669,0zm-1.97334,-193.92028l-52.38932,0l0,3.7721l52.38932,0l0,-3.7721zm-54.21565,1.17075l-55.33158,129.02272l3.65167,1.43057l55.33158,-129.02268l-3.65167,-1.43061zm-53.50624,127.85242l-2.3542,0l0,3.7721l2.3542,0l0,-3.7721zm-0.52787,1.17029l-55.33257,-129.02272l-3.65177,1.43061l55.33168,129.02268l3.65266,-1.43057zm-57.1584,-130.19347l-52.38897,0l0,3.7721l52.38897,0l0,-3.7721zm222.97554,141.22309l-1.97334,0l0,7.14247l3.68917,-6.21076l-1.71582,-0.93171zm0,-91.3285l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-39.92963,0l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm0,144.02569l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.49942,0l0,1.88605l1.15243,0l0.56635,-0.96l-1.71878,-0.92605zm54.0568,-91.61018l1.97334,0l0,-7.18349l-3.69213,6.25744l1.71878,0.92605zm0,91.61018l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm39.83096,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-144.02569l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-41.20441,0l0,-1.88605l-1.14849,0l-0.56734,0.95491l1.71582,0.93114zm-52.2798,91.3285l0,-91.3285l-3.94669,0l0,91.3285l3.94669,0zm-1.97334,-93.21455l-39.92963,0l0,3.7721l39.92963,0l0,-3.7721zm-41.90297,1.88605l0,144.02569l3.94669,0l0,-144.02569l-3.94669,0zm1.97334,145.91174l41.49942,0l0,-3.7721l-41.49942,0l0,3.7721zm43.21821,-0.96l54.0568,-91.60924l-3.43757,-1.85304l-54.0568,91.61018l3.43757,1.8521zm50.36467,-92.53623l0,91.61018l3.94669,0l0,-91.61018l-3.94669,0zm1.97334,93.49623l39.83096,0l0,-3.7721l-39.83096,0l0,3.7721zm41.80431,-1.88605l0,-144.02569l-3.94669,0l0,144.02569l3.94669,0zm-1.97334,-145.91174l-41.20441,0l0,3.7721l41.20441,0l0,-3.7721zm-42.92023,0.95491l-54.25315,91.32888l3.43165,1.86247l54.25315,-91.32897l-3.43165,-1.86238zm195.23476,92.16629l1.97038,0.10656l0.1184,-1.99261l-2.08878,0l0,1.88605zm-39.43827,0l0,-1.88605l-1.69609,0l-0.25555,1.60126l1.95164,0.28479zm0,-37.97562l-1.95164,0.28008l0.25259,1.60597l1.69905,0l0,-1.88605zm39.43827,0l0,1.88605l2.07596,0l-0.10459,-1.9813l-1.97137,0.09525zm-67.3009,95.46527c20.44976,0 37.27844,-5.73925 49.26848,-15.86168c11.9999,-10.13186 18.99541,-24.52337 20.0028,-41.5214l-3.94077,-0.21312c-0.95411,16.10121 -7.54607,29.51103 -18.67474,38.90733c-11.13854,9.40385 -26.97956,14.91677 -46.65577,14.91677l0,3.7721zm67.3009,-59.3757l-39.43827,0l0,3.7721l39.43827,0l0,-3.7721zm-41.3899,1.60126c-1.17019,7.33862 -4.25453,12.91379 -8.60279,16.651c-4.34234,3.73155 -10.08477,5.75151 -16.81782,5.75151l0,3.7721c7.59047,0 14.30773,-2.29249 19.45717,-6.71905c5.14352,-4.41996 8.58306,-10.84668 9.86573,-18.88691l-3.90229,-0.56864zm-25.42062,22.40251c-9.13954,0 -16.58694,-3.63253 -21.81532,-10.4987c-5.27771,-6.93312 -8.39066,-17.30168 -8.39066,-30.84164l-3.94669,0c0,14.02844 3.21655,25.27213 9.14645,33.06152c5.98121,7.85446 14.62248,12.05092 25.00622,12.05092l0,-3.7721zm-30.20598,-41.34034c0,-13.34381 3.13367,-23.59355 8.42125,-30.45726c5.23923,-6.80119 12.69156,-10.41392 21.78473,-10.41392l0,-3.7721c-10.33144,0 -18.96976,4.16987 -24.9628,11.94936c-5.94569,7.71696 -9.18986,18.8456 -9.18986,32.69393l3.94669,0zm30.20598,-40.87118c7.19284,0 12.97276,2.25817 17.22236,6.10543c4.26736,3.86405 7.1218,9.45024 8.19826,16.29283l3.90229,-0.56016c-1.18006,-7.50403 -4.35912,-13.91962 -9.3872,-18.47122c-5.04584,-4.5682 -11.82329,-7.13898 -19.93571,-7.13898l0,3.7721zm27.37225,24.00423l39.43827,0l0,-3.7721l-39.43827,0l0,3.7721zm41.40964,-1.9813c-0.90872,-17.12251 -8.16866,-31.40302 -20.34419,-41.38636c-12.15876,-9.96919 -29.07525,-15.53926 -49.12443,-15.53926l0,3.7721c19.2924,0 35.24096,5.35365 46.55415,14.63009c11.29641,9.26239 18.1153,22.54924 18.97272,38.71392l3.94175,-0.19049zm-69.46862,-56.92562c-23.33578,0 -42.37658,7.74252 -55.57331,21.26333c-13.18194,13.50572 -20.3728,32.60972 -20.3728,55.07352l3.94669,0c0,-21.7009 6.93729,-39.82188 19.31213,-52.50048c12.36004,-12.66351 30.30563,-20.06428 52.6873,-20.06428l0,-3.7721zm-75.94612,76.33685c0,22.27143 7.06556,41.32902 20.21198,54.83692c13.1622,13.52487 32.25431,21.31237 55.93049,21.31237l0,-3.7721c-22.72898,0 -40.72094,-7.4499 -53.04151,-20.10907c-12.33636,-12.67614 -19.15426,-30.75017 -19.15426,-52.26811l-3.94669,0zm289.01301,18.65964l1.97038,0.10656l0.1184,-1.99261l-2.08878,0l0,1.88605zm-39.43925,0l0,-1.88605l-1.6951,0l-0.25555,1.60126l1.95065,0.28479zm0,-37.97562l-1.95065,0.28008l0.25259,1.60597l1.69806,0l0,-1.88605zm39.43925,0l0,1.88605l2.07596,0l-0.10557,-1.9813l-1.97038,0.09525zm-67.3009,95.46527c20.44878,0 37.27844,-5.73925 49.26848,-15.86168c11.9999,-10.13186 18.99541,-24.52337 20.0028,-41.5214l-3.94077,-0.21312c-0.95411,16.10121 -7.54705,29.51103 -18.67573,38.90733c-11.13854,9.40385 -26.97857,14.91677 -46.65479,14.91677l0,3.7721zm67.3009,-59.3757l-39.43925,0l0,3.7721l39.43925,0l0,-3.7721zm-41.3899,1.60126c-1.17019,7.33862 -4.25453,12.91379 -8.60279,16.651c-4.34234,3.73155 -10.08477,5.75151 -16.81782,5.75151l0,3.7721c7.59047,0 14.30773,-2.29249 19.45717,-6.71905c5.14352,-4.41996 8.58306,-10.84668 9.86573,-18.88691l-3.90229,-0.56864zm-25.42062,22.40251c-9.13954,0 -16.58694,-3.63253 -21.81532,-10.4987c-5.2787,-6.93312 -8.39066,-17.30168 -8.39066,-30.84164l-3.94669,0c0,14.02844 3.21655,25.27213 9.14645,33.06152c5.98121,7.85446 14.62248,12.05092 25.00622,12.05092l0,-3.7721zm-30.20598,-41.34034c0,-13.34381 3.13367,-23.59355 8.42125,-30.45726c5.23923,-6.80119 12.69058,-10.41392 21.78473,-10.41392l0,-3.7721c-10.33144,0 -18.96976,4.16987 -24.9628,11.94936c-5.94569,7.71696 -9.18986,18.8456 -9.18986,32.69393l3.94669,0zm30.20598,-40.87118c7.19284,0 12.97178,2.25817 17.22137,6.10543c4.26834,3.86405 7.12279,9.45024 8.19924,16.29283l3.90229,-0.56016c-1.18006,-7.50403 -4.35912,-13.91962 -9.3872,-18.47122c-5.04584,-4.5682 -11.82428,-7.13898 -19.93571,-7.13898l0,3.7721zm27.37127,24.00423l39.43925,0l0,-3.7721l-39.43925,0l0,3.7721zm41.40964,-1.9813c-0.90774,-17.12251 -8.16767,-31.40302 -20.3432,-41.38636c-12.15876,-9.96919 -29.07525,-15.53926 -49.12443,-15.53926l0,3.7721c19.29141,0 35.24096,5.35365 46.55415,14.63009c11.29641,9.26239 18.11431,22.54924 18.97272,38.71392l3.94077,-0.19049zm-69.46763,-56.92562c-23.33578,0 -42.37658,7.74252 -55.57331,21.26333c-13.18194,13.50572 -20.3728,32.60972 -20.3728,55.07352l3.94669,0c0,-21.7009 6.93729,-39.82188 19.31213,-52.50048c12.36004,-12.66351 30.30563,-20.06428 52.6873,-20.06428l0,-3.7721zm-75.94612,76.33685c0,22.27143 7.06556,41.32902 20.21099,54.83692c13.16319,13.52487 32.25529,21.31237 55.93148,21.31237l0,-3.7721c-22.72898,0 -40.72094,-7.4499 -53.04151,-20.10907c-12.33636,-12.67614 -19.15426,-30.75017 -19.15426,-52.26811l-3.94669,0zm193.55545,18.753l-1.97334,0l0,7.14247l3.68917,-6.21076l-1.71582,-0.93171zm0,-91.3285l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-39.92963,0l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm0,144.02569l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.49942,0l0,1.88605l1.15243,0l0.56635,-0.96l-1.71878,-0.92605zm54.0568,-91.61018l1.97334,0l0,-7.18349l-3.69213,6.25744l1.71878,0.92605zm0,91.61018l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm39.83096,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-144.02569l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-41.20441,0l0,-1.88605l-1.14947,0l-0.56734,0.95491l1.71681,0.93114zm-52.2798,91.3285l0,-91.3285l-3.94669,0l0,91.3285l3.94669,0zm-1.97334,-93.21455l-39.92963,0l0,3.7721l39.92963,0l0,-3.7721zm-41.90297,1.88605l0,144.02569l3.94669,0l0,-144.02569l-3.94669,0zm1.97334,145.91174l41.49942,0l0,-3.7721l-41.49942,0l0,3.7721zm43.21821,-0.96l54.0568,-91.60924l-3.43757,-1.85304l-54.0568,91.61018l3.43757,1.8521zm50.36467,-92.53623l0,91.61018l3.94669,0l0,-91.61018l-3.94669,0zm1.97334,93.49623l39.83096,0l0,-3.7721l-39.83096,0l0,3.7721zm41.80431,-1.88605l0,-144.02569l-3.94669,0l0,144.02569l3.94669,0zm-1.97334,-145.91174l-41.20441,0l0,3.7721l41.20441,0l0,-3.7721zm-42.92122,0.95491l-54.25216,91.32888l3.43165,1.86247l54.25315,-91.32897l-3.43263,-1.86238zm148.14486,144.95684l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm38.94789,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-144.02569l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-130.38377,47.2581l1.97334,0.01037l0,-0.01132l0,-0.01132l-1.97334,0.01226zm28.15666,38.72627l1.74049,0.88927l1.00641,-1.80024l-1.95657,-0.8176l-0.79032,1.72857zm-32.47335,58.04132l-1.74049,-0.88927l-1.55204,2.77532l3.29252,0l0,-1.88605zm40.02731,0l0,1.88605l1.18499,0l0.55747,-0.99961l-1.74246,-0.88644zm28.94205,-51.94654l0,-1.88605l-1.18499,0l-0.55747,0.99961l1.74246,0.88644zm26.78321,0l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm0,-27.00541l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm-51.60492,-16.68966l1.97334,0.03772l0.00099,-0.03866l-0.00099,-0.03772l-1.97334,0.03866zm51.60492,-17.06593l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm0,114.59359l38.94789,0l0,-3.7721l-38.94789,0l0,3.7721zm40.92123,-1.88605l0,-144.02569l-3.94669,0l0,144.02569l3.94669,0zm-1.97334,-145.91174l-67.20322,0l0,3.7721l67.20322,0l0,-3.7721zm-67.20322,0c-19.84,0 -36.1566,4.85894 -47.53292,13.48922c-11.41974,8.66291 -17.7226,21.02946 -17.62098,35.66814l3.94669,-0.02546c-0.09373,-13.49158 5.66942,-24.75432 16.12814,-32.68808c10.50115,-7.96639 25.8735,-12.67171 45.07907,-12.67171l0,-3.7721zm-65.1539,49.13472c-0.10261,18.38993 10.76755,32.70411 29.33968,40.46333l1.58065,-3.45619c-17.33484,-7.24243 -27.06639,-20.30805 -26.97364,-36.98733l-3.94669,-0.0198zm28.38951,37.84643l-32.47335,58.04132l3.48098,1.77855l32.47335,-58.04132l-3.48098,-1.77855zm-30.73286,60.81664l40.02731,0l0,-3.7721l-40.02731,0l0,3.7721zm41.76977,-0.99961l28.94106,-51.94654l-3.48394,-1.77289l-28.94106,51.94654l3.48394,1.77289zm27.19959,-50.94694l26.78321,0l0,-3.7721l-26.78321,0l0,3.7721zm24.80987,-1.88605l0,51.94654l3.94669,0l0,-51.94654l-3.94669,0zm1.97334,-28.89146l-28.64704,0l0,3.7721l28.64704,0l0,-3.7721zm-28.64704,0c-7.29249,0 -12.59585,-1.75403 -16.01073,-4.40581c-3.3754,-2.62255 -5.05965,-6.23434 -4.97381,-10.36007l-3.9457,-0.07544c-0.10952,5.24982 2.08089,9.98381 6.43113,13.36267c4.31077,3.34868 10.58403,5.25076 18.49911,5.25076l0,-3.7721zm-20.98454,-14.84227c-0.08584,-4.0154 1.63492,-7.7345 5.11096,-10.48823c3.50071,-2.77221 8.90471,-4.65298 16.26529,-4.65298l0,-3.7721c-8.04138,0 -14.41034,2.0573 -18.78328,5.52066c-4.39562,3.48174 -6.64918,8.29542 -6.53868,13.46904l3.9457,-0.07639zm21.37625,-15.14121l28.25533,0l0,-3.7721l-28.25533,0l0,3.7721zm26.28198,-1.88605l0,33.75559l3.94669,0l0,-33.75559l-3.94669,0z"></path>
                    </g>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="973" height="207"    fill="none" viewBox="0 0 973 207">
                    <g>
                      <title>Layer 1</title>
                      <path stroke="null" id="svg_1" fill="#282828" d="m7.6722,6.24968l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm0,192.03423l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.20475,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-125.45988l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm1.66787,0l1.83274,-0.69906l-0.49561,-1.18699l-1.33714,0l0,1.88605zm51.99643,124.52252l-1.83274,0.69878l0.49561,1.18727l1.33714,0l0,-1.88605zm28.05858,0l0,1.88605l1.33497,0l0.49728,-1.18538l-1.83225,-0.70067zm51.99663,-124.05364l0,-1.88605l-1.33595,0l-0.4963,1.18463l1.83225,0.70142zm1.66748,0l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm0,124.99101l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.2054,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-192.03423l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-52.38932,0l0,-1.88605l-1.32411,0l-0.50222,1.17075l1.82633,0.7153zm-55.33257,129.02317l0,1.88605l1.32411,0l0.50222,-1.17124l-1.82633,-0.71481zm-2.3542,0l-1.82633,0.71481l0.50222,1.17124l1.32411,0l0,-1.88605zm-55.33207,-129.02317l1.82584,-0.7153l-0.50202,-1.17075l-1.32382,0l0,1.88605zm-54.36231,0l0,192.03423l3.94669,0l0,-192.03423l-3.94669,0zm1.97334,193.92028l41.20475,0l0,-3.7721l-41.20475,0l0,3.7721zm43.17809,-1.88605l0,-125.45988l-3.94669,0l0,125.45988l3.94669,0zm-1.97334,-123.57383l1.66787,0l0,-3.7721l-1.66787,0l0,3.7721zm-0.16497,-1.18689l51.99653,124.52214l3.66559,-1.39851l-51.99653,-124.52186l-3.66559,1.39822zm53.82927,125.70941l28.05858,0l0,-3.7721l-28.05858,0l0,3.7721zm29.89083,-1.18538l51.99564,-124.05298l-3.66351,-1.40275l-51.99663,124.05346l3.6645,1.40228zm50.16438,-122.86826l1.66748,0l0,-3.7721l-1.66748,0l0,3.7721zm-0.30587,-1.88605l0,124.99101l3.94669,0l0,-124.99101l-3.94669,0zm1.97334,126.87706l41.2054,0l0,-3.7721l-41.2054,0l0,3.7721zm43.17874,-1.88605l0,-192.03423l-3.94669,0l0,192.03423l3.94669,0zm-1.97334,-193.92028l-52.38932,0l0,3.7721l52.38932,0l0,-3.7721zm-54.21565,1.17075l-55.33158,129.02272l3.65167,1.43057l55.33158,-129.02268l-3.65167,-1.43061zm-53.50624,127.85242l-2.3542,0l0,3.7721l2.3542,0l0,-3.7721zm-0.52787,1.17029l-55.33257,-129.02272l-3.65177,1.43061l55.33168,129.02268l3.65266,-1.43057zm-57.1584,-130.19347l-52.38897,0l0,3.7721l52.38897,0l0,-3.7721zm222.97554,141.22309l-1.97334,0l0,7.14247l3.68917,-6.21076l-1.71582,-0.93171zm0,-91.3285l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-39.92963,0l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm0,144.02569l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.49942,0l0,1.88605l1.15243,0l0.56635,-0.96l-1.71878,-0.92605zm54.0568,-91.61018l1.97334,0l0,-7.18349l-3.69213,6.25744l1.71878,0.92605zm0,91.61018l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm39.83096,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-144.02569l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-41.20441,0l0,-1.88605l-1.14849,0l-0.56734,0.95491l1.71582,0.93114zm-52.2798,91.3285l0,-91.3285l-3.94669,0l0,91.3285l3.94669,0zm-1.97334,-93.21455l-39.92963,0l0,3.7721l39.92963,0l0,-3.7721zm-41.90297,1.88605l0,144.02569l3.94669,0l0,-144.02569l-3.94669,0zm1.97334,145.91174l41.49942,0l0,-3.7721l-41.49942,0l0,3.7721zm43.21821,-0.96l54.0568,-91.60924l-3.43757,-1.85304l-54.0568,91.61018l3.43757,1.8521zm50.36467,-92.53623l0,91.61018l3.94669,0l0,-91.61018l-3.94669,0zm1.97334,93.49623l39.83096,0l0,-3.7721l-39.83096,0l0,3.7721zm41.80431,-1.88605l0,-144.02569l-3.94669,0l0,144.02569l3.94669,0zm-1.97334,-145.91174l-41.20441,0l0,3.7721l41.20441,0l0,-3.7721zm-42.92023,0.95491l-54.25315,91.32888l3.43165,1.86247l54.25315,-91.32897l-3.43165,-1.86238zm195.23476,92.16629l1.97038,0.10656l0.1184,-1.99261l-2.08878,0l0,1.88605zm-39.43827,0l0,-1.88605l-1.69609,0l-0.25555,1.60126l1.95164,0.28479zm0,-37.97562l-1.95164,0.28008l0.25259,1.60597l1.69905,0l0,-1.88605zm39.43827,0l0,1.88605l2.07596,0l-0.10459,-1.9813l-1.97137,0.09525zm-67.3009,95.46527c20.44976,0 37.27844,-5.73925 49.26848,-15.86168c11.9999,-10.13186 18.99541,-24.52337 20.0028,-41.5214l-3.94077,-0.21312c-0.95411,16.10121 -7.54607,29.51103 -18.67474,38.90733c-11.13854,9.40385 -26.97956,14.91677 -46.65577,14.91677l0,3.7721zm67.3009,-59.3757l-39.43827,0l0,3.7721l39.43827,0l0,-3.7721zm-41.3899,1.60126c-1.17019,7.33862 -4.25453,12.91379 -8.60279,16.651c-4.34234,3.73155 -10.08477,5.75151 -16.81782,5.75151l0,3.7721c7.59047,0 14.30773,-2.29249 19.45717,-6.71905c5.14352,-4.41996 8.58306,-10.84668 9.86573,-18.88691l-3.90229,-0.56864zm-25.42062,22.40251c-9.13954,0 -16.58694,-3.63253 -21.81532,-10.4987c-5.27771,-6.93312 -8.39066,-17.30168 -8.39066,-30.84164l-3.94669,0c0,14.02844 3.21655,25.27213 9.14645,33.06152c5.98121,7.85446 14.62248,12.05092 25.00622,12.05092l0,-3.7721zm-30.20598,-41.34034c0,-13.34381 3.13367,-23.59355 8.42125,-30.45726c5.23923,-6.80119 12.69156,-10.41392 21.78473,-10.41392l0,-3.7721c-10.33144,0 -18.96976,4.16987 -24.9628,11.94936c-5.94569,7.71696 -9.18986,18.8456 -9.18986,32.69393l3.94669,0zm30.20598,-40.87118c7.19284,0 12.97276,2.25817 17.22236,6.10543c4.26736,3.86405 7.1218,9.45024 8.19826,16.29283l3.90229,-0.56016c-1.18006,-7.50403 -4.35912,-13.91962 -9.3872,-18.47122c-5.04584,-4.5682 -11.82329,-7.13898 -19.93571,-7.13898l0,3.7721zm27.37225,24.00423l39.43827,0l0,-3.7721l-39.43827,0l0,3.7721zm41.40964,-1.9813c-0.90872,-17.12251 -8.16866,-31.40302 -20.34419,-41.38636c-12.15876,-9.96919 -29.07525,-15.53926 -49.12443,-15.53926l0,3.7721c19.2924,0 35.24096,5.35365 46.55415,14.63009c11.29641,9.26239 18.1153,22.54924 18.97272,38.71392l3.94175,-0.19049zm-69.46862,-56.92562c-23.33578,0 -42.37658,7.74252 -55.57331,21.26333c-13.18194,13.50572 -20.3728,32.60972 -20.3728,55.07352l3.94669,0c0,-21.7009 6.93729,-39.82188 19.31213,-52.50048c12.36004,-12.66351 30.30563,-20.06428 52.6873,-20.06428l0,-3.7721zm-75.94612,76.33685c0,22.27143 7.06556,41.32902 20.21198,54.83692c13.1622,13.52487 32.25431,21.31237 55.93049,21.31237l0,-3.7721c-22.72898,0 -40.72094,-7.4499 -53.04151,-20.10907c-12.33636,-12.67614 -19.15426,-30.75017 -19.15426,-52.26811l-3.94669,0zm289.01301,18.65964l1.97038,0.10656l0.1184,-1.99261l-2.08878,0l0,1.88605zm-39.43925,0l0,-1.88605l-1.6951,0l-0.25555,1.60126l1.95065,0.28479zm0,-37.97562l-1.95065,0.28008l0.25259,1.60597l1.69806,0l0,-1.88605zm39.43925,0l0,1.88605l2.07596,0l-0.10557,-1.9813l-1.97038,0.09525zm-67.3009,95.46527c20.44878,0 37.27844,-5.73925 49.26848,-15.86168c11.9999,-10.13186 18.99541,-24.52337 20.0028,-41.5214l-3.94077,-0.21312c-0.95411,16.10121 -7.54705,29.51103 -18.67573,38.90733c-11.13854,9.40385 -26.97857,14.91677 -46.65479,14.91677l0,3.7721zm67.3009,-59.3757l-39.43925,0l0,3.7721l39.43925,0l0,-3.7721zm-41.3899,1.60126c-1.17019,7.33862 -4.25453,12.91379 -8.60279,16.651c-4.34234,3.73155 -10.08477,5.75151 -16.81782,5.75151l0,3.7721c7.59047,0 14.30773,-2.29249 19.45717,-6.71905c5.14352,-4.41996 8.58306,-10.84668 9.86573,-18.88691l-3.90229,-0.56864zm-25.42062,22.40251c-9.13954,0 -16.58694,-3.63253 -21.81532,-10.4987c-5.2787,-6.93312 -8.39066,-17.30168 -8.39066,-30.84164l-3.94669,0c0,14.02844 3.21655,25.27213 9.14645,33.06152c5.98121,7.85446 14.62248,12.05092 25.00622,12.05092l0,-3.7721zm-30.20598,-41.34034c0,-13.34381 3.13367,-23.59355 8.42125,-30.45726c5.23923,-6.80119 12.69058,-10.41392 21.78473,-10.41392l0,-3.7721c-10.33144,0 -18.96976,4.16987 -24.9628,11.94936c-5.94569,7.71696 -9.18986,18.8456 -9.18986,32.69393l3.94669,0zm30.20598,-40.87118c7.19284,0 12.97178,2.25817 17.22137,6.10543c4.26834,3.86405 7.12279,9.45024 8.19924,16.29283l3.90229,-0.56016c-1.18006,-7.50403 -4.35912,-13.91962 -9.3872,-18.47122c-5.04584,-4.5682 -11.82428,-7.13898 -19.93571,-7.13898l0,3.7721zm27.37127,24.00423l39.43925,0l0,-3.7721l-39.43925,0l0,3.7721zm41.40964,-1.9813c-0.90774,-17.12251 -8.16767,-31.40302 -20.3432,-41.38636c-12.15876,-9.96919 -29.07525,-15.53926 -49.12443,-15.53926l0,3.7721c19.29141,0 35.24096,5.35365 46.55415,14.63009c11.29641,9.26239 18.11431,22.54924 18.97272,38.71392l3.94077,-0.19049zm-69.46763,-56.92562c-23.33578,0 -42.37658,7.74252 -55.57331,21.26333c-13.18194,13.50572 -20.3728,32.60972 -20.3728,55.07352l3.94669,0c0,-21.7009 6.93729,-39.82188 19.31213,-52.50048c12.36004,-12.66351 30.30563,-20.06428 52.6873,-20.06428l0,-3.7721zm-75.94612,76.33685c0,22.27143 7.06556,41.32902 20.21099,54.83692c13.16319,13.52487 32.25529,21.31237 55.93148,21.31237l0,-3.7721c-22.72898,0 -40.72094,-7.4499 -53.04151,-20.10907c-12.33636,-12.67614 -19.15426,-30.75017 -19.15426,-52.26811l-3.94669,0zm193.55545,18.753l-1.97334,0l0,7.14247l3.68917,-6.21076l-1.71582,-0.93171zm0,-91.3285l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-39.92963,0l0,-1.88605l-1.97334,0l0,1.88605l1.97334,0zm0,144.02569l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm41.49942,0l0,1.88605l1.15243,0l0.56635,-0.96l-1.71878,-0.92605zm54.0568,-91.61018l1.97334,0l0,-7.18349l-3.69213,6.25744l1.71878,0.92605zm0,91.61018l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm39.83096,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-144.02569l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-41.20441,0l0,-1.88605l-1.14947,0l-0.56734,0.95491l1.71681,0.93114zm-52.2798,91.3285l0,-91.3285l-3.94669,0l0,91.3285l3.94669,0zm-1.97334,-93.21455l-39.92963,0l0,3.7721l39.92963,0l0,-3.7721zm-41.90297,1.88605l0,144.02569l3.94669,0l0,-144.02569l-3.94669,0zm1.97334,145.91174l41.49942,0l0,-3.7721l-41.49942,0l0,3.7721zm43.21821,-0.96l54.0568,-91.60924l-3.43757,-1.85304l-54.0568,91.61018l3.43757,1.8521zm50.36467,-92.53623l0,91.61018l3.94669,0l0,-91.61018l-3.94669,0zm1.97334,93.49623l39.83096,0l0,-3.7721l-39.83096,0l0,3.7721zm41.80431,-1.88605l0,-144.02569l-3.94669,0l0,144.02569l3.94669,0zm-1.97334,-145.91174l-41.20441,0l0,3.7721l41.20441,0l0,-3.7721zm-42.92122,0.95491l-54.25216,91.32888l3.43165,1.86247l54.25315,-91.32897l-3.43263,-1.86238zm148.14486,144.95684l-1.97334,0l0,1.88605l1.97334,0l0,-1.88605zm38.94789,0l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm0,-144.02569l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm-130.38377,47.2581l1.97334,0.01037l0,-0.01132l0,-0.01132l-1.97334,0.01226zm28.15666,38.72627l1.74049,0.88927l1.00641,-1.80024l-1.95657,-0.8176l-0.79032,1.72857zm-32.47335,58.04132l-1.74049,-0.88927l-1.55204,2.77532l3.29252,0l0,-1.88605zm40.02731,0l0,1.88605l1.18499,0l0.55747,-0.99961l-1.74246,-0.88644zm28.94205,-51.94654l0,-1.88605l-1.18499,0l-0.55747,0.99961l1.74246,0.88644zm26.78321,0l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm0,-27.00541l0,1.88605l1.97334,0l0,-1.88605l-1.97334,0zm-51.60492,-16.68966l1.97334,0.03772l0.00099,-0.03866l-0.00099,-0.03772l-1.97334,0.03866zm51.60492,-17.06593l1.97334,0l0,-1.88605l-1.97334,0l0,1.88605zm0,114.59359l38.94789,0l0,-3.7721l-38.94789,0l0,3.7721zm40.92123,-1.88605l0,-144.02569l-3.94669,0l0,144.02569l3.94669,0zm-1.97334,-145.91174l-67.20322,0l0,3.7721l67.20322,0l0,-3.7721zm-67.20322,0c-19.84,0 -36.1566,4.85894 -47.53292,13.48922c-11.41974,8.66291 -17.7226,21.02946 -17.62098,35.66814l3.94669,-0.02546c-0.09373,-13.49158 5.66942,-24.75432 16.12814,-32.68808c10.50115,-7.96639 25.8735,-12.67171 45.07907,-12.67171l0,-3.7721zm-65.1539,49.13472c-0.10261,18.38993 10.76755,32.70411 29.33968,40.46333l1.58065,-3.45619c-17.33484,-7.24243 -27.06639,-20.30805 -26.97364,-36.98733l-3.94669,-0.0198zm28.38951,37.84643l-32.47335,58.04132l3.48098,1.77855l32.47335,-58.04132l-3.48098,-1.77855zm-30.73286,60.81664l40.02731,0l0,-3.7721l-40.02731,0l0,3.7721zm41.76977,-0.99961l28.94106,-51.94654l-3.48394,-1.77289l-28.94106,51.94654l3.48394,1.77289zm27.19959,-50.94694l26.78321,0l0,-3.7721l-26.78321,0l0,3.7721zm24.80987,-1.88605l0,51.94654l3.94669,0l0,-51.94654l-3.94669,0zm1.97334,-28.89146l-28.64704,0l0,3.7721l28.64704,0l0,-3.7721zm-28.64704,0c-7.29249,0 -12.59585,-1.75403 -16.01073,-4.40581c-3.3754,-2.62255 -5.05965,-6.23434 -4.97381,-10.36007l-3.9457,-0.07544c-0.10952,5.24982 2.08089,9.98381 6.43113,13.36267c4.31077,3.34868 10.58403,5.25076 18.49911,5.25076l0,-3.7721zm-20.98454,-14.84227c-0.08584,-4.0154 1.63492,-7.7345 5.11096,-10.48823c3.50071,-2.77221 8.90471,-4.65298 16.26529,-4.65298l0,-3.7721c-8.04138,0 -14.41034,2.0573 -18.78328,5.52066c-4.39562,3.48174 -6.64918,8.29542 -6.53868,13.46904l3.9457,-0.07639zm21.37625,-15.14121l28.25533,0l0,-3.7721l-28.25533,0l0,3.7721zm26.28198,-1.88605l0,33.75559l3.94669,0l0,-33.75559l-3.94669,0z"></path>
                    </g>
                  </svg>
                </div>

                <div className="Introduction__content">
                  <div className="Introduction__content-group">
                    <div style={{marginLeft: '85px'}} className="Introduction__content-item back-red">Наша миссия</div>
                    <div className="Introduction__content-item-group">
                      <div className="Introduction__content-item back-black">помогать</div>
                      <div style={{marginLeft: '10px'}} className="Introduction__content-item back-black">животным</div>
                    </div>
                    <div className="Introduction__content-item-group">
                      <div className="Introduction__content-item back-white">и</div>
                      <div style={{marginLeft: '10px', marginRight: '10px'}} className="Introduction__content-item back-white">развивать</div>
                      <div className="Introduction__content-item back-white">культуру</div>
                    </div>
                    <div className="Introduction__content-item-group">
                      <div className="Introduction__content-item back-red">ответственного</div>
                      <div style={{marginLeft: '10px'}} className="Introduction__content-item back-white">отношения</div>
                    </div>
                    <div className="Introduction__content-item back-black">к ним</div>
                  </div>

                  <div className="Introduction__content-descr">
                    Это наша общая ответственность — <br />
                    защитников, владельцев домашних <br /> 
                    животных, приютов, волонтеров, обычных <br /> 
                    людей, лидеров мнений, руководителей <br />
                    бизнеса и целых сообществ.
                  </div>
                </div>

                <div className="Introduction__mission-content">
                  <div className="Introduction__mission-content-group">
                    
                  </div>
                  <div className="Introduction__mission-content-descr">
                    
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Секция 2. Как мы живем? */}
      <section className="HowWeLive">
        <div className="HowWeLive__wrapper">
          <div className="HowWeLive__container">

            {/* Контент */}
            <div className="HowWeLive__content-wrapper">
              <div className="HowWeLive__content">
                <h2 className="HowWeLive__title">Как мы живем</h2>
                <div className="HowWeLive__descr">
                  Нам важно, чтобы наши животные больше никогда не попали 
                  в беду. Каждый день им необходим уход, качественное питание 
                  и просто человеческое внимание. Наша деревня нуждается в 
                  ремонте, оплате коммунальных услуг и вашей поддержке.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция 3. Команда Vetland Adoption */}
      <div className="Team">
        <div className="Team__wrapper">
          <div className="Team__container">

            <div className="Team__content">

              {/* Шапка с контентом */}
              <div className="Team__content-header">
                <h2 className="Team__header-title">Команда Vetland Adoption</h2>
                <div className="Team__header-descr">
                  Наша команда делает всё возможное, чтобы дать животным шанс стать 
                  домашними. Мы ищем единомышленников — людей, для которых любовь к 
                  животным и помощь им — не пустые слова. Которые, как и мы, мечтают, 
                  чтобы у каждого питомца появился свой человек.
                </div>
              </div>

              {/* Группа карточек */}
              <div className="Team__content-cards">

                <div className="Team__card-item">
                  <img src={PhotoVeterinarianFemale} alt="Ветеринар" className="Team__card-img" />
                  <div className="Team__card-info">
                    <div className="Team__info-full-name">Анастасия Ткаченко</div>
                    <div className="Team__info-descr">Ветеринарный врач ординатор</div>
                  </div>
                </div>

                <div className="Team__card-item">
                  <img src={PhotoManagingPartnerMale} alt="Управляющий менеджер" className="Team__card-img" />
                  <div className="Team__card-info">
                    <div className="Team__info-full-name">Сергей Пономаренко</div>
                    <div className="Team__info-descr">Управляющий партнер</div>
                  </div>
                </div>

                <div className="Team__card-item">
                  <img src={PhotoManagingPartnerFemale} alt="Управляющий менеджер" className="Team__card-img" />
                  <div className="Team__card-info">
                    <div className="Team__info-full-name">Линда Арсланова</div>
                    <div className="Team__info-descr">Управляющий партнер</div>
                  </div>
                </div>

                <div className="Team__card-item">
                  <img src={PhotoHeadShelterFemale} alt="Руководитель пристройства приютов" className="Team__card-img" />
                  <div className="Team__card-info">
                    <div className="Team__info-full-name">Наталья Габрусевич</div>
                    <div className="Team__info-descr">Руководитель направления пристройства</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Секция 4. Чем я могу помочь? */}

      {/* Секция 5. Документы */}


    </div>
  )
}

export default AboutUs;