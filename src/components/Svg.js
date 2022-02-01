export const Search = ({ width = "20", height = "20" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width}>
    <title>Search</title>
    <path
      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="50"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="50"
      d="M338.29 338.29L448 448"
    />
  </svg>
);
export const MailUnread = ({ width = "24", height = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      role="img"
    >
      <title>Mail Unread</title>
      <path
        d="M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 160l144 112 87-65.67"
      />
      <circle cx="431.95" cy="128.05" r="47.95" fill="#39da2e" />
      <path
        d="M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z"
        fill="#39da2e"
      />
    </svg>
  );
};

export const Notifications = ({ width = "24", height = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={height}
      width={width}
    >
      <title>Notifications</title>
      <path
        d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );
};
/* <circle cx="350" cy="75.05" r="60" fill="#39da2e"></circle> */

export const Star = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Star</title>
    <path
      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

export const Reply = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Reply</title>
    <path d="M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z" />
  </svg>
);

export const AddNote = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Add Note</title>
    <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z" />
    <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z" />
  </svg>
);

export const Forward = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Forward</title>
    <path d="M58.79 439.13A16 16 0 0148 424c0-73.1 14.68-131.56 43.65-173.77 35-51 90.21-78.46 164.35-81.87V88a16 16 0 0127.05-11.57l176 168a16 16 0 010 23.14l-176 168A16 16 0 01256 424v-79.77c-45 1.36-79 8.65-106.07 22.64-29.25 15.12-50.46 37.71-73.32 67a16 16 0 01-17.82 5.28z" />
  </svg>
);

//Close, Merge, Delete, More

export const Close = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Close</title>
    <path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M352 176L217.6 336 160 272"
    />
  </svg>
);

export const Delete = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Trash</title>
    <path
      d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M80 112h352"
    />
    <path
      d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);

export const Merge = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <circle
      cx="128"
      cy="188"
      r="28"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></circle>
    <circle
      cx="188"
      cy="68"
      r="28"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></circle>
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></circle>
    <path
      d="M68,96v8a23.9,23.9,0,0,0,24,24h72a23.9,23.9,0,0,0,24-24V96"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="160"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
  </svg>
);

export const More = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
  >
    <title>Ellipsis Vertical</title>
    <circle
      cx="256"
      cy="256"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <circle
      cx="256"
      cy="416"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <circle
      cx="256"
      cy="96"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  </svg>
);

//
export const Home = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <title>Home</title>
    <path
      d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"
      fill="currentColor"
    />
    <path
      d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
      fill="currentColor"
    />
  </svg>
);

export const Ticket = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <title>Ticket</title>
    <path
      d="M426.24 127.72l-10.94 10.94a29.67 29.67 0 01-42-42l10.94-10.94L314.52 16l-88 88-4 12.09-12.09 4L16 314.52l69.76 69.76 10.94-10.94a29.67 29.67 0 0142 42l-10.94 10.94L197.48 496l194.4-194.4 4-12.09 12.09-4 88-88zm-208.56 5.43l21.87-21.87 33 33-21.88 21.87zm43 43l21.88-21.88 32.52 32.52-21.88 21.88zm42.56 42.56l21.88-21.88 32.52 32.52-21.84 21.93zm75.57 75.56l-33-33 21.87-21.88 33 33z"
      fill="currentColor"
    />
  </svg>
);

export const Profile = ({ width = "24", height = "24" }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="user-circle"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    width={width}
    height={height}
  >
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
      class=""
    ></path>
  </svg>
);

export const Messages = ({ width = "26", height = "26" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    ></path>
    <path
      d="M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    ></path>
  </svg>
);

export const Chart = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <title> Chart</title>
    <path
      d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"
      fill="currentColor"
    />
    <path
      d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"
      fill="currentColor"
    />
  </svg>
);
