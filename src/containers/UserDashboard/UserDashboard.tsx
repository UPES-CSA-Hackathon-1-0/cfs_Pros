import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import "./UserDashboard.scss";

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="user-dashboard">
      <div className="user-cards-1">
        <Cards
          imgSrc="https://cdn.pixabay.com/photo/2017/04/27/22/56/book-2266906_1280.png"
          heading="Public Workplace"
          para="This section containes features like to raise a public ticket or to raise an issue or to share something exciting with the team and to track and add events. User can also check the meetings and events of others."
          onClick={() => navigate("/public-workplace")}
        />
        <Cards
          imgSrc="https://cdn.pixabay.com/photo/2017/03/26/01/58/icon-2174737_1280.png"
          heading="Private Workplace"
          para="This section containes features such as Track your tickets, review your progress, whiteboard for ideas, personalised event tracker, and keeping your personalized notes or todos."
        />
        <Cards
          imgSrc="https://cdn.pixabay.com/photo/2016/03/12/19/34/city-1252643_1280.png"
          heading="Back to Homepage"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
