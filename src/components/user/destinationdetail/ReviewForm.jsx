import { Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  endLoading,
  startLoading,
  uiState,
} from "../../../features/ui/UiSlice";
import { createReview } from "../../../api/review";
import { userState } from "../../../features/user/UserSlice";

const ReviewForm = ({ destination }) => {
  const [rate, setRate] = useState(0);

  const [input, setInput] = useState("");

  const { loading } = useSelector(uiState);

  const { user } = useSelector(userState);

  const dispatch = useDispatch();

  const reviewSubmitHandler = async () => {
    dispatch(startLoading());
    console.log(rate);
    console.log(input);
    const formData = new FormData();
    formData.append("description", input);
    formData.append("rating", rate);
    formData.append("userId", user?.id);
    const res = await createReview(formData);
    console.log(res);
    dispatch(endLoading());
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4">Review and rating</h2>
      <TextArea
        placeholder="write your review"
        onChange={(e) => setInput(e.target.value)}
        autoSize={{ minRows: 5, maxRows: 10 }}
      />
      <div className="flex justify-end mt-10 gap-5">
        <h2>Rating</h2>
        <Rate value={rate} onChange={setRate} />
        <Button onClick={() => reviewSubmitHandler()} disabled={loading}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ReviewForm;
