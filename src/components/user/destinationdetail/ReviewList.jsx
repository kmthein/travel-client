import { Avatar, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { getAllReview } from "../../../api/review";
import moment from "moment";

const ReviewList = ({ allReviews }) => {
  console.log(allReviews);
  return (
    <>
      {allReviews &&
        allReviews.length > 0 &&
        allReviews.map((review, i) => (
          <div className="border rounded-lg p-10 mb-10" key={i}>
            <div className="flex justify-between items-start ">
              <div className="flex gap-3">
                <Avatar
                  size={50}
                  src={review?.userImg[0]}
                  icon={<UserOutlined />}
                />
                <div>
                  <h2>{review?.username}</h2>
                  <p>
                    {moment(review?.createdAt).format("MMMM Do YYYY, h:mm a")}
                  </p>
                </div>
              </div>
              <div>
                <Rate disabled value={review?.rating} />
              </div>
            </div>
            <p className="mt-5">{review?.description}</p>
          </div>
        ))}
    </>
  );
};

export default ReviewList;
