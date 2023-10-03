export default function ResumeIcon ({
    fill,
  }: {
    fill: string
    /**
     * Fill is for the svg icon color, hex color
     */
  }) {
    return (
        <a
        href="#"
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
            d="M18.0109 16.6053C22.5965 16.6053 26.3136 12.8878 26.3136 8.30266C26.3136 3.71736 22.5965 0 18.0109 0C13.4253 0 9.70827 3.71722 9.70827 8.30266C9.70827 12.888 13.4253 16.6053 18.0109 16.6053ZM9.69849 18.7847C12.4776 18.4672 15.2741 18.3064 18.0106 18.3064C20.7474 18.3064 23.5443 18.4672 26.3237 18.7847C27.0755 18.8703 27.7459 19.2965 28.1431 19.9399C30.7217 24.1237 31.7352 27.578 31.6413 31.8624C31.6145 33.0807 30.7012 34.0962 29.4924 34.2534C25.6622 34.7481 21.7985 35 18.0088 35C14.2184 35 10.3561 34.7486 6.52928 34.2534C5.32109 34.0962 4.408 33.0807 4.38097 31.8624C4.28677 27.578 5.30062 24.1238 7.87995 19.9399C8.27681 19.297 8.94754 18.8704 9.69849 18.7847Z"
            fill={`${fill}`}
          />
        </svg>
        <span className="hidden md:block md:mx-2 md:text-[#f38b57]">Resume</span>
      </a>
    )
}