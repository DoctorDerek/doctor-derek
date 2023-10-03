export default function BookLinkIcon ({
  fill,
}: {
  fill: "#F38B57" | "white"
  /**
   * Fill is for svg icon color
   */
}) {
  return (
    <a
      href="https://www.amazon.com/dp/B0BRJDLJ43"
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
          d="M26.5267 0.00919403C24.3072 0.115586 22.173 1.08375 20.523 2.73282L14.051 9.20144C15.0676 8.18008 18.8411 8.88227 19.7566 9.79723L23.6739 5.88202C24.5414 5.01493 25.6272 4.48297 26.7396 4.43509C27.4953 4.39785 28.5651 4.55744 29.5072 5.49901C30.3854 6.37674 30.5717 7.3981 30.5717 8.09497C30.5717 9.25996 30.0394 10.4196 29.124 11.3293L22.3113 18.1809C20.5975 19.8938 17.9896 20.0321 16.478 18.5214C15.6158 17.6596 14.1947 17.6543 13.3272 18.5214C12.4596 19.3885 12.4596 20.8035 13.3272 21.6706C14.8813 23.2239 16.9251 24.0112 19.0328 24.0112C21.3107 24.0112 23.6366 23.0802 25.4196 21.2875L32.2748 14.4785C34.0153 12.7443 34.9999 10.4249 34.9999 8.09497C34.9999 5.92989 34.1803 3.87122 32.6581 2.34981C31.0294 0.722019 28.8419 -0.0971977 26.5267 0.00919403ZM15.9672 10.9888C13.6892 10.9888 11.326 11.925 9.53771 13.7124L2.72506 20.5215C0.984641 22.2557 0 24.575 0 26.905C0 29.07 0.819648 31.1287 2.34185 32.6501C3.9705 34.2779 6.158 35.0971 8.47324 34.9907C10.6927 34.8844 12.8269 33.9162 14.4769 32.2671L20.9489 25.7985C19.927 26.8199 16.1588 26.1177 15.2433 25.2027L11.326 29.1179C10.4585 29.985 9.37272 30.5117 8.26034 30.5649C7.50456 30.6021 6.43476 30.4425 5.4927 29.5009C4.61451 28.6232 4.42822 27.5965 4.42822 26.905C4.42822 25.74 4.96046 24.5803 5.87591 23.6707L12.6886 16.819C14.4024 15.1061 17.0103 14.9731 18.5219 16.4786C19.3894 17.3457 20.8105 17.3457 21.6727 16.4786C22.5403 15.6115 22.5403 14.1965 21.6727 13.3294C20.1186 11.7761 18.0695 10.9888 15.9672 10.9888Z"
          fill={`${fill}`}
        />
      </svg>
      <span className="hidden md:mx-2 md:block md:text-[#f38b57]">Book</span>
    </a>
  )
}
