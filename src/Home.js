import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BirdFlow2 from "./img/BirdsFlow2.png";
import BirdFlow3 from "./img/BirdsFlow3.png";
import BirdFlow4 from "./img/BirdsFlow4.jpg";
import BirdFlow5 from "./img/BirdsFlow5.png";
import "./css/home.css";

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Large Image */}
        <div className="col-lg-8 mb-4" data-aos="fade-zoom-in-up">
          <div className="card border-0 shadow h-100">
            <img
              src={BirdFlow5}
              className="card-img-top rounded h-100"
              alt="Bird Flow 1"
            />
            <div className="card-body bg-dark pt-3 pb-0">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="5"
                className="text-warning"
              >
                <p>
                  ငှက်သည် အမွှေးအတောင်ရှိသော ကျောရိုးရှိသတ္တဝါဖြစ်၏။ သို့သော်
                  အခြားကျောရိုးရှိသတ္တဝါများဖြစ်သော တွားသွားသတ္တဝါ၊
                  နို့တိုက်သတ္တဝါတို့နှင့်ကား မတူချေ။ ထိုတွားသွားသတ္တဝါနှင့်
                  နို့တိုက်သတ္တဝါတို့တွင် အရေပြား၌ အကြေးခွံနှင့် အမွှေးအမှင်တို့
                  ရှိကြသည်။ ငှက်မှာမူ လေထဲတွင် ပျံသန်းရသော တိရစ္ဆာန်
                  ဖြစ်ခြင်းကြောင့် အရေပြားမှ အမွှေးအတောင်များ ဆန်းကြယ်စွာ
                  ပေါက်လျက်ရှိသည်။ ကမ္ဘာပေါ်တွင် ငှက်မျိုးပေါင်းမှာ ၁၃ဝဝဝ နှင့်
                  ၁၄ဝဝဝ အကြားတွင် ရှိသည်။ ငှက်တို့ကို (မျိုးစိတ်၊ မျိုးစု၊
                  မျိုးရင်း၊ မျိုးစဉ်၊ မျိုးပေါင်း)ဟူ၍ အဆင့်ဆင့် ခွဲခြား ထားသည်။
                  ဤသို့ ခွဲခြား၍ကြည့်လိုက်သော်၊ ငှက်မျိုးပေါင်းသည် ကျောရိုးရှိ
                  မျိုးပေါင်းစုတွင် အပါအဝင် ဖြစ်သည်ကို တွေ့ရလေသည်။
                  ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း) ၈၆၀၀-ကျော်အား မျိုးစု
                  ၁၆၀၀-ခု၊ မျိုးရင်း ၁၅၅-ခု၊ မျိုးစဉ် ၂၇-ခု၊ မျိုးပေါင်း ၁-ခု
                  အဖြစ် သတ်မှတ်ထားသည်။
                </p>
              </marquee>
            </div>
          </div>
        </div>
        {/* Four Small Images */}
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12 mb-4" data-aos="fade-zoom-in-up">
              <div className="card border-0 shadow h-100">
                <img
                  src={BirdFlow2}
                  className="card-img-top rounded"
                  alt="Bird Flow 2"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-zoom-in-up">
              <div className="card border-0 shadow h-100">
                <img
                  src={BirdFlow3}
                  className="card-img-top rounded"
                  alt="Bird Flow 3"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-zoom-in-up">
              <div className="card border-0 shadow h-100">
                <img
                  src={BirdFlow4}
                  className="card-img-top rounded"
                  alt="Bird Flow 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2">
        {/* Four Content Cards */}
        <div className="col-lg-3 mb-4 hover-effect" data-aos="flip-up">
          <Link to="./birds" className="btn mt-3 bg-dark">
            <div className="card border-0 shadow h-100 bg-dark text-warning">
              <div className="card-body text-center d-flex align-items-center card-h-align">
                <h5 className="card-title mb-0">
                  ၈၆၀၀ ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)
                </h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4 hover-effect" data-aos="flip-up">
          <Link to="./birds" className="btn mt-3 bg-dark">
            <div className="card border-0 shadow h-100 bg-dark text-warning">
              <div className="card-body text-center d-flex align-items-center card-h-align">
                <h5 className="card-title mb-0">၁၆၀၀ မျိုးစုပေါင်း</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4 hover-effect" data-aos="flip-up">
          <Link to="./birds" className="btn mt-3 bg-dark">
            <div className="card border-0 shadow h-100 bg-dark text-warning">
              <div className="card-body text-center d-flex align-items-center card-h-align">
                <h5 className="card-title mb-0">၁၅၅ မျိုးရင်းပေါင်း</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4 hover-effect" data-aos="flip-up">
          <Link to="./birds" className="btn mt-3 bg-dark">
            <div className="card border-0 shadow h-100 bg-dark text-warning">
              <div className="card-body text-center d-flex align-items-center card-h-align">
                <h5 className="card-title mb-0">၂၇ မျိုးစဉ်ပေါင်း</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
