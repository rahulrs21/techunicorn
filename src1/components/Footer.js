import React from 'react'

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span className="ml-3 text-xl"><svg width="149" height="30" viewBox="0 0 149 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.652 29V1.7H9.973C13.171 1.7 15.797 2.272 17.851 3.416C19.931 4.534 21.465 6.12 22.453 8.174C23.467 10.202 23.974 12.594 23.974 15.35C23.974 18.106 23.467 20.511 22.453 22.565C21.465 24.593 19.931 26.179 17.851 27.323C15.797 28.441 13.171 29 9.973 29H0.652ZM5.644 24.71H9.739C12.027 24.71 13.834 24.346 15.16 23.618C16.486 22.864 17.435 21.798 18.007 20.42C18.579 19.016 18.865 17.326 18.865 15.35C18.865 13.4 18.579 11.723 18.007 10.319C17.435 8.915 16.486 7.836 15.16 7.082C13.834 6.328 12.027 5.951 9.739 5.951H5.644V24.71ZM37.8556 29.468C35.9056 29.468 34.1766 29.052 32.6686 28.22C31.1606 27.388 29.9776 26.218 29.1196 24.71C28.2616 23.202 27.8326 21.46 27.8326 19.484C27.8326 17.482 28.2486 15.701 29.0806 14.141C29.9386 12.581 31.1086 11.372 32.5906 10.514C34.0986 9.63 35.8666 9.188 37.8946 9.188C39.7926 9.188 41.4696 9.604 42.9256 10.436C44.3816 11.268 45.5126 12.412 46.3186 13.868C47.1506 15.298 47.5666 16.897 47.5666 18.665C47.5666 18.951 47.5536 19.25 47.5276 19.562C47.5276 19.874 47.5146 20.199 47.4886 20.537H32.7856C32.8896 22.045 33.4096 23.228 34.3456 24.086C35.3076 24.944 36.4646 25.373 37.8166 25.373C38.8306 25.373 39.6756 25.152 40.3516 24.71C41.0536 24.242 41.5736 23.644 41.9116 22.916H46.9816C46.6176 24.138 46.0066 25.256 45.1486 26.27C44.3166 27.258 43.2766 28.038 42.0286 28.61C40.8066 29.182 39.4156 29.468 37.8556 29.468ZM37.8946 13.244C36.6726 13.244 35.5936 13.595 34.6576 14.297C33.7216 14.973 33.1236 16.013 32.8636 17.417H42.4966C42.4186 16.143 41.9506 15.129 41.0926 14.375C40.2346 13.621 39.1686 13.244 37.8946 13.244ZM58.6292 29.468C56.9652 29.468 55.6002 29.208 54.5342 28.688C53.4682 28.142 52.6752 27.427 52.1552 26.543C51.6352 25.659 51.3752 24.684 51.3752 23.618C51.3752 21.824 52.0772 20.368 53.4812 19.25C54.8852 18.132 56.9912 17.573 59.7992 17.573H64.7132V17.105C64.7132 15.779 64.3362 14.804 63.5822 14.18C62.8282 13.556 61.8922 13.244 60.7742 13.244C59.7602 13.244 58.8762 13.491 58.1222 13.985C57.3682 14.453 56.9002 15.155 56.7182 16.091H51.8432C51.9732 14.687 52.4412 13.465 53.2472 12.425C54.0792 11.385 55.1452 10.592 56.4452 10.046C57.7452 9.474 59.2012 9.188 60.8132 9.188C63.5692 9.188 65.7402 9.877 67.3262 11.255C68.9122 12.633 69.7052 14.583 69.7052 17.105V29H65.4542L64.9862 25.88C64.4142 26.92 63.6082 27.778 62.5682 28.454C61.5542 29.13 60.2412 29.468 58.6292 29.468ZM59.7602 25.568C61.1902 25.568 62.2952 25.1 63.0752 24.164C63.8812 23.228 64.3882 22.071 64.5962 20.693H60.3452C59.0192 20.693 58.0702 20.94 57.4982 21.434C56.9262 21.902 56.6402 22.487 56.6402 23.189C56.6402 23.943 56.9262 24.528 57.4982 24.944C58.0702 25.36 58.8242 25.568 59.7602 25.568ZM74.6639 29V0.919999H79.6559V29H74.6639ZM94.3507 29.468C92.4007 29.468 90.6717 29.052 89.1637 28.22C87.6557 27.388 86.4727 26.218 85.6147 24.71C84.7567 23.202 84.3277 21.46 84.3277 19.484C84.3277 17.482 84.7437 15.701 85.5757 14.141C86.4337 12.581 87.6037 11.372 89.0857 10.514C90.5937 9.63 92.3617 9.188 94.3897 9.188C96.2877 9.188 97.9647 9.604 99.4207 10.436C100.877 11.268 102.008 12.412 102.814 13.868C103.646 15.298 104.062 16.897 104.062 18.665C104.062 18.951 104.049 19.25 104.023 19.562C104.023 19.874 104.01 20.199 103.984 20.537H89.2807C89.3847 22.045 89.9047 23.228 90.8407 24.086C91.8027 24.944 92.9597 25.373 94.3117 25.373C95.3257 25.373 96.1707 25.152 96.8467 24.71C97.5487 24.242 98.0687 23.644 98.4067 22.916H103.477C103.113 24.138 102.502 25.256 101.644 26.27C100.812 27.258 99.7717 28.038 98.5237 28.61C97.3017 29.182 95.9107 29.468 94.3507 29.468ZM94.3897 13.244C93.1677 13.244 92.0887 13.595 91.1527 14.297C90.2167 14.973 89.6187 16.013 89.3587 17.417H98.9917C98.9137 16.143 98.4457 15.129 97.5877 14.375C96.7297 13.621 95.6637 13.244 94.3897 13.244ZM108.455 29V9.656H112.901L113.369 13.283C114.071 12.035 115.02 11.047 116.216 10.319C117.438 9.565 118.868 9.188 120.506 9.188V14.453H119.102C118.01 14.453 117.035 14.622 116.177 14.96C115.319 15.298 114.643 15.883 114.149 16.715C113.681 17.547 113.447 18.704 113.447 20.186V29H108.455ZM122.865 29V24.983L132.732 13.79H122.982V9.656H138.426V13.673L128.403 24.866H138.621V29H122.865ZM145.115 29.273C144.205 29.273 143.451 28.987 142.853 28.415C142.281 27.843 141.995 27.154 141.995 26.348C141.995 25.516 142.281 24.814 142.853 24.242C143.451 23.67 144.205 23.384 145.115 23.384C146.025 23.384 146.766 23.67 147.338 24.242C147.936 24.814 148.235 25.516 148.235 26.348C148.235 27.154 147.936 27.843 147.338 28.415C146.766 28.987 146.025 29.273 145.115 29.273Z" fill="#F86338"/>
</svg></span>
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2022  —
        <a href="https://rahuldxb.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Rahul</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor"   strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor"   strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor"   strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor"   strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer
