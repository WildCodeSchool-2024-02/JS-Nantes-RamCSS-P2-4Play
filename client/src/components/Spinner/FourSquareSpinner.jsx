function FourSquareSpinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 24 24"
    >

      <rect width="9" height="9" x="1.5" y="1.5" fill="#FFB703" rx="1">

        <animate
          id="svgSpinnersBlocksScale0"
          attributeName="x"
          begin="0;svgSpinnersBlocksScale1.end+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="1.5;.5;1.5"
        />
        <animate
          attributeName="y"
          begin="0;svgSpinnersBlocksScale1.end+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="1.5;.5;1.5"
        />
        <animate
          attributeName="width"
          begin="0;svgSpinnersBlocksScale1.end+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
        <animate
          attributeName="height"
          begin="0;svgSpinnersBlocksScale1.end+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
      </rect>

      <rect width="9" height="9" x="13.5" y="1.5" fill="#FFB703" rx="1">

        <animate
          attributeName="x"
          begin="svgSpinnersBlocksScale0.begin+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="13.5;12.5;13.5"
        />
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksScale0.begin+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="1.5;.5;1.5"
        />
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksScale0.begin+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksScale0.begin+0.15s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
      </rect>

      <rect width="9" height="9" x="13.5" y="13.5" fill="#FFB703" rx="1">

        <animate
          attributeName="x"
          begin="svgSpinnersBlocksScale0.begin+0.3s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="13.5;12.5;13.5"
        />
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksScale0.begin+0.3s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="13.5;12.5;13.5"
        />
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksScale0.begin+0.3s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksScale0.begin+0.3s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
      </rect>

      <rect width="9" height="9" x="1.5" y="13.5" fill="#FFB703" rx="1">

        <animate
          id="svgSpinnersBlocksScale1"
          attributeName="x"
          begin="svgSpinnersBlocksScale0.begin+0.45s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="1.5;.5;1.5"
        />
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksScale0.begin+0.45s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="13.5;12.5;13.5"
        />
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksScale0.begin+0.45s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksScale0.begin+0.45s"
          dur="0.6s"
          keyTimes="0;.2;1"
          values="9;11;9"
        />
      </rect>
    </svg>
  );
}
export default FourSquareSpinner;
