import React from "react";
import './midBanner.css';
// import '../../../responsive.css'
const MidBanner = () => {
  return (
    <>
      <div className="midBanner-container">
        <div className="midBanner-container-left">
          <div className="midBanner-container-left-title">
            Your <span>Health</span> is Our Priority
          </div>
          <div className="midBanner-container-left-content">
            Enim quae voluptatibus odio est tempora molestiae. Quod sed et
            libero. Mollitia perspiciatis consequuntur qui eveniet voluptas
            harum culpa.
          </div>
          <svg
            id="midBanner-container-left-curveLine"
            width="319"
            height="30"
            viewBox="0 0 319 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M61.0948 5.00218L61.1359 6.00133L61.0948 5.00218ZM142.724 28.9926L142.709 27.9927L142.724 28.9926ZM224.352 1.42169L224.227 2.41376L224.352 1.42169ZM272.428 22.1894L272.135 23.1455L272.428 22.1894ZM318.695 21.1183C319.092 20.7346 319.103 20.1016 318.719 19.7043L312.467 13.2303C312.084 12.8331 311.451 12.822 311.053 13.2057C310.656 13.5893 310.645 14.2224 311.029 14.6197L316.586 20.3743L310.831 25.9317C310.434 26.3153 310.423 26.9484 310.807 27.3457C311.19 27.7429 311.823 27.754 312.221 27.3703L318.695 21.1183ZM1 22.1894C1.42031 23.0967 1.42033 23.0967 1.42048 23.0967C1.42071 23.0966 1.421 23.0964 1.42145 23.0962C1.42237 23.0958 1.42381 23.0951 1.42577 23.0942C1.42971 23.0924 1.43574 23.0896 1.44387 23.0859C1.46011 23.0784 1.48469 23.0671 1.51743 23.0521C1.58292 23.0221 1.68106 22.9772 1.8105 22.9186C2.06938 22.8012 2.45343 22.6285 2.95181 22.408C3.94861 21.9669 5.40251 21.3349 7.2267 20.5728C10.8757 19.0483 16.0033 17.0048 21.9157 14.9292C33.765 10.7694 48.6732 6.51476 61.1359 6.00133L61.0536 4.00303C48.2819 4.52918 33.1427 8.86817 21.2532 13.0421C15.2963 15.1333 10.1317 17.1916 6.45572 18.7273C4.61747 19.4953 3.15077 20.1329 2.14257 20.579C1.63845 20.8021 1.24891 20.9773 0.984821 21.097C0.852775 21.1568 0.752086 21.2028 0.684113 21.2339C0.650127 21.2495 0.624319 21.2614 0.606859 21.2694C0.598129 21.2735 0.591486 21.2765 0.586951 21.2786C0.584684 21.2797 0.582943 21.2805 0.581733 21.281C0.581127 21.2813 0.580617 21.2816 0.580314 21.2817C0.579937 21.2819 0.579693 21.282 1 22.1894ZM61.1359 6.00133C78.0485 5.30459 89.6305 11.3056 101.423 17.5408C113.216 23.7761 125.226 30.2512 142.738 29.9925L142.709 27.9927C125.762 28.2431 114.163 22.0142 102.358 15.7727C90.553 9.53102 78.55 3.28223 61.0536 4.00303L61.1359 6.00133ZM142.738 29.9925C160.686 29.7273 172.645 21.5634 184.273 14.2075C195.913 6.84341 207.244 0.262054 224.227 2.41376L224.478 0.429624C206.745 -1.81716 194.886 5.12652 183.203 12.5173C171.508 19.9162 160.009 27.7371 142.709 27.9927L142.738 29.9925ZM224.227 2.41376C234.828 3.75704 241.668 7.32654 248.415 11.3726C255.172 15.425 261.91 20.0124 272.135 23.1455L272.721 21.2332C262.784 18.1883 256.284 13.7601 249.443 9.65739C242.592 5.54827 235.475 1.82298 224.478 0.429624L224.227 2.41376ZM272.135 23.1455C284.559 26.9524 291.004 26.4308 296.958 24.9501C302.826 23.4907 307.888 21.2228 317.983 21.3988L318.017 19.3991C307.579 19.2171 302.125 21.604 296.475 23.0092C290.911 24.393 284.836 24.9456 272.721 21.2332L272.135 23.1455Z"
              fill="#F66E24"
            />
          </svg>
        </div>
        <div className="midBanner-container-right">
            <div className="midBanner-container-right-first-image">
                <img src="https://i.postimg.cc/FRrKkzV2/image-12.png" alt="" />
            </div>
            <div className="midBanner-container-right-second-image">
            <img src="https://i.postimg.cc/FRrKkzV2/image-12.png" alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default MidBanner;


