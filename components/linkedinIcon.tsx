export default function LinkedinIcon ({
  fill,
}: {
  fill: "#F38B57" | "white"
  /**
   * Fill is for svg icon color
   */
}) {
    return (
        <a
        href="https://www.linkedin.com/in/derek-austin/"
        target="_blank"
        className="flex items-center"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.8255 29.8239H24.6355V21.7C24.6355 19.7633 24.6005 17.2725 21.9365 17.2725C19.2375 17.2725 18.8252 19.3842 18.8252 21.5619V29.8239H13.6391V13.1211H18.6133V15.4039H18.6852C19.3794 14.0914 21.0712 12.7069 23.5971 12.7069C28.8552 12.7069 29.8255 16.1642 29.8255 20.6636V29.8239ZM7.78599 10.8403C6.11756 10.8403 4.77193 9.49083 4.77193 7.82833C4.77193 6.16778 6.11756 4.81833 7.78599 4.81833C9.44469 4.81833 10.7942 6.16778 10.7942 7.82833C10.7942 9.49083 9.44469 10.8403 7.78599 10.8403ZM5.18418 29.8239H10.382V13.1211H5.18418V29.8239ZM32.4099 0H2.58042C1.15701 0 0 1.12972 0 2.52389V32.4742C0 33.8683 1.15701 35 2.58042 35H32.4099C33.8372 35 35 33.8683 35 32.4742V2.52389C35 1.12972 33.8372 0 32.4099 0Z"
            fill={`${fill}`}
          />
        </svg>
        <span className="hidden md:block md:mx-2 md:text-[#f38b57]">Linkedin</span>
      </a>
    )
}