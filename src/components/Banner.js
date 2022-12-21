import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="relative overflow-hidden h-[70vh] md:h-[80vh]">
      <div className=" px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative hidden lg:block w-full max-w-lg mt-12">
                <div className="relative top-[-8rem] overflow-hidden">
                  <svg
                    width="82"
                    height="91"
                    viewBox="0 0 82 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.8716 0.705501C67.0538 4.73776 71.3909 9.75124 74.6355 15.4597C77.8801 21.1681 79.9685 27.4597 80.7816 33.9753C81.5947 40.4908 81.1165 47.1027 79.3743 53.4335C77.6321 59.7642 74.66 65.6898 70.6277 70.872C66.5955 76.0541 61.582 80.3913 55.8735 83.6358C50.1651 86.8804 43.8735 88.9689 37.3579 89.7819C30.8424 90.595 24.2305 90.1168 17.8997 88.3746C11.569 86.6324 5.64339 83.6603 0.461264 79.628L17.3205 57.9611C19.6573 59.7794 22.3293 61.1196 25.1841 61.9052C28.0388 62.6909 31.0203 62.9065 33.9584 62.5399C36.8965 62.1732 39.7336 61.2315 42.3077 59.7684C44.8818 58.3053 47.1425 56.3495 48.9608 54.0127C50.7791 51.6759 52.1193 49.0039 52.9049 46.1492C53.6905 43.2944 53.9062 40.3129 53.5395 37.3748C53.1729 34.4368 52.2311 31.5997 50.7681 29.0255C49.305 26.4514 47.3492 24.1907 45.0124 22.3724L61.8716 0.705501Z"
                      fill="#36B2F8"
                    />
                  </svg>
                </div>
                <div className="relative top-[-12rem] left-[26rem] overflow-hidden">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.5" cy="19.5" r="19.5" fill="#F86338" />
                  </svg>
                </div>

                <div className="relative top-[-11rem] left-[65rem] overflow-hidden">
                  <svg
                    width="49"
                    height="50"
                    viewBox="0 0 49 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.7396 40.7821C46.1209 43.3953 43.0131 45.4671 39.5936 46.8792C36.1742 48.2914 32.5101 49.0161 28.8106 49.0122C25.111 49.0083 21.4485 48.2757 18.032 46.8563C14.6156 45.4369 11.5122 43.3585 8.89901 40.7398C6.28581 38.121 4.21401 35.0132 2.80189 31.5938C1.38976 28.1743 0.664974 24.5103 0.668903 20.8107C0.672836 17.1112 1.40541 13.4486 2.82479 10.0322C4.24418 6.61575 6.32258 3.51235 8.94133 0.899154L19.3084 11.2882C18.0539 12.54 17.0583 14.0266 16.3784 15.6632C15.6985 17.2997 15.3476 19.0541 15.3457 20.8263C15.3438 22.5985 15.691 24.3536 16.3674 25.9916C17.0439 27.6296 18.0363 29.1183 19.2881 30.3728C20.5399 31.6272 22.0265 32.6228 23.663 33.3027C25.2996 33.9826 27.054 34.3335 28.8262 34.3354C30.5983 34.3373 32.3535 33.9901 33.9915 33.3137C35.6295 32.6372 37.1182 31.6448 38.3726 30.393L48.7396 40.7821Z"
                      fill="#36B2F8"
                    />
                  </svg>
                </div>

                <div className="relative top-[6rem] left-[30rem] overflow-hidden">
                  <svg
                    width="57"
                    height="44"
                    viewBox="0 0 57 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.4864 28.1589C54.6552 31.6089 52.1625 34.6644 49.1505 37.1511C46.1385 39.6377 42.6662 41.5067 38.9319 42.6514C35.1976 43.7961 31.2744 44.1941 27.3863 43.8226C23.4982 43.4511 19.7213 42.3175 16.2713 40.4863C12.8213 38.6552 9.76576 36.1625 7.27912 33.1505C4.79249 30.1385 2.92347 26.6662 1.77876 22.9319C0.634054 19.1976 0.236084 15.2743 0.607574 11.3862C0.979064 7.49811 2.11274 3.72124 3.94387 0.271247L18.0835 7.77605C17.2379 9.3692 16.7144 11.1133 16.5428 12.9088C16.3713 14.7042 16.5551 16.5159 17.0837 18.2404C17.6123 19.9648 18.4754 21.5682 19.6237 22.9591C20.7719 24.35 22.1829 25.5011 23.7761 26.3467C25.3692 27.1923 27.1133 27.7158 28.9088 27.8874C30.7043 28.0589 32.5159 27.8751 34.2404 27.3465C35.9648 26.8179 37.5683 25.9548 38.9592 24.8065C40.3501 23.6583 41.5012 22.2473 42.3467 20.6541L56.4864 28.1589Z"
                      fill="#36B2F8"
                    />
                  </svg>
                </div>

                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-orange-200 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div className="relative">
                  {/* <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="/assets/images/placeholders/squareCard.png" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:my-14 2xl:my-32">
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Your Premium <br /> Sound, Unplugged!
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus maiores amet error voluptatum quos ad commodi
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <Link to="/shop">
                <button
                  className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-600 rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  fdprocessedid="zqtkb"
                >
                  Find out more
                </button>
                </Link>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                {/* <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" fdprocessedid="yl5hl">See features</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
