import classNames from "@/utils/classNames"

/**
 * Icons as hyperlinks, when clicked it opens links to either e-mail,
 * Linkedin, Resume, Github, Medium, or copy link
 */
export default function IconLinks({
  fill,
  flexSpacing,
}: {
  /**
   * Fill is for the svg icon color, hex color
   */
  fill: string
  /**
   * flexSpacing: flexbox property for justify-content
   * content will either have space around or between flex items
   * */
  flexSpacing: "justify-between" | "justify-around" // | union type, valid values
}) {
  return (
    <div className={classNames(`rounded-tl-2xl flex py-4`, flexSpacing)}>
      {/* ======== EMAIL ICON LINK ======== */}
      <a
        href="mailto:derekraustin@gmail.com"
        className="text-gray-500 hover:text-gray-400"
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
            d="M0 3.18188V5.49168L3.5 7.63459L17.5 16.2029L31.5 7.69467L35 5.56512V3.18188H0ZM0 9.527V30.5255H35V9.59042L17.5034 20.0813L0 9.527Z"
            fill={`${fill}`}
          />
        </svg>
      </a>

      {/* =========== LINKEDIN ICON LINK =========== */}
      <a
        href="https://www.linkedin.com/in/derek-austin/"
        target="_blank"
        className="text-gray-500 hover:text-gray-400"
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
            d="M29.8255 29.8239H24.6355V21.7C24.6355 19.7633 24.6005 17.2725 21.9365 17.2725C19.2375 17.2725 18.8252 19.3842 18.8252 21.5619V29.8239H13.6391V13.1211H18.6133V15.4039H18.6852C19.3794 14.0914 21.0712 12.7069 23.5971 12.7069C28.8552 12.7069 29.8255 16.1642 29.8255 20.6636V29.8239ZM7.78599 10.8403C6.11756 10.8403 4.77193 9.49083 4.77193 7.82833C4.77193 6.16778 6.11756 4.81833 7.78599 4.81833C9.44469 4.81833 10.7942 6.16778 10.7942 7.82833C10.7942 9.49083 9.44469 10.8403 7.78599 10.8403ZM5.18418 29.8239H10.382V13.1211H5.18418V29.8239ZM32.4099 0H2.58042C1.15701 0 0 1.12972 0 2.52389V32.4742C0 33.8683 1.15701 35 2.58042 35H32.4099C33.8372 35 35 33.8683 35 32.4742V2.52389C35 1.12972 33.8372 0 32.4099 0Z"
            fill={`${fill}`}
          />
        </svg>
      </a>

      {/* =========== RESUME ICON LINK =========== */}
      <a href="#" className="text-gray-500 hover:text-gray-400">
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
      </a>

      {/* =========== GITHUB ICON LINK =========== */}
      <a
        href="https://github.com/DoctorDerek"
        target="_blank"
        className="text-gray-500 hover:text-gray-400"
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
            d="M32.6525 8.62627C31.0876 5.97254 28.9649 3.87158 26.2839 2.32292C23.6024 0.774175 20.6751 0 17.4998 0C14.325 0 11.3967 0.774412 8.7158 2.32292C6.03453 3.87151 3.91193 5.97254 2.34703 8.62627C0.782369 11.2799 0 14.1777 0 17.3196C0 21.0937 1.11254 24.4875 3.33818 27.5018C5.56358 30.5163 8.43847 32.6023 11.9626 33.7599C12.3728 33.8352 12.6765 33.7822 12.8739 33.6022C13.0715 33.422 13.1701 33.1962 13.1701 32.9259C13.1701 32.8808 13.1662 32.475 13.1586 31.7081C13.1508 30.9412 13.1471 30.2722 13.1471 29.7013L12.623 29.7911C12.2889 29.8517 11.8673 29.8773 11.3584 29.8701C10.8497 29.863 10.3216 29.8103 9.77479 29.7122C9.22778 29.6149 8.71899 29.3894 8.24804 29.0361C7.77733 28.6828 7.44316 28.2203 7.24564 27.6494L7.01778 27.1304C6.8659 26.7849 6.6268 26.4011 6.30014 25.9804C5.97348 25.5593 5.64315 25.2738 5.30899 25.1235L5.14945 25.0105C5.04314 24.9354 4.9445 24.8448 4.85328 24.7396C4.76213 24.6345 4.6939 24.5293 4.64833 24.4239C4.60268 24.3184 4.64051 24.232 4.76221 24.1641C4.88392 24.0963 5.10388 24.0633 5.42303 24.0633L5.87858 24.1307C6.18242 24.191 6.55824 24.371 7.00653 24.6719C7.45458 24.9725 7.8229 25.3633 8.11157 25.8442C8.46113 26.4608 8.88228 26.9306 9.37622 27.2539C9.86976 27.5772 10.3674 27.7386 10.8686 27.7386C11.3698 27.7386 11.8027 27.701 12.1674 27.6262C12.5317 27.551 12.8735 27.438 13.1927 27.2877C13.3294 26.28 13.7016 25.5058 14.3091 24.9647C13.4433 24.8746 12.6649 24.739 11.9735 24.5587C11.2825 24.3781 10.5685 24.085 9.83185 23.6787C9.09482 23.2729 8.4834 22.7691 7.99744 22.168C7.5114 21.5665 7.11251 20.777 6.80134 19.7999C6.49 18.8225 6.3343 17.695 6.3343 16.4171C6.3343 14.5976 6.93446 13.0493 8.13455 11.7712C7.57238 10.4033 7.62545 8.86979 8.29393 7.17089C8.73448 7.03542 9.3878 7.13708 10.2536 7.47524C11.1195 7.81355 11.7535 8.10336 12.1562 8.34365C12.5589 8.58385 12.8816 8.78741 13.1247 8.95249C14.5377 8.56173 15.9959 8.36631 17.4997 8.36631C19.0034 8.36631 20.462 8.56173 21.8751 8.95249L22.7409 8.4115C23.333 8.05052 24.0322 7.71971 24.8369 7.419C25.642 7.11844 26.2576 7.03566 26.6832 7.17113C27.3665 8.87011 27.4274 10.4035 26.865 11.7715C28.0651 13.0495 28.6655 14.5983 28.6655 16.4174C28.6655 17.6953 28.5092 18.8263 28.1983 19.8112C27.8871 20.7963 27.4848 21.5851 26.9912 22.1793C26.4971 22.7733 25.8818 23.2733 25.1452 23.679C24.4084 24.085 23.6941 24.378 23.0031 24.5586C22.3118 24.7391 21.5334 24.8749 20.6676 24.9651C21.4573 25.6414 21.8522 26.7089 21.8522 28.1672V32.9253C21.8522 33.1956 21.9471 33.4213 22.1372 33.6016C22.3271 33.7816 22.6269 33.8346 23.0372 33.7592C26.5618 32.6017 29.4367 30.5157 31.662 27.5012C33.8871 24.4869 35 21.0931 35 17.319C34.9992 14.1775 34.2164 11.2799 32.6525 8.62627Z"
            fill={`${fill}`}
          />
        </svg>
      </a>

      {/* =========== MEDIUM ICON LINK =========== */}
      <a
        href="https://doctorderek.medium.com/"
        target="_blank"
        className="text-gray-500 hover:text-gray-400"
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
      </a>

      {/* =========== COPY ICON LINK =========== */}
      <a href="#" className="text-gray-500 hover:text-gray-400">
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
      </a>
    </div>
  )
}
