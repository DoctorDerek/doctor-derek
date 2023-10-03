export default function MediumIcon ({
    fill,
  }: {
    fill: string
    /**
     * Fill is for the svg icon color, hex color
     */
  }) {
    return (
        <a
        href="https://doctorderek.medium.com/"
        target="_blank"
        className="flex items-center"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.7083 35H7.29167C3.26521 35 0 31.7348 0 27.7083V7.29167C0 3.26521 3.26521 0 7.29167 0H27.7083C31.7362 0 35 3.26521 35 7.29167V27.7083C35 31.7348 31.7377 34.9985 27.7083 35ZM29.1229 26.7619V26.3696L27.3044 24.5846C27.144 24.4621 27.0637 24.2608 27.0973 24.061V10.939C27.0637 10.7392 27.144 10.5379 27.3044 10.4154L29.1667 8.63042V8.23812H22.7179L18.1213 19.705L12.8917 8.23812H6.12792V8.63042L8.30667 11.254C8.51958 11.4479 8.62896 11.7308 8.59979 12.0167V22.33C8.66396 22.7019 8.54583 23.0825 8.28479 23.3538L5.83333 26.3258V26.7181H12.7837V26.3258L10.3323 23.3538C10.0683 23.0825 9.94438 22.7048 9.99396 22.33V13.4108L16.0942 26.7181H16.8029L22.0427 13.4108V24.0173C22.0427 24.3002 22.0427 24.3556 21.8575 24.5408L19.9733 26.3696V26.7619H29.1229Z"
            fill={`${fill}`}
          />
        </svg>
        <span className="hidden md:block md:mx-2 md:text-[#f38b57]">Medium</span>
      </a>
    )
}