import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function List() {
  const [title, setTitle] = useState("");
  const courses = useSelector(state => state.courses.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: "ADD_COURSES", title: title });
  }

  return (
    <ul>
      {courses.map(course => (
        <li key={Math.random()}>{course}</li>
      ))}
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="button" onClick={addCourse}>
        add curso
      </button>
    </ul>
  );
}
