import React from 'react';

import "../css/main.css";
import visual from '../image/img_visual.png'
import quart from '../image/img_quart.jpg'
import Book from '../routes/Book'

const Main = () => {
  return (
    <>
      <main id="main">
        <section className="sc-visual product">
          <div className="inner">
            <div className="col-left">
              <h2 className="headline">
                한결같되
                <br/>
                날로 새롭게
              </h2>
              <p className="desc">
                1966년부터 지금까지
                <br/>
                독자와 함께 더 나은 세상을
              </p>
              <a href="" className="link-more">회사 소개 보러가기</a>
            </div>
            <div className="col-right">
              <img src={visual} alt="visual img"/>
            </div>
          </div>
        </section>
        <section className="sc-book">
          <div className="inner">
            <h2 className="headline">창비의 책</h2>
            <Book />
          </div>
        </section>
        <section className="sc-news product">
          <div className="inner">
            <div className="col-left">
              <h2 className="headline-sm">
                창비 새소식
              </h2>
              <a href="" className="link-more">더보기</a>
            </div>
            <div className="col-right">
              <ul className="list-news">
                <li className="news-item">
                  <a href="">
                    <strong>
                      <em className="cate smallTxt">발표</em>
                      <p className="tit">2024년 창비신인문학상 발표</p>
                    </strong>
                    <time datetime="2024-08-09">2024.08.09</time>
                  </a>
                </li>
                <li className="news-item">
                  <a href="">
                    <strong>
                      <em className="cate smallTxt">발표</em>
                      <p className="tit">제42회 신동엽문학상 발표</p>
                    </strong>
                    <time datetime="2024-08-09">2024.08.09</time>
                  </a>
                </li>
                <li className="news-item">
                  <a href="">
                    <strong>
                      <em className="cate smallTxt">소식</em>
                      <p className="tit">최은미 장편소설 『마주』, 신철규 시집 『심장보다 높이』 제22회 유심상 수상</p>
                    </strong>
                    <time datetime="2024-08-09">2024.07.31</time>
                  </a>
                </li>
                <li className="news-item">
                  <a href="">
                    <strong>
                      <em className="cate smallTxt">채용</em>
                      <p className="tit">㈜창비에서 총무부문 계약직 사원을 모집합니다.</p>
                    </strong>
                    <time datetime="2024-08-09">2024.07.24</time>
                  </a>
                </li>
                <li className="news-item">
                  <a href="">
                    <strong>
                      <em className="cate smallTxt">소식</em>
                      <p className="tit">창비 60주년 기념 大기획 ‘창비 한국사상선’ 출간</p>
                    </strong>
                    <time datetime="2024-08-09">2024.07.18</time>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sc-quart product">
        <div className="inner">
            <div className="col-left">
              <h2 className="headline-sm">
                계간 창작과 비평
              </h2>
              <a href="" className="link-more">더보기</a>
            </div>
            <div className="col-right">
              <img src={quart} alt="quart img"/>
              <h3>창작과비평 204호(2024년 여름호)</h3>
              <a href="/" className="link-more">더보기</a>
            </div>
        </div>
        </section>
        <section className="sc-weekly product">
          <div className="inner">
            <div className="col-left">
              <h2 className="headline-sm">
                창비주간논평
              </h2>
              <p className="desc">더 나은 세상을 위해 발신하는 주간 온라인 칼럼</p>
              <a href="" className="link-more">더보기</a>
            </div>
            <div className="col-right">
              <ul className="list-news">
                <li className="news-item">
                  <a href="">
                    <strong className="tit">가족과 사회보장의 본질을 질문하다</strong>
                    <p className="smallTxt">김지혜 - <time datetime="2024-08-06">2024.08.06</time></p>
                  </a>
                </li>
                <li className="news-item">
                  <a href="">
                    <strong className="tit">개발독재시대의 생명평화운동과 장일순의 삶: 한상봉 『장일순 평전』</strong>
                    <p className="smallTxt">김태우 - <time datetime="2024-08-06">2024.07.30</time></p>
                  </a>
                </li>
                <li className="news-item">
                  <a href="">
                    <strong className="tit">지치지 않으려는 마음: 장준하 『돌베개』</strong>
                    <p className="smallTxt">정주아 - <time datetime="2024-08-06">2024.07.30</time></p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-mail">
              <a href="" className="link-more">주간논평 메일링 신청하기</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main;