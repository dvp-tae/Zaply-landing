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
