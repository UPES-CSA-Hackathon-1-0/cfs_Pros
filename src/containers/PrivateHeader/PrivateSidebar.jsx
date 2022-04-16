import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrivateSidebar.scss";

const PrivateSidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="private-sidebar">
            <div>
                <p
                    className="sidebar-elements"
                    onClick={() => navigate("/private-workplace")}
                >
                    Your private workplace
                </p>
                <p
                    className="sidebar-elements"
                    onClick={() => navigate("/private-progress")}
                >
                    Your Progress tracker
                </p>
                <p
                    className="sidebar-elements"
                    onClick={() => navigate("/private-sketch")}
                >
                    Your whiteboard
                </p>
                <p
                    className="sidebar-elements"
                    onClick={() => navigate("/user-dashboard")}
                >
                    Back to Dashboard
                </p>
            </div>
        </div>
    );
};

export default PrivateSidebar;
