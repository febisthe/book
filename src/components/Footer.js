import React from 'react';

import "../css/layout.css"
import logo from '../image/logo_footer.svg'
import commu1 from '../image/img_edu.png'
import commu2 from '../image/img_switch.svg'
import commu3 from '../image/img_busan.svg'
import commu4 from '../image/img_cafe.svg'
import commu5 from '../image/img_school.svg'


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="foot-inner">
          <img src={logo} alt="footer logo"/>
          <div className="content">
            <div className="family smallTxt">
              <div className="item">
                <span className="tit">회사/연구</span>
                <ul>
                  <li><a href="">Changbi English</a></li>
                  <li><a href="">창비교육</a></li>
                  <li><a href="">미디어창비</a></li>
                  <li><a href="">세교연구소</a></li>
                </ul>
              </div>
              <div className="item">
                <span className="tit">연재</span>
                <ul>
                  <li><a href="">창작과비평 전자구독</a></li>
                  <li><a href="">시요일</a></li>
                  <li><a href="">스위치 연재</a></li>
                </ul>
              </div>
              <div className="item">
                <span className="tit">도서관/학교</span>
                <ul>
                  <li><a href="">책씨앗</a></li>
                  <li><a href="">더책</a></li>
                  <li><a href="">오디오스쿨</a></li>
                  <li><a href="">창비교육연수원</a></li>
                </ul>
              </div>
              <div className="item">
                <span className="tit">대관</span>
                <ul>
                  <li><a href="">창비서교빌딩</a></li>
                  <li><a href="">스튜디오 창비</a></li>
                </ul> 
              </div>
            </div>
            <div className="community smallTxt">
              <span className="tit">커뮤니티</span>
              <div className="link-site">
                <a href="">
                  <img src={commu1} alt="창비교육 교과서"/>
                  <p>국어│사회│미술<br/>수업지원자료실</p>
                </a>
                <a href="">
                  <img src={commu2} alt="스위치"/>
                  <p>함께 읽고 성장하는<br/>독서 커뮤니티, 스위치</p>
                </a>
                <a href="">
                  <img src={commu3} alt="창비부산"/>
                  <p>책과 일상을 깨우는<br/>머무는 공간, 창비부산</p>
                </a>
                <a href="">
                  <img src={commu4} alt="카페창비"/>
                  <p>일상을 깨우는<br/>책과 커피, 카페창비</p>
                </a>
                <a href="">
                  <img src={commu5} alt="창비학당"/>
                  <p>나와 세상을 바꾸는<br/>열린 배움터, 창비학당</p>
                </a>
              </div>
            </div>
          </div>
          <div className="info smallTxt">
            <small className="copy">copyright (c) Changbi Publishers, Inc. All Rights Reserved.</small>
            <br/>
            <adreess>10881 경기도 파주시 회동길 184 (413-756 경기도 파주시 문발동 출판문화정보산업단지 513-11)</adreess>
            <p>
              전화 031-955-3333(월~금 10시~17시, 점심시간 11시 30분~13시) | 메일 changbi_pr@changbi.com
              <br/>
              대표이사: 염종선 | 사업자등록번호: 105-81-63672 | 
              <a href="" className="policy">개인정보처리방침</a>
            </p>
          </div>
          <div className="sns">
            <ul>
              <li>
                <a href="">
                  <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path id="패스_28" data-name="패스 28" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" fill="#2c3338" fill-rule="evenodd" class="buttons-circle"></path> <g id="그룹_934" data-name="그룹 934" transform="translate(-0.952 -0.952)"><path id="패스_29" data-name="패스 29" d="M18.74,8.74c-2.716,0-3.056.011-4.123.06a7.345,7.345,0,0,0-2.428.464,5.113,5.113,0,0,0-2.924,2.924A7.35,7.35,0,0,0,8.8,14.617c-.049,1.067-.06,1.407-.06,4.123s.011,3.056.06,4.123a7.338,7.338,0,0,0,.464,2.428,5.113,5.113,0,0,0,2.924,2.924,7.351,7.351,0,0,0,2.428.464c1.067.049,1.407.06,4.123.06s3.056-.011,4.123-.06a7.345,7.345,0,0,0,2.428-.464,5.113,5.113,0,0,0,2.924-2.924,7.344,7.344,0,0,0,.464-2.428c.049-1.067.06-1.407.06-4.123s-.011-3.056-.06-4.123a7.344,7.344,0,0,0-.464-2.428,5.113,5.113,0,0,0-2.924-2.924A7.351,7.351,0,0,0,22.863,8.8c-1.067-.05-1.407-.06-4.123-.06m0,1.8c2.67,0,2.986.011,4.041.058a5.537,5.537,0,0,1,1.857.343,3.316,3.316,0,0,1,1.9,1.9,5.552,5.552,0,0,1,.343,1.857c.049,1.054.058,1.37.058,4.04s-.01,2.986-.058,4.041a5.536,5.536,0,0,1-.343,1.857,3.316,3.316,0,0,1-1.9,1.9,5.552,5.552,0,0,1-1.857.343c-1.053.049-1.369.058-4.04.058s-2.987-.01-4.041-.058a5.537,5.537,0,0,1-1.857-.343,3.316,3.316,0,0,1-1.9-1.9A5.552,5.552,0,0,1,10.6,22.78c-.049-1.054-.058-1.369-.058-4.04s.01-2.986.058-4.041a5.537,5.537,0,0,1,.343-1.857,3.316,3.316,0,0,1,1.9-1.9A5.552,5.552,0,0,1,14.7,10.6c1.054-.049,1.37-.058,4.04-.058" transform="translate(0.212 0.212)" fill="#f1f1f2" fill-rule="evenodd"></path> <path id="패스_30" data-name="패스 30" d="M18.2,21.476a3.218,3.218,0,1,1,3.218-3.218A3.218,3.218,0,0,1,18.2,21.476m0-8.176a4.957,4.957,0,1,0,4.957,4.957A4.957,4.957,0,0,0,18.2,13.3m6.312-.2a1.158,1.158,0,1,1-1.159-1.158A1.158,1.158,0,0,1,24.514,13.1" transform="translate(0.808 0.636)" fill="#f1f1f2" fill-rule="evenodd"></path></g></svg>
                </a>
              </li>
              <li>
                <a href="">
                <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path id="패스_33" data-name="패스 33" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" fill="#2c3338" fill-rule="evenodd" class="buttons-circle"></path> <path id="패스_34" data-name="패스 34" d="M15.677,28.2A12.176,12.176,0,0,0,27.935,15.94q0-.28-.013-.557a8.772,8.772,0,0,0,2.15-2.23,8.623,8.623,0,0,1-2.474.678,4.322,4.322,0,0,0,1.894-2.384,8.618,8.618,0,0,1-2.735,1.046,4.314,4.314,0,0,0-7.343,3.93,12.23,12.23,0,0,1-8.88-4.5,4.31,4.31,0,0,0,1.334,5.752,4.282,4.282,0,0,1-1.952-.538v.055a4.31,4.31,0,0,0,3.456,4.224,4.307,4.307,0,0,1-1.136.152,4.36,4.36,0,0,1-.81-.078,4.314,4.314,0,0,0,4.025,2.992A8.647,8.647,0,0,1,10.1,26.323a8.822,8.822,0,0,1-1.028-.059,12.193,12.193,0,0,0,6.6,1.936" transform="translate(-0.972 -1.532)" fill="#fff" fill-rule="evenodd"></path></svg>              </a>
              </li>
              <li>
                <a href="">
                  <svg id="naver" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path id="패스_31" data-name="패스 31" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" fill="#2c3338" fill-rule="evenodd" class="buttons-circle"></path> <path id="패스_32" data-name="패스 32" d="M21.6,19.3l-5.932-8.521H10.747V26.7H15.9V18.183L21.83,26.7h4.917V10.783H21.6Z" transform="translate(-0.747 -0.743)" fill="#f1f1f2" fill-rule="evenodd"></path></svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path id="패스_26" data-name="패스 26" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" fill="#2c3338" fill-rule="evenodd" class="buttons-circle"></path> <path id="패스_27" data-name="패스 27" d="M23.278,20.552l.571-3.717H20.283V14.423a1.859,1.859,0,0,1,2.1-2.009H24V9.251A19.779,19.779,0,0,0,21.121,9c-2.936,0-4.858,1.779-4.858,5v2.833H13v3.717h3.264v9.14h4.019v-9.14h3Z" transform="translate(-0.5 -1.346)" fill="#fff" fill-rule="evenodd"></path></svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g id="youtube" transform="translate(-0.386 -0.284)" opacity="0.996"><path id="패스_33" data-name="패스 33" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" transform="translate(0.386 0.284)" fill="#2c3338" fill-rule="evenodd" class="buttons-circle"></path> <g id="그룹_935" data-name="그룹 935" transform="translate(-102.481 -27.157)"><path id="제외_1" data-name="제외 1" d="M9.523,13.994H9.5c-3.492,0-5.618-.142-6.574-.227a3.032,3.032,0,0,1-1.893-.789,3.031,3.031,0,0,1-.811-1.842C.138,10.528.072,9.315.031,8.4-.01,7.47-.01,6.524.031,5.59c.04-.911.106-2.124.19-2.732a3.032,3.032,0,0,1,.811-1.842A3.034,3.034,0,0,1,2.926.227C3.875.142,5.991,0,9.5,0h.023c3.508,0,5.625.142,6.575.227a3.033,3.033,0,0,1,1.893.788A3.034,3.034,0,0,1,18.8,2.858c.084.607.15,1.821.19,2.732.042.933.042,1.88,0,2.814-.04.911-.106,2.125-.19,2.732a3.035,3.035,0,0,1-.812,1.842,3.03,3.03,0,0,1-1.893.789C15.141,13.852,13.015,13.994,9.523,13.994ZM7.439,3.4h0v7.181L12.711,7,7.439,3.4Z" transform="translate(111.355 38.444)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"></path></g></g></svg>              
                </a>
              </li>
            </ul>
            <a href="" className="btn-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" alt="" class="go-up-button"><g id="그룹_678" data-name="그룹 678" transform="translate(-1750 -919)"><circle id="타원_42" data-name="타원 42" cx="22" cy="22" r="22" transform="translate(1750 919)" fill="#2c3338"></circle> <g id="그룹_677" data-name="그룹 677" transform="translate(1776.492 932.916) rotate(90)"><line id="선_46" data-name="선 46" x2="16.167" transform="translate(0 4.492)" fill="none" stroke="#fff" stroke-width="1"></line> <line id="선_47" data-name="선 47" x2="4.588" y2="4.492" transform="translate(11.579)" fill="none" stroke="#fff" stroke-width="1"></line> <line id="선_48" data-name="선 48" y1="4.492" x2="4.588" transform="translate(11.579 4.492)" fill="none" stroke="#fff" stroke-width="1"></line></g></g></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
