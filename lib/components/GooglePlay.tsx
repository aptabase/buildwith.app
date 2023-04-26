type Props = {
  href: string;
  className: string;
};

export function GooglePlay(props: Props) {
  return (
    <a href={props.href} target="_blank">
      <svg
        fill="none"
        viewBox="0 0 167 48"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="31.37"
          x2="9.514"
          y1="28.73"
          y2="50.283"
        >
          <stop offset="0" stop-color="#ff3944" />
          <stop offset="1" stop-color="#c31161" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="31.36"
          x2="13.972"
          y1="32.154"
          y2="49.37"
        >
          <stop offset="0" stop-color="#cc2d36" />
          <stop offset="1" stop-color="#9c0e4e" />
        </linearGradient>
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="15.587"
          x2="13.566"
          y1="38.006"
          y2="40.034"
        >
          <stop offset="0" stop-color="#df333b" />
          <stop offset="1" stop-color="#ab0f55" />
        </linearGradient>
        <mask
          id="d"
          height="30"
          maskUnits="userSpaceOnUse"
          width="17"
          x="13"
          y="9"
        >
          <path
            d="m14.352 38.861-.089-.086c-.344-.37-.548-.942-.548-1.686v.176-26.535-.006.183c0-.805.237-1.411.636-1.775l14.717 14.865-14.716 14.863z"
            fill="#fff"
          />
        </mask>
        <mask
          id="e"
          height="11"
          maskUnits="userSpaceOnUse"
          width="13"
          x="29"
          y="19"
        >
          <path
            d="m33.974 29.129.112-.064 5.812-3.335c.553-.318.923-.704 1.107-1.112-.184.408-.553.794-1.107 1.112l-5.813 3.335zm.001-.175-4.907-4.956 4.907-4.956 5.923 3.398c.752.432 1.175.99 1.245 1.557v.002c-.07.568-.493 1.124-1.245 1.556z"
            fill="#fff"
          />
        </mask>
        <mask
          id="f"
          height="17"
          maskUnits="userSpaceOnUse"
          width="20"
          x="14"
          y="23"
        >
          <path
            d="m15.402 39.426a1.523 1.523 0 0 0 .001 0c.035 0 .071 0 .108-.002-.037.002-.074.002-.11.002zm0-.175a1.52 1.52 0 0 1 -1.05-.39l14.716-14.863 4.907 4.956-17.242 9.894c-.477.274-.929.403-1.331.403z"
            fill="#fff"
          />
        </mask>
        <mask
          id="g"
          height="16"
          maskUnits="userSpaceOnUse"
          width="21"
          x="14"
          y="8"
        >
          <path
            d="m29.068 23.998-14.716-14.865a1.52 1.52 0 0 1 1.048-.389c.402 0 .854.13 1.333.403l17.242 9.895zm5.018-5.068-17.353-9.958c-.477-.273-.931-.403-1.333-.403h-.005.007c.401 0 .854.129 1.331.403z"
            fill="#fff"
          />
        </mask>
        <mask
          id="h"
          height="12"
          maskUnits="userSpaceOnUse"
          width="21"
          x="14"
          y="28"
        >
          <path
            d="m15.403 39.426c-.411 0-.771-.135-1.05-.39h-.002s-.002 0-.003-.002l-.076-.075-.007-.009.088-.089c.279.255.637.39 1.049.39.402 0 .854-.13 1.331-.403l17.242-9.894.11.111-.111.064-17.24 9.894c-.436.25-.85.38-1.223.401-.037.002-.073.002-.108.002z"
            fill="#fff"
          />
        </mask>
        <mask
          id="i"
          height="1"
          maskUnits="userSpaceOnUse"
          width="1"
          x="14"
          y="38"
        >
          <path d="m14.265 38.95h-.001l.089-.089-.088.09z" fill="#fff" />
        </mask>
        <path
          d="m0 12c0-6.627 5.373-12 12-12h143c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-143c-6.627 0-12-5.373-12-12z"
          fill="#000"
        />
        <path
          clip-rule="evenodd"
          d="m59 14.043c.005-.038.01-.076.013-.114v-.006h-.121l-.013.12h-2.601v-1.104h3.709l.018.098c.035.194.053.382.053.564 0 1.027-.308 1.865-.928 2.486l-.087-.082.085.085.002-.003c-.7.735-1.621 1.104-2.732 1.103-1.067.001-1.987-.373-2.734-1.115-.75-.741-1.128-1.672-1.127-2.766 0-1.093.377-2.024 1.127-2.764.747-.743 1.667-1.118 2.734-1.116.531 0 1.041.104 1.525.31.482.208.876.486 1.171.838l.071.085-.078.077-.726.726-.084-.1c-.455-.54-1.067-.81-1.88-.81-.729 0-1.348.251-1.882.764-.53.512-.792 1.165-.793 1.99.001.826.264 1.479.793 1.991a2.619 2.619 0 0 0 1.883.766c.777-.001 1.41-.256 1.926-.77.3-.3.487-.714.555-1.253zm-.627-2.759.081-.08.007.007zm-.083-.087.08.09-.086-.084zm7.178-.603h-.12.12v-.12zm.12 0v-1.005h-4.443v7.44h4.443v-1.124h-3.28v-2.044h2.958v-1.104h-2.957v-2.043h3.28v-.12zm3.782 6.315h-.12zm.12 0v-6.195h2.01v-1.125h-5.188v1.125h2.011v6.315h1.167zm5.47 0h.12zm0 .12h1.046v-7.439h-1.166v7.44h.12zm5.029-.12h-.12.12v-.12zm.12 0v-6.195h2.011v-1.125h-5.188v1.125h2.012v6.315h1.165zm6.66-1.533.087-.084c.514.518 1.127.771 1.87.774.744-.001 1.358-.256 1.87-.774.51-.519.765-1.17.766-1.983-.001-.812-.255-1.464-.765-1.982-.513-.518-1.127-.772-1.871-.773-.743.001-1.356.255-1.871.773h.001c-.51.517-.764 1.17-.765 1.982 0 .813.255 1.466.765 1.983h-.001l-.085.084zm4.597.603.086.083c-.727.751-1.646 1.13-2.726 1.128-1.08.001-1.998-.377-2.725-1.128-.729-.746-1.096-1.674-1.095-2.753-.001-1.078.366-2.005 1.095-2.752.727-.75 1.645-1.13 2.725-1.128 1.074-.002 1.99.379 2.721 1.132.731.75 1.1 1.676 1.1 2.748 0 1.08-.366 2.007-1.095 2.753zm7.025-.67v-.023l-.04.024h.04zm-3.74-4.272h-.041v.024l.04-.024v.12h-.037l.002.05.125.202.03 1.014v4.606h-1.165v-7.439h1.313l3.342 5.35.006.235.085.135v-.118h.037l-.002-.05-.126-.203-.03-1.013v-4.337h1.166v7.44h-1.152l-3.504-5.62-.007-.24zm-.926 5.872v-.12.12h.12zm39.872 20.4h-2.239v-15h2.239zm15.363-3.093 2.567-6.504h2.49l-6.156 14.147h-2.337l2.278-5.057-3.995-9.09h2.412l2.664 6.504zm-11.889.116c0 .907 1.023 1.273 1.757 1.273a2.714 2.714 0 0 0 2.663-2.373c-.599-.29-1.061-.502-2.046-.502-1.099 0-2.374.444-2.374 1.602zm-1.968-4.651c.695-1.583 2.374-2.297 3.995-2.297 2.567 0 4.554 1.486 4.554 4.15v5.75h-2.161v-1.158h-.077c-.522.792-1.351 1.468-2.857 1.468-1.968 0-3.725-1.294-3.725-3.301 0-2.2 2.182-3.377 4.324-3.377 1.062 0 1.929.347 2.335.578v-.153c-.019-1.236-1.196-1.931-2.354-1.931-.831 0-1.622.271-2.046 1.1zm-13.028-.143h3.185c1.674 0 2.624-1.409 2.624-2.571 0-1.185-.95-2.57-2.624-2.57h-3.185zm-2.238-7.23h5.365c2.482 0 4.921 1.797 4.921 4.659s-2.439 4.66-4.921 4.66h-3.127v5.682h-2.238v-15zm-26.734 10.227c0 1.778 1.295 3.073 2.842 3.073 1.528 0 2.725-1.295 2.725-3.073 0-1.798-1.197-3.113-2.725-3.113-1.547 0-2.842 1.315-2.842 3.113zm5.336-3.983h.076v-.832h2.128v9.165c0 3.769-2.224 5.316-4.853 5.316-2.474 0-3.963-1.662-4.524-3.016l1.953-.812c.348.831 1.198 1.818 2.571 1.818 1.683 0 2.725-1.044 2.725-2.998v-.734h-.076c-.503.619-1.47 1.16-2.687 1.16-2.553 0-4.891-2.224-4.891-5.084 0-2.882 2.338-5.123 4.89-5.123 1.219 0 2.185.541 2.688 1.14zm5.994 8.757h-2.243v-15.002h2.243zm5.972-7.926c-1.14 0-2.725 1.006-2.668 2.978l4.563-1.895c-.251-.639-1.005-1.083-1.895-1.083zm-.077-1.971c2.649 0 3.945 2.107 4.369 3.247l.232.58-6.824 2.823c.522 1.024 1.334 1.546 2.474 1.546 1.141 0 1.934-.56 2.514-1.411l1.74 1.16c-.56.832-1.914 2.262-4.254 2.262-2.899 0-5.064-2.243-5.064-5.104 0-3.036 2.184-5.103 4.813-5.103zm-50 3.73v-2.164h7.287c.078.386.117.85.117 1.352 0 1.625-.445 3.635-1.876 5.065-1.392 1.451-3.17 2.224-5.528 2.224-4.37 0-8.043-3.557-8.043-7.926 0-4.37 3.674-7.927 8.043-7.927 2.417 0 4.136.948 5.432 2.185l-1.527 1.528c-.928-.87-2.184-1.547-3.905-1.547-3.19 0-5.685 2.57-5.685 5.761 0 3.19 2.495 5.76 5.685 5.76 2.067 0 3.247-.83 4.002-1.584.618-.62 1.023-1.508 1.178-2.726h-5.18zm10.413 1.373c0 1.817 1.335 3.093 2.882 3.093 1.545 0 2.88-1.276 2.88-3.093 0-1.837-1.335-3.093-2.88-3.093-1.547 0-2.882 1.256-2.882 3.093zm-2.242 0c0-2.958 2.3-5.103 5.124-5.103 2.822 0 5.122 2.145 5.122 5.103 0 2.938-2.3 5.104-5.122 5.104-2.824 0-5.124-2.166-5.124-5.104zm13.418 0c0 1.817 1.334 3.093 2.881 3.093s2.88-1.276 2.88-3.093c0-1.837-1.333-3.093-2.88-3.093s-2.881 1.256-2.881 3.093zm-2.242 0c0-2.958 2.3-5.103 5.123-5.103s5.123 2.145 5.123 5.103c0 2.938-2.3 5.104-5.123 5.104-2.822 0-5.123-2.166-5.123-5.104z"
          fill="#fff"
          fillRule="evenodd"
        />
        <g mask="url(#d)">
          <path
            clip-rule="evenodd"
            d="m14.352 38.861-.089-.086c-.344-.37-.548-.942-.548-1.686v.176-26.535-.006.183c0-.805.237-1.411.636-1.775l14.717 14.865-14.716 14.863z"
            fill="#00d0ff"
            fillRule="evenodd"
          />
        </g>
        <g mask="url(#e)">
          <path
            clip-rule="evenodd"
            d="m33.974 29.129.112-.064 5.812-3.335c.553-.318.923-.704 1.107-1.112-.184.408-.553.794-1.107 1.112l-5.813 3.335zm.001-.175-4.907-4.956 4.907-4.956 5.923 3.398c.752.432 1.175.99 1.245 1.557v.002c-.07.568-.493 1.124-1.245 1.556z"
            fill="#ffc800"
            fillRule="evenodd"
          />
        </g>
        <g mask="url(#f)">
          <path
            clip-rule="evenodd"
            d="m15.402 39.426a1.523 1.523 0 0 0 .001 0c.035 0 .071 0 .108-.002-.037.002-.074.002-.11.002zm0-.175a1.52 1.52 0 0 1 -1.05-.39l14.716-14.863 4.907 4.956-17.242 9.894c-.477.274-.929.403-1.331.403z"
            fill="url(#a)"
            fillRule="evenodd"
          />
        </g>
        <g mask="url(#g)">
          <path
            clip-rule="evenodd"
            d="m29.068 23.998-14.716-14.865a1.52 1.52 0 0 1 1.048-.389c.402 0 .854.13 1.333.403l17.242 9.895zm5.018-5.068-17.353-9.958c-.477-.273-.931-.403-1.333-.403h-.005.007c.401 0 .854.129 1.331.403z"
            fill="#00f076"
            fillRule="evenodd"
          />
        </g>
        <path
          clip-rule="evenodd"
          d="m15.511 39.424c.374-.022.788-.151 1.222-.4l17.241-9.895-17.24 9.894c-.435.25-.849.38-1.223.401z"
          fill="#000"
          fillRule="evenodd"
        />
        <g mask="url(#h)">
          <path
            clip-rule="evenodd"
            d="m15.403 39.426c-.411 0-.771-.135-1.05-.39h-.002s-.002 0-.003-.002l-.076-.075-.007-.009.088-.089c.279.255.637.39 1.049.39.402 0 .854-.13 1.331-.403l17.242-9.894.11.111-.111.064-17.24 9.894c-.436.25-.85.38-1.223.401-.037.002-.073.002-.108.002z"
            fill="url(#b)"
            fillRule="evenodd"
          />
        </g>
        <path
          clip-rule="evenodd"
          d="m14.263 38.95c-.344-.368-.548-.942-.548-1.684v-.002c0 .744.204 1.317.548 1.686z"
          fill="#000"
          fillRule="evenodd"
        />
        <g mask="url(#i)">
          <path
            clip-rule="evenodd"
            d="m14.265 38.95h-.001l.089-.089-.088.09z"
            fill="url(#c)"
            fillRule="evenodd"
          />
        </g>
        <g clip-rule="evenodd" fillRule="evenodd">
          <path d="m41.005 24.618a1.502 1.502 0 0 1 0 0z" fill="#000" />
          <path
            d="m41.143 23.998v-.001c-.001-.628-.416-1.255-1.245-1.73l-5.812-3.337 5.812 3.335c.83.477 1.246 1.105 1.245 1.733zm-27.422-13.48c.068-1.232.732-1.945 1.67-1.949a1.518 1.518 0 0 0 -1.039.389l-.002.004c-.03.026-.059.055-.086.084-.311.333-.508.832-.543 1.472z"
            fill="#404040"
          />
        </g>
      </svg>
    </a>
  );
}
