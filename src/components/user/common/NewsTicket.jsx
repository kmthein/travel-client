import { Alert } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  return (
    <Alert
      banner
      message={
        <Marquee pauseOnHover gradient={false}>
          <p className="text-xl py-3">
            Breaking News: Due to ongoing conflicts we respectfully inform you
            that Momeik trips are temporarily suspended. 🙏
          </p>
        </Marquee>
      }
    />
  );
};

export default NewsTicker;
