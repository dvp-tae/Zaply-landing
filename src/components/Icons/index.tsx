interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  color?: string;
}

export const MenuIcon = ({ size = 28, className, color = "#FEFEFE", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M3.5 21V18.6667H24.5V21H3.5ZM3.5 15.1667V12.8333H24.5V15.1667H3.5ZM3.5 9.33333V7H24.5V9.33333H3.5Z"
      fill={color}
    />
  </svg>
);

export const XIcon = ({
  width = 28,
  height = 28,
  className,
  color = "#D6DBE2",
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M7.46671 22.1667L5.83337 20.5333L12.3667 14L5.83337 7.46667L7.46671 5.83334L14 12.3667L20.5334 5.83334L22.1667 7.46667L15.6334 14L22.1667 20.5333L20.5334 22.1667L14 15.6333L7.46671 22.1667Z"
      fill={color}
    />
  </svg>
);

export const ArrowRightIcon = ({
  width = 28,
  height = 28,
  className,
  color = "#22C7FA",
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M5.24991 12.8333H18.7669L13.5169 7.58332L15.1666 5.93365L23.2329 14L15.1666 22.0663L13.5169 20.4167L18.7669 15.1667H5.24991V12.8333Z"
      fill={color}
    />
  </svg>
);

export const CheckIcon = ({ size = 42, className, color = "#FEFEFE", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 42 35" fill="none" className={className} {...props}>
    <path
      d="M1.00006 1L21.0001 21L41.0001 1"
      stroke={color}
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M1.00006 13L21.0001 33L41.0001 13"
      stroke={color}
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartIcon = ({ size = 24, className, color = "#22C7FA", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M16.4944 3.58984C14.5597 3.58984 12.9064 4.96892 11.9981 5.91969C11.0898 4.96892 9.44028 3.58984 7.50644 3.58984C4.17321 3.58984 1.84613 5.91323 1.84613 9.23907C1.84613 12.9037 4.73628 15.2723 7.53228 17.5634C8.85228 18.6462 10.2184 19.7649 11.2661 21.0055C11.4424 21.2132 11.7009 21.3332 11.9723 21.3332H12.0258C12.2981 21.3332 12.5557 21.2123 12.7311 21.0055C13.7806 19.7649 15.1458 18.6452 16.4667 17.5634C19.2618 15.2732 22.1538 12.9046 22.1538 9.23907C22.1538 5.91323 19.8267 3.58984 16.4944 3.58984Z"
      fill={color}
    />
  </svg>
);

export const HateIcon = ({ size = 24, className, color = "#F83650", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M20 3H19V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM4 16H11L9.878 19.368C9.77789 19.6686 9.75061 19.9887 9.79843 20.3018C9.84624 20.615 9.96778 20.9124 10.153 21.1694C10.3383 21.4264 10.5819 21.6358 10.8639 21.7802C11.1459 21.9246 11.4582 21.9999 11.775 22H12L17 16.562V3H6L2.088 11.596L2 12V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16Z"
      fill={color}
    />
  </svg>
);

export const LikeIcon = ({ size = 24, className, color = "#D6DBE2", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M4 21H5V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21ZM20 8H13L14.122 4.632C14.2221 4.33141 14.2494 4.01135 14.2016 3.69815C14.1538 3.38496 14.0322 3.08761 13.847 2.83059C13.6617 2.57358 13.4181 2.36424 13.1361 2.21984C12.8541 2.07543 12.5418 2.00008 12.225 2H12L7 7.438V21H18L21.912 12.404L22 12V10C22 9.46957 21.7893 8.96086 21.4142 8.58579C21.0391 8.21071 20.5304 8 20 8Z"
      fill={color}
    />
  </svg>
);

export const CheckBoxIcon = ({ size = 25, className, color = "#BDC5D0", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 21C13.6819 21 14.8522 20.7672 15.9442 20.3149C17.0361 19.8626 18.0282 19.1997 18.864 18.364C19.6997 17.5282 20.3626 16.5361 20.8149 15.4442C21.2672 14.3522 21.5 13.1819 21.5 12C21.5 10.8181 21.2672 9.64778 20.8149 8.55585C20.3626 7.46392 19.6997 6.47177 18.864 5.63604C18.0282 4.80031 17.0361 4.13738 15.9442 3.68508C14.8522 3.23279 13.6819 3 12.5 3C10.1131 3 7.82387 3.94821 6.13604 5.63604C4.44821 7.32387 3.5 9.61305 3.5 12C3.5 14.3869 4.44821 16.6761 6.13604 18.364C7.82387 20.0518 10.1131 21 12.5 21ZM12.268 15.64L17.268 9.64L15.732 8.36L11.432 13.519L9.207 11.293L7.793 12.707L10.793 15.707L11.567 16.481L12.268 15.64Z"
      fill={color}
    />
  </svg>
);

export const ShareIcon = ({ size = 24, className, color = "#FEFEFE", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M11.5 17H7.5C6.11667 17 4.93767 16.5123 3.963 15.537C2.98833 14.5617 2.50067 13.3827 2.5 12C2.49933 10.6173 2.987 9.43833 3.963 8.463C4.939 7.48767 6.118 7 7.5 7H11.5V9H7.5C6.66667 9 5.95833 9.29167 5.375 9.875C4.79167 10.4583 4.5 11.1667 4.5 12C4.5 12.8333 4.79167 13.5417 5.375 14.125C5.95833 14.7083 6.66667 15 7.5 15H11.5V17ZM8.5 13V11H16.5V13H8.5ZM13.5 17V15H17.5C18.3333 15 19.0417 14.7083 19.625 14.125C20.2083 13.5417 20.5 12.8333 20.5 12C20.5 11.1667 20.2083 10.4583 19.625 9.875C19.0417 9.29167 18.3333 9 17.5 9H13.5V7H17.5C18.8833 7 20.0627 7.48767 21.038 8.463C22.0133 9.43833 22.5007 10.6173 22.5 12C22.4993 13.3827 22.0117 14.562 21.037 15.538C20.0623 16.514 18.8833 17.0013 17.5 17H13.5Z"
      fill={color}
    />
  </svg>
);

export const ZaplyLogoIcon = ({ className, color = "#FEFEFE", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="190 170 40 120"
    fill="none"
    className={className}
    {...props}>
    <g clipPath="url(#clip0_144_3328)" filter="url(#filter0_d_144_3328)">
      <mask id="mask0_144_3328" maskUnits="userSpaceOnUse" x="139" y="138" width="151" height="161">
        <rect
          x="139.936"
          y="249.198"
          width="140.677"
          height="79.8435"
          transform="rotate(-51.9188 139.936 249.198)"
          fill="url(#paint0_linear_144_3328)"
        />
      </mask>
      <g mask="url(#mask0_144_3328)">
        <path d="M208.887 98.7976L208.85 309.119" stroke={color} strokeWidth="0.504202" />
        <line
          x1="119.368"
          y1="220.765"
          x2="297.814"
          y2="220.765"
          stroke={color}
          strokeWidth="0.504202"
        />
        <path d="M206.003 102.733L216.181 303.325" stroke={color} strokeWidth="0.504202" />
        <path d="M203.12 106.668L222.823 301.239" stroke={color} strokeWidth="0.504202" />
        <line
          x1="200.339"
          y1="110.587"
          x2="227.361"
          y2="286.976"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="197.454"
          y1="114.517"
          x2="233.375"
          y2="289.311"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="194.569"
          y1="118.447"
          x2="239.297"
          y2="291.197"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="191.681"
          y1="122.378"
          x2="245.102"
          y2="292.64"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="188.795"
          y1="126.308"
          x2="250.77"
          y2="293.647"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="185.907"
          y1="130.239"
          x2="256.278"
          y2="294.224"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="183.019"
          y1="134.17"
          x2="261.606"
          y2="294.38"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="180.13"
          y1="138.101"
          x2="266.73"
          y2="294.125"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="177.24"
          y1="142.032"
          x2="271.631"
          y2="293.47"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="174.35"
          y1="145.964"
          x2="276.291"
          y2="292.427"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="171.459"
          y1="149.897"
          x2="280.688"
          y2="291.008"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="168.569"
          y1="153.829"
          x2="284.804"
          y2="289.227"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="165.677"
          y1="157.762"
          x2="288.621"
          y2="287.099"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="162.786"
          y1="161.696"
          x2="292.122"
          y2="284.64"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="159.892"
          y1="165.63"
          x2="295.29"
          y2="281.865"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="157"
          y1="169.565"
          x2="298.112"
          y2="278.793"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="154.107"
          y1="173.5"
          x2="300.569"
          y2="275.44"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="151.214"
          y1="177.435"
          x2="302.651"
          y2="271.827"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="148.319"
          y1="181.371"
          x2="304.344"
          y2="267.972"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="145.425"
          y1="185.308"
          x2="305.636"
          y2="263.895"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="142.53"
          y1="189.245"
          x2="306.515"
          y2="259.617"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="139.636"
          y1="193.183"
          x2="306.975"
          y2="255.158"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="136.74"
          y1="197.121"
          x2="307.003"
          y2="250.542"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="133.846"
          y1="201.06"
          x2="306.596"
          y2="245.788"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="130.95"
          y1="205"
          x2="305.744"
          y2="240.921"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="128.054"
          y1="208.94"
          x2="304.443"
          y2="235.962"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="125.159"
          y1="212.881"
          x2="302.69"
          y2="230.934"
          stroke={color}
          strokeWidth="0.504202"
        />
        <line
          x1="122.263"
          y1="216.823"
          x2="300.48"
          y2="225.861"
          stroke={color}
          strokeWidth="0.504202"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_144_3328"
        x="0.339081"
        y="0.339081"
        width="424.666"
        height="443.155"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="80.8305" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_144_3328" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_144_3328"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_144_3328"
        x1="210.275"
        y1="249.198"
        x2="210.275"
        y2="329.042"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#D9D9D9" stopOpacity="0" />
        <stop offset="0.144231" stopColor="#D9D9D9" />
        <stop offset="0.817308" stopColor="#D9D9D9" />
        <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_144_3328">
        <rect width="101.345" height="119.833" fill="white" transform="translate(162 162)" />
      </clipPath>
    </defs>
  </svg>
);

export const ZaplyFooterLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 40" fill="none">
    <g clip-path="url(#clip0_375_1205)">
      <mask id="mask0_375_1205" maskUnits="userSpaceOnUse" x="-7" y="-8" width="51" height="54">
        <rect
          x="-6.37988"
          y="29.0659"
          width="46.8922"
          height="26.6145"
          transform="rotate(-51.9188 -6.37988 29.0659)"
          fill="url(#paint0_linear_375_1205)"
        />
      </mask>
      <g mask="url(#mask0_375_1205)">
        <path d="M16.6038 -21.0674L16.5914 49.0397" stroke="#D6DBE2" strokeWidth="0.168067" />
        <line
          x1="-13.2361"
          y1="19.5883"
          x2="46.2461"
          y2="19.5883"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <path d="M15.6425 -19.7558L19.0353 47.1082" stroke="#D6DBE2" strokeWidth="0.168067" />
        <path d="M14.6814 -18.4438L21.2489 46.4132" stroke="#D6DBE2" strokeWidth="0.168067" />
        <line
          x1="13.7545"
          y1="-17.1377"
          x2="22.7617"
          y2="41.6586"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="12.7925"
          y1="-15.8275"
          x2="24.7662"
          y2="42.4372"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="11.8309"
          y1="-14.5176"
          x2="26.7402"
          y2="43.0657"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="10.8685"
          y1="-13.2073"
          x2="28.6753"
          y2="43.547"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="9.90644"
          y1="-11.8973"
          x2="30.5649"
          y2="43.8822"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="8.94368"
          y1="-10.5869"
          x2="32.4008"
          y2="44.0748"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="7.98096"
          y1="-9.27675"
          x2="34.1766"
          y2="44.1267"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="7.01781"
          y1="-7.96607"
          x2="35.8846"
          y2="44.042"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="6.05447"
          y1="-6.65578"
          x2="37.5184"
          y2="43.8235"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="5.09143"
          y1="-5.34537"
          x2="39.0717"
          y2="43.4755"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="4.12798"
          y1="-4.03435"
          x2="40.5374"
          y2="43.0028"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="3.16435"
          y1="-2.72368"
          x2="41.9094"
          y2="42.4089"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="2.20031"
          y1="-1.41239"
          x2="43.1816"
          y2="41.6999"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="1.23661"
          y1="-0.101434"
          x2="44.3489"
          y2="40.8798"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="0.272022"
          y1="1.21016"
          x2="45.4046"
          y2="39.9552"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-0.691727"
          y1="2.52144"
          x2="46.3454"
          y2="38.9309"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-1.65634"
          y1="3.83337"
          x2="47.1645"
          y2="37.8137"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-2.62083"
          y1="5.14499"
          x2="47.8584"
          y2="36.609"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-3.58544"
          y1="6.45729"
          x2="48.4226"
          y2="35.3241"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-4.55015"
          y1="7.76928"
          x2="48.8533"
          y2="33.9649"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-5.5152"
          y1="9.08196"
          x2="49.1465"
          y2="32.5391"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-6.47985"
          y1="10.3943"
          x2="49.2997"
          y2="31.0528"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-7.44506"
          y1="11.7074"
          x2="49.3093"
          y2="29.5142"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-8.40984"
          y1="13.0202"
          x2="49.1735"
          y2="27.9296"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-9.37517"
          y1="14.3337"
          x2="48.8894"
          y2="26.3074"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-10.3405"
          y1="15.6469"
          x2="48.4557"
          y2="24.6542"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-11.3057"
          y1="16.9603"
          x2="47.8713"
          y2="22.9781"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
        <line
          x1="-12.2711"
          y1="18.2745"
          x2="47.1347"
          y2="21.2872"
          stroke="#D6DBE2"
          strokeWidth="0.168067"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_375_1205"
        x1="17.0662"
        y1="29.0659"
        x2="17.0662"
        y2="55.6804"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#D9D9D9" stopOpacity="0" />
        <stop offset="0.144231" stopColor="#D9D9D9" />
        <stop offset="0.817308" stopColor="#D9D9D9" />
        <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_375_1205">
        <rect width="33.7815" height="39.9444" fill="white" transform="translate(0.974609)" />
      </clipPath>
    </defs>
  </svg>
);

export const ZaplyHeaderLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 40" fill="none">
    <g clip-path="url(#clip0_375_1356)">
      <mask id="mask0_375_1356" maskUnits="userSpaceOnUse" x="-7" y="-8" width="51" height="54">
        <rect
          x="-6.37988"
          y="29.066"
          width="46.8922"
          height="26.6145"
          transform="rotate(-51.9188 -6.37988 29.066)"
          fill="url(#paint0_linear_375_1356)"
        />
      </mask>
      <g mask="url(#mask0_375_1356)">
        <path d="M16.6038 -21.0675L16.5914 49.0396" stroke="#FEFEFE" stroke-width="0.168067" />
        <line
          x1="-13.2361"
          y1="19.5884"
          x2="46.2461"
          y2="19.5884"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <path d="M15.6425 -19.7558L19.0353 47.1082" stroke="#FEFEFE" stroke-width="0.168067" />
        <path d="M14.6814 -18.4441L21.2489 46.413" stroke="#FEFEFE" stroke-width="0.168067" />
        <line
          x1="13.7545"
          y1="-17.1376"
          x2="22.7617"
          y2="41.6587"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="12.7925"
          y1="-15.8276"
          x2="24.7662"
          y2="42.437"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="11.8309"
          y1="-14.5176"
          x2="26.7402"
          y2="43.0658"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="10.8685"
          y1="-13.2075"
          x2="28.6753"
          y2="43.5468"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="9.90644"
          y1="-11.8973"
          x2="30.5649"
          y2="43.8823"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="8.94368"
          y1="-10.5871"
          x2="32.4008"
          y2="44.0746"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="7.98096"
          y1="-9.27677"
          x2="34.1766"
          y2="44.1266"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="7.01781"
          y1="-7.96636"
          x2="35.8846"
          y2="44.0417"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="6.05447"
          y1="-6.65585"
          x2="37.5184"
          y2="43.8234"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="5.09143"
          y1="-5.34524"
          x2="39.0717"
          y2="43.4756"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="4.12798"
          y1="-4.03441"
          x2="40.5374"
          y2="43.0027"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="3.16435"
          y1="-2.72356"
          x2="41.9094"
          y2="42.4091"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="2.20031"
          y1="-1.41252"
          x2="43.1816"
          y2="41.6998"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="1.23661"
          y1="-0.101358"
          x2="44.3489"
          y2="40.8799"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="0.272022"
          y1="1.21004"
          x2="45.4046"
          y2="39.9551"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-0.691727"
          y1="2.52153"
          x2="46.3454"
          y2="38.931"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-1.65634"
          y1="3.83318"
          x2="47.1645"
          y2="37.8135"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-2.62083"
          y1="5.14501"
          x2="47.8584"
          y2="36.609"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-3.58544"
          y1="6.45703"
          x2="48.4226"
          y2="35.3239"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-4.55015"
          y1="7.76923"
          x2="48.8533"
          y2="33.9648"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-5.5152"
          y1="9.08171"
          x2="49.1465"
          y2="32.5389"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-6.47985"
          y1="10.3943"
          x2="49.2997"
          y2="31.0528"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-7.44506"
          y1="11.7071"
          x2="49.3093"
          y2="29.5139"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-8.40984"
          y1="13.0201"
          x2="49.1735"
          y2="27.9295"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-9.37517"
          y1="14.3334"
          x2="48.8894"
          y2="26.3071"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-10.3405"
          y1="15.6468"
          x2="48.4557"
          y2="24.6541"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-11.3057"
          y1="16.9604"
          x2="47.8713"
          y2="22.9781"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
        <line
          x1="-12.2711"
          y1="18.2743"
          x2="47.1347"
          y2="21.287"
          stroke="#FEFEFE"
          stroke-width="0.168067"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_375_1356"
        x1="17.0662"
        y1="29.066"
        x2="17.0662"
        y2="55.6805"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#D9D9D9" stop-opacity="0" />
        <stop offset="0.144231" stop-color="#D9D9D9" />
        <stop offset="0.817308" stop-color="#D9D9D9" />
        <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
      </linearGradient>
      <clipPath id="clip0_375_1356">
        <rect width="33.7815" height="39.9444" fill="white" transform="translate(0.974609)" />
      </clipPath>
    </defs>
  </svg>
);
