// import React from "react";

export default function FormattedDate(props) {
    let day = props.date.getDay();
    let hours = props.date.getHours();
    if(hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    let daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return `${daysOfWeek[day]} ${hours}:${minutes}`
}