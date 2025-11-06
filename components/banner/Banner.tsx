import CountUp from "../utility/CountUp";

const Banner = () => {
  return (
    <section className="p-4 rounded-3xl flex gap-5">
      <div className="rounded-2xl border bg-success glass p-5 md:p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-20 h-12  rounded-xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="fill-success-content"
            >
              <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z" />
            </svg>
          </div>
          <span className="text-3xl  text-success-content uppercase">
            Students
          </span>
        </div>
        <div className="flex items-end justify-between mt-10">
          <div>
            <CountUp
              from={1}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="font-semibold text-4xl text-success-content"
            />
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium bg-primary text-success-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              fill="#fff"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M6.065 1.624a.75.75 0 0 1 .558-.25h.001c.192 0 .384.073.531.22l3 2.998a.75.75 0 1 1-1.06 1.06l-1.722-1.72v6.193a.75.75 0 0 1-1.5 0v-6.19L4.155 5.654a.75.75 0 0 1-1.06-1.061z"
                clip-rule="evenodd"
              ></path>
            </svg>
            11.01%
          </span>
        </div>
      </div>

      <div className="rounded-2xl border bg-info glass  p-5 md:p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-20 h-12  rounded-xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="fill-success-content"
            >
              <path d="M192 144C222.9 144 248 118.9 248 88C248 57.1 222.9 32 192 32C161.1 32 136 57.1 136 88C136 118.9 161.1 144 192 144zM176 576L176 416C176 407.2 183.2 400 192 400C200.8 400 208 407.2 208 416L208 576C208 593.7 222.3 608 240 608C257.7 608 272 593.7 272 576L272 240L400 240C417.7 240 432 225.7 432 208C432 190.3 417.7 176 400 176L384 176L384 128L576 128L576 320L384 320L384 288L320 288L320 336C320 362.5 341.5 384 368 384L592 384C618.5 384 640 362.5 640 336L640 112C640 85.5 618.5 64 592 64L368 64C341.5 64 320 85.5 320 112L320 176L197.3 176C151.7 176 108.8 197.6 81.7 234.2L14.3 324.9C3.8 339.1 6.7 359.1 20.9 369.7C35.1 380.3 55.1 377.3 65.7 363.1L112 300.7L112 576C112 593.7 126.3 608 144 608C161.7 608 176 593.7 176 576z" />
            </svg>
          </div>
          <span className="text-3xl  text-success-content uppercase">
            Teacher
          </span>
        </div>
        <div className="flex items-end justify-between mt-10">
          <div>
            <CountUp
              from={1}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="font-semibold text-4xl text-success-content"
            />
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium bg-primary text-success-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              fill="#fff"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M6.065 1.624a.75.75 0 0 1 .558-.25h.001c.192 0 .384.073.531.22l3 2.998a.75.75 0 1 1-1.06 1.06l-1.722-1.72v6.193a.75.75 0 0 1-1.5 0v-6.19L4.155 5.654a.75.75 0 0 1-1.06-1.061z"
                clip-rule="evenodd"
              ></path>
            </svg>
            11.01%
          </span>
        </div>
      </div>

      <div className="rounded-2xl border bg-neutral glass  p-5 md:p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-20 h-12  rounded-xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="fill-success-content"
            >
              <path d="M160 64C142.3 64 128 78.3 128 96C128 113.7 142.3 128 160 128L160 139C160 181.4 176.9 222.1 206.9 252.1L274.8 320L206.9 387.9C176.9 417.9 160 458.6 160 501L160 512C142.3 512 128 526.3 128 544C128 561.7 142.3 576 160 576L480 576C497.7 576 512 561.7 512 544C512 526.3 497.7 512 480 512L480 501C480 458.6 463.1 417.9 433.1 387.9L365.2 320L433.1 252.1C463.1 222.1 480 181.4 480 139L480 128C497.7 128 512 113.7 512 96C512 78.3 497.7 64 480 64L160 64zM224 139L224 128L416 128L416 139C416 158 410.4 176.4 400 192L240 192C229.7 176.4 224 158 224 139zM240 448C243.5 442.7 247.6 437.7 252.1 433.1L320 365.2L387.9 433.1C392.5 437.7 396.5 442.7 400.1 448L240 448z" />
            </svg>
          </div>
          <span className="text-3xl  text-success-content uppercase">
            Pending Fees
          </span>
        </div>
        <div className="flex items-end justify-between mt-10">
          <div>
            <CountUp
              from={1}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="font-semibold text-4xl text-success-content"
            />
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium bg-primary text-success-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              fill="#fff"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M6.065 1.624a.75.75 0 0 1 .558-.25h.001c.192 0 .384.073.531.22l3 2.998a.75.75 0 1 1-1.06 1.06l-1.722-1.72v6.193a.75.75 0 0 1-1.5 0v-6.19L4.155 5.654a.75.75 0 0 1-1.06-1.061z"
                clip-rule="evenodd"
              ></path>
            </svg>
            11.01%
          </span>
        </div>
      </div>

      <div className="rounded-2xl border bg-error-content glass  p-5 md:p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-20 h-12  rounded-xl ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-success-content">
              <path d="M128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 256C576 220.7 547.3 192 512 192L136 192C122.7 192 112 181.3 112 168C112 154.7 122.7 144 136 144L520 144C533.3 144 544 133.3 544 120C544 106.7 533.3 96 520 96L128 96zM480 320C497.7 320 512 334.3 512 352C512 369.7 497.7 384 480 384C462.3 384 448 369.7 448 352C448 334.3 462.3 320 480 320z" />
            </svg>
          </div>
          <span className="text-3xl  text-success-content uppercase">
            Revenue
          </span>
        </div>
        <div className="flex items-end justify-between mt-10">
          <div>
            <CountUp
              from={1}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="font-semibold text-4xl text-success-content"
            />
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium bg-primary text-success-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              fill="#fff"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M6.065 1.624a.75.75 0 0 1 .558-.25h.001c.192 0 .384.073.531.22l3 2.998a.75.75 0 1 1-1.06 1.06l-1.722-1.72v6.193a.75.75 0 0 1-1.5 0v-6.19L4.155 5.654a.75.75 0 0 1-1.06-1.061z"
                clip-rule="evenodd"
              ></path>
            </svg>
            11.01%
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
