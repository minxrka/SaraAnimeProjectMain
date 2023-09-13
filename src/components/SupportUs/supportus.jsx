import React from "react";
import bgSupportUs from "../../img/other-content/supportUs.jpg";
import shape3 from "../../img/other-content/shape-3.png";
import shape4 from "../../img/other-content/shape-4.png";
import arrow from "../../img/other-content/Arrow 1.png";

export const SupportUs = () => {
  return (
    <main>
      <section className="relative max-w-full h-auto bg-[#8198D9] rounded-[20px] mt-[50px] py-[32px] px-[25px] md:py-[20px] md:px-[10px]">
        <h1 className="text-[#232323] font-Bowler text-[120px] textwrap xlbig:text-[100px] xl:text-[80px] lg:text-[50px] md:text-[27px]">
          Спасибо, что ты с нами!
        </h1>
        <div className="relative max-w-[740px] flex justify-between items-center xlbig:flex-col xlbig:items-start">
          <p className="text-[#363539] text-[40px] font-Bowler textwrap lg:text-[30px] md:text-[20px] md:max-w-[438px]">
            поддержка нашего <br></br> проекта
          </p>
          <svg
            className="absolute top-11 left-[240px] xl:hidden"
            width="267"
            height="24"
            viewBox="0 0 267 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M266.061 13.0607C266.646 12.4749 266.646 11.5251 266.061 10.9393L256.515 1.3934C255.929 0.807611 254.979 0.807611 254.393 1.3934C253.808 1.97919 253.808 2.92893 254.393 3.51472L262.879 12L254.393 20.4853C253.808 21.0711 253.808 22.0208 254.393 22.6066C254.979 23.1924 255.929 23.1924 256.515 22.6066L266.061 13.0607ZM0 13.5H265V10.5H0L0 13.5Z"
              fill="#363539"
            />
          </svg>

          <a
            href="#"
            className="md:hidden py-[21px] px-[31px] bg-heroGradient text-white text-[16px] font-GothamPro font-light rounded-[50px] hover:scale-110 transition-transform xlbig:mt-[20px]"
          >
            Поддержать
          </a>
        </div>
      </section>
      <section className="grid grid-cols-2 mt-[-200px] xl:grid xl:grid-cols-1">
        <div className="mt-[250px] lg:mt-[200px]">
          <aside className="flex gap-[36px] items-center mt-[30px] ml-[22px] md:gap-[20px] md:ml-[0px]">
            {/* ДИВ ПОД СВГ ЭЛЕМЕНТ ЧТОБЫ НЕ СДАВЛИВАЛО!!!! */}
            <div className="">
              <svg
                className="lg:max-w-[50px] h-full md:max-w-[40px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#D6FE50" />
                <path
                  d="M37.3172 44.1256L26.7662 45.9994C26.0144 46.1329 25.2347 45.8345 25.0333 45.3363C24.8319 44.8381 25.2821 44.3213 26.0337 44.1878L36.5847 42.314C37.3364 42.1806 38.1161 42.4789 38.3176 42.9771C38.5192 43.4753 38.0688 43.9921 37.3172 44.1256ZM32.432 22.635C32.3375 23.4875 31.6099 23.968 30.4804 23.9558C29.3558 23.9438 28.5373 23.4329 28.5643 22.655C28.5905 21.8982 29.3065 21.401 30.5245 21.4098C31.7417 21.4185 32.3451 21.8952 32.432 22.635ZM45.9585 19.762C41.7612 15.1673 33.4478 12.9348 25.7245 14.4304C18.9656 15.7393 14.5586 18.6973 12.9562 23.2463C11.3701 27.7489 13.3443 31.6216 18.3407 34.8649C19.5125 35.6256 20.5898 36.5469 21.2504 37.5301C21.9127 38.5156 22.125 38.8237 23.738 38.565C25.9783 38.2057 28.1885 37.7644 30.4283 37.4038C31.5766 37.2189 32.0128 36.794 32.0052 36.0268C31.9745 32.9304 31.9848 29.8338 32.0019 26.7373C32.0056 26.0364 31.6732 25.4593 30.5354 25.4417C29.3836 25.424 29.0309 25.9818 29.0406 26.6964C29.0672 28.7039 29.0486 30.7116 29.0484 32.7193C29.0483 35.9489 29.0484 35.9489 24.2572 36.4129C22.4357 35.0296 20.7771 33.7861 19.145 32.5275C13.2873 28.0101 14.3585 21.3322 21.6693 17.8735C26.9216 15.3886 32.5638 15.2503 38.189 17.3484C43.4122 19.2966 46.2538 23.3104 45.5006 27.1932C44.9975 29.7869 43.1288 31.8574 40.3571 33.6373C38.6843 34.7114 37.1601 35.8679 36.6114 37.4211C36.3547 38.1475 35.7402 38.5079 34.6784 38.6813C34.8768 38.5591 23.2339 40.7213 23.2339 40.7213C22.4973 40.8521 22.0562 41.3585 22.2536 41.8467L22.284 41.9222C22.4814 42.4103 23.2454 42.7027 23.982 42.5719C23.982 42.5719 37.3411 40.1926 37.5163 40.1598C38.7534 39.9334 39.4268 39.3497 39.455 38.5165C39.4971 37.2726 40.3125 36.3045 41.6395 35.4781C42.3499 35.0356 43.0571 34.5892 43.7256 34.1195C49.2435 30.2406 50.1541 24.3552 45.9585 19.762Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text-[25px] font-GothamPro font-light text-white lg:text-[20px] md:text-[17px]">
              У тебя есть идеи как можно улучшить сайт?
            </p>
          </aside>
          <aside className="flex gap-[36px] items-center mt-[30px] ml-[22px] md:gap-[20px] md:ml-[0px]">
            {/* ДИВ ПОД СВГ ЭЛЕМЕНТ ЧТОБЫ НЕ СДАВЛИВАЛО!!!! */}
            <div className="">
              <svg
                className="lg:max-w-[50px] h-full md:max-w-[40px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#D6FE50" />
                <path
                  d="M30.5 24.3C28.7894 24.3 27.1488 24.9006 25.9392 25.9695C24.7296 27.0385 24.05 28.4883 24.05 30C24.05 31.5118 24.7296 32.9616 25.9392 34.0306C27.1488 35.0995 28.7894 35.7 30.5 35.7C32.2106 35.7 33.8512 35.0995 35.0608 34.0306C36.2705 32.9616 36.95 31.5118 36.95 30C36.95 28.4883 36.2705 27.0385 35.0608 25.9695C33.8512 24.9006 32.2106 24.3 30.5 24.3ZM26.2 30C26.2 28.9922 26.653 28.0257 27.4594 27.313C28.2659 26.6004 29.3596 26.2 30.5 26.2C31.6404 26.2 32.7342 26.6004 33.5406 27.313C34.347 28.0257 34.8 28.9922 34.8 30C34.8 31.0079 34.347 31.9744 33.5406 32.6871C32.7342 33.3997 31.6404 33.8 30.5 33.8C29.3596 33.8 28.2659 33.3997 27.4594 32.6871C26.653 31.9744 26.2 31.0079 26.2 30ZM25.125 14.8C25.4101 14.8 25.6835 14.9001 25.8851 15.0783C26.0867 15.2565 26.2 15.4981 26.2 15.75V18.6H29.425V15.75C29.425 15.4981 29.5383 15.2565 29.7399 15.0783C29.9415 14.9001 30.2149 14.8 30.5 14.8C30.7851 14.8 31.0585 14.9001 31.2601 15.0783C31.4617 15.2565 31.575 15.4981 31.575 15.75V18.6H34.8V15.75C34.8 15.4981 34.9133 15.2565 35.1149 15.0783C35.3165 14.9001 35.5899 14.8 35.875 14.8C36.1601 14.8 36.4335 14.9001 36.6351 15.0783C36.8367 15.2565 36.95 15.4981 36.95 15.75V18.6H38.025C39.4505 18.6 40.8177 19.1005 41.8257 19.9913C42.8337 20.8821 43.4 22.0903 43.4 23.35V24.3H46.625C46.9101 24.3 47.1835 24.4001 47.3851 24.5783C47.5867 24.7565 47.7 24.9981 47.7 25.25C47.7 25.502 47.5867 25.7436 47.3851 25.9218C47.1835 26.1 46.9101 26.2 46.625 26.2H43.4V29.05H46.625C46.9101 29.05 47.1835 29.1501 47.3851 29.3283C47.5867 29.5065 47.7 29.7481 47.7 30C47.7 30.252 47.5867 30.4936 47.3851 30.6718C47.1835 30.85 46.9101 30.95 46.625 30.95H43.4V33.8H46.625C46.9101 33.8 47.1835 33.9001 47.3851 34.0783C47.5867 34.2565 47.7 34.4981 47.7 34.75C47.7 35.002 47.5867 35.2436 47.3851 35.4218C47.1835 35.6 46.9101 35.7 46.625 35.7H43.4V36.65C43.4 37.9098 42.8337 39.118 41.8257 40.0088C40.8177 40.8996 39.4505 41.4 38.025 41.4H36.95V44.25C36.95 44.502 36.8367 44.7436 36.6351 44.9218C36.4335 45.1 36.1601 45.2 35.875 45.2C35.5899 45.2 35.3165 45.1 35.1149 44.9218C34.9133 44.7436 34.8 44.502 34.8 44.25V41.4H31.575V44.25C31.575 44.502 31.4617 44.7436 31.2601 44.9218C31.0585 45.1 30.7851 45.2 30.5 45.2C30.2149 45.2 29.9415 45.1 29.7399 44.9218C29.5383 44.7436 29.425 44.502 29.425 44.25V41.4H26.2V44.25C26.2 44.502 26.0867 44.7436 25.8851 44.9218C25.6835 45.1 25.4101 45.2 25.125 45.2C24.8399 45.2 24.5665 45.1 24.3649 44.9218C24.1633 44.7436 24.05 44.502 24.05 44.25V41.4H22.975C21.5495 41.4 20.1823 40.8996 19.1743 40.0088C18.1663 39.118 17.6 37.9098 17.6 36.65V35.7H14.375C14.0899 35.7 13.8165 35.6 13.6149 35.4218C13.4133 35.2436 13.3 35.002 13.3 34.75C13.3 34.4981 13.4133 34.2565 13.6149 34.0783C13.8165 33.9001 14.0899 33.8 14.375 33.8H17.6V30.95H14.375C14.0899 30.95 13.8165 30.85 13.6149 30.6718C13.4133 30.4936 13.3 30.252 13.3 30C13.3 29.7481 13.4133 29.5065 13.6149 29.3283C13.8165 29.1501 14.0899 29.05 14.375 29.05H17.6V26.2H14.375C14.0899 26.2 13.8165 26.1 13.6149 25.9218C13.4133 25.7436 13.3 25.502 13.3 25.25C13.3 24.9981 13.4133 24.7565 13.6149 24.5783C13.8165 24.4001 14.0899 24.3 14.375 24.3H17.6V23.35C17.6 22.0903 18.1663 20.8821 19.1743 19.9913C20.1823 19.1005 21.5495 18.6 22.975 18.6H24.05V15.75C24.05 15.4981 24.1633 15.2565 24.3649 15.0783C24.5665 14.9001 24.8399 14.8 25.125 14.8ZM41.25 23.35C41.25 22.5942 40.9102 21.8693 40.3054 21.3348C39.7006 20.8003 38.8803 20.5 38.025 20.5H22.975C22.1197 20.5 21.2994 20.8003 20.6946 21.3348C20.0898 21.8693 19.75 22.5942 19.75 23.35V36.65C19.75 37.4059 20.0898 38.1308 20.6946 38.6653C21.2994 39.1998 22.1197 39.5 22.975 39.5H38.025C38.8803 39.5 39.7006 39.1998 40.3054 38.6653C40.9102 38.1308 41.25 37.4059 41.25 36.65V23.35Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text-[25px] font-GothamPro font-light text-white lg:text-[20px] md:text-[17px]">
              Разработчик? И хочешь помочь проекту?
            </p>
          </aside>
          <aside className="flex gap-[36px] items-center mt-[30px] ml-[22px] md:gap-[20px] md:ml-[0px]">
            {/* ДИВ ПОД СВГ ЭЛЕМЕНТ ЧТОБЫ НЕ СДАВЛИВАЛО!!!! */}
            <div className="">
              <svg
                className="lg:max-w-[50px] h-full md:max-w-[40px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#D6FE50" />
                <path
                  d="M12.5833 25.467C12.5833 33.1667 19.7858 37.2691 25.0569 40.9425C26.9167 42.2376 28.7083 43.4584 30.5 43.4584C32.2917 43.4584 34.0833 42.2392 35.9431 40.9409C41.216 37.2707 48.4167 33.1667 48.4167 25.4686C48.4167 17.7688 38.5625 12.3079 30.5 19.7116C22.4375 12.3063 12.5833 17.7672 12.5833 25.467Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text-[25px] font-GothamPro font-light text-white lg:text-[20px] md:text-[17px]">
              Есть идея, но не можешь реализовать?
            </p>
          </aside>
          <aside className="flex gap-[36px] items-center mt-[30px] ml-[22px] md:gap-[20px] md:ml-[0px]">
            {/* ДИВ ПОД СВГ ЭЛЕМЕНТ ЧТОБЫ НЕ СДАВЛИВАЛО!!!! */}
            <div className="">
              <svg
                className="lg:max-w-[50px] h-full md:max-w-[40px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#D6FE50" />
                <path
                  d="M26.6078 17.4778C28.0905 18.6087 29.0945 20.0931 29.6196 21.9309C30.1447 23.7687 30.1293 25.5358 29.5733 27.2322C28.9555 28.759 27.6117 29.5224 25.542 29.5224C23.4723 29.5224 22.1286 28.7307 21.5108 27.1474C20.893 25.6206 20.7385 23.9383 21.0474 22.1005C21.3563 20.2627 22.1286 18.7218 23.3642 17.4778C24.5998 16.4599 25.681 16.4599 26.6078 17.4778ZM34.2996 14.509C32.1372 15.4703 31.1178 18.015 31.2414 22.1429C31.7356 26.2709 33.1875 28.3632 35.597 28.4197C38.6243 27.2888 39.7055 24.2352 38.8405 19.259C38.6552 17.9584 38.1764 16.7992 37.4041 15.7813C36.6318 14.7635 35.597 14.3394 34.2996 14.509ZM49.3125 19.0045C46.7177 18.4956 45.1113 18.9197 44.4935 20.2769C43.8139 21.4644 43.0108 23.7545 42.084 27.1474C41.1573 30.5403 40.0453 33.0001 38.7478 34.5269C37.2651 36.1667 35.458 37.4249 33.3265 38.3014C31.195 39.1779 29.0481 39.4465 26.8858 39.1072C24.2909 38.7679 22.3139 37.6087 20.9547 35.6295C20.2134 34.4986 19.3639 32.4629 18.4062 29.5224C17.4486 26.5819 16.4138 24.4614 15.3017 23.1608C13.819 22.4822 12.6606 22.3126 11.8265 22.6519C10.9925 22.9912 10.3746 23.4153 9.97305 23.9242C9.57147 24.4331 9.32435 25.1824 9.23167 26.172C9.139 27.1615 9.12356 27.9391 9.18534 28.5045C9.24712 29.07 9.3089 29.5789 9.37068 30.0313V30.201C9.92672 33.3676 10.4519 35.3468 10.9461 36.1385C12.9849 40.0403 16.3366 42.8676 21.0011 44.6206C25.6656 46.3736 30.2838 46.6563 34.8556 45.4688C39.6746 44.2248 43.6749 41.5812 46.8567 37.538C50.0384 33.4949 51.6911 29.0983 51.8146 24.3483C51.8146 21.5209 50.9806 19.7397 49.3125 19.0045Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text-[25px] font-GothamPro font-light text-white lg:text-[20px] md:text-[17px]">
              Не стесняйся, и пиши нам нам на почту!
            </p>
          </aside>
          <aside className="flex gap-[36px] items-center mt-[30px] ml-[22px] md:gap-[20px] md:ml-[0px]">
            {/* ДИВ ПОД СВГ ЭЛЕМЕНТ ЧТОБЫ НЕ СДАВЛИВАЛО!!!! */}
            <div className="">
              <svg
                className="lg:max-w-[50px] h-full md:max-w-[40px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#D6FE50" />
                <g clip-path="url(#clip0_0_1)">
                  <path
                    d="M46.625 18.125H14.375C13.6622 18.125 12.9787 18.3752 12.4747 18.8206C11.9706 19.266 11.6875 19.8701 11.6875 20.5V39.5C11.6875 40.1299 11.9706 40.734 12.4747 41.1794C12.9787 41.6248 13.6622 41.875 14.375 41.875H46.625C47.3378 41.875 48.0213 41.6248 48.5253 41.1794C49.0294 40.734 49.3125 40.1299 49.3125 39.5V20.5C49.3125 19.8701 49.0294 19.266 48.5253 18.8206C48.0213 18.3752 47.3378 18.125 46.625 18.125ZM43.6687 20.5L30.5 28.5512L17.3312 20.5H43.6687ZM14.375 39.5V21.5806L29.7341 30.9737C29.959 31.1117 30.2262 31.1855 30.5 31.1855C30.7738 31.1855 31.041 31.1117 31.2659 30.9737L46.625 21.5806V39.5H14.375Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect
                      width="43"
                      height="38"
                      fill="white"
                      transform="translate(9 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-[25px] font-GothamPro font-light text-white lg:text-[20px] md:text-[17px]">
              SaraAnime@mail.ru
            </p>
          </aside>

          <a
            href="#"
            className="hidden md:block text-center md:mt-[30px] py-[21px] px-[31px] bg-heroGradient text-white text-[16px] font-GothamPro font-light rounded-[50px] hover:scale-110 transition-transform xlbig:mt-[20px]"
          >
            Поддержать
          </a>
        </div>
        <div className="relative max-w-[515px] h-auto justify-self-end xl:hidden">
          <img
            className="relative rounded-[30px] z-20 w-full h-[730px] object-cover"
            src={bgSupportUs}
            alt=""
          />
          <img
            className="absolute top-[370px] right-[230px] z-0 xbig:hidden"
            src={shape3}
            alt=""
          />
          <img
            className="absolute top-[160px] right-[230px] z-0 xbig:hidden"
            src={shape4}
            alt=""
          />
        </div>
      </section>
    </main>
  );
};
