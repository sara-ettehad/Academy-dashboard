import React from 'react';
import { Link } from 'react-router-dom';

import { FaDiamond } from "react-icon/fa FaDiamond";

import "../styles/body.css"
import "../styles/sidebar.css"

const Home = () => {
    return (
        <div class="container">
            <div class="body__wrapper">
                <section id="sidebar">
                    <div class="">
                        <div class="sidebar__wrapper">
                            <div class="sidebar__logo">
                                <div class="logo__left"><FaDiamond/></div>
                                <div class="logo__right"><FaDiamond/></div>
                                <p>Academy</p>
                            </div>
                            <div class="sidebar__tabs">
                                <button type="button" class="btn btn-primary btn-tab" onclick="openTab(event, 'Dashboard')">
                                    <i class="fa-solid fa-house"></i>
                                    Dashboard
                                </button>
                                <button type="button" class="btn btn-primary btn-tab" onclick="openTab(event, 'Courses')">
                                    <i class="fa-solid fa-briefcase"></i>
                                    Courses
                                </button>
                                <button type="button" class="btn btn-primary btn-tab" onclick="openTab(event, 'Chats')">
                                    <i class="fa-solid fa-comment"></i>
                                    chat
                                </button>
                                <button type="button" class="btn btn-primary btn-tab" onclick="openTab(event, 'Grades')">
                                    <i class="fa-solid fa-square-poll-vertical"></i>
                                    Grades
                                </button>
                                <button type="button" class="btn btn-primary btn-tab" onclick="openTab(event, 'Schedule')">
                                    <i class="fa-solid fa-calendar"></i>
                                    Schedule
                                </button>
                                <button type="button" class="btn btn-primary btn-tab" onclick="openTab(event, 'Setting')">
                                    <i class="fa-solid fa-gear"></i>
                                    Setting
                                </button>
                            </div>
                            <div class="sidebar__button">
                                <img src="./images/Remove background (1).png"/>
                                <div class="sidebar__button--detail">
                                    <h4>
                                        Premium subscription
                                    </h4>
                                    <p>Buy premium and get access to new courses</p>
                                    <button type="button" class="btn btn-primary btn-detail">More detailed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;