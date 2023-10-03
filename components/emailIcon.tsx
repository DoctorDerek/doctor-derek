export default function EmailIcon ({
  fill,
}: {
  fill: "#F38B57" | "white"
  /**
   * Fill is for svg icon color
   */
}) {
  return (
    <a href="mailto:derekraustin@gmail.com" className="flex items-center">
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
          d="M0 3.18188V5.49168L3.5 7.63459L17.5 16.2029L31.5 7.69467L35 5.56512V3.18188H0ZM0 9.527V30.5255H35V9.59042L17.5034 20.0813L0 9.527Z"
          fill={`${fill}`}
        />
      </svg>
      <span className="hidden md:mx-2 md:block md:text-[#f38b57]">Email</span>
    </a>
  )
}
