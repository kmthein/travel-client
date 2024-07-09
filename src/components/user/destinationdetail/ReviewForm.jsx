import { Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const ReviewForm = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4">Review and rating</h2>
      <TextArea
        placeholder="write your review"
        className="text-xl"
        autoSize={{ minRows: 5, maxRows: 10 }}
      />
      <div className="flex justify-end mt-10 gap-5">
        <h2>Rating</h2>
        <Rate value={rate} onChange={setRate} />
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
