import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Form = () => {
  const postsData = JSON.parse(localStorage.getItem("posts"));

  const [posts, setPosts] = useState(postsData || []);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [buttonText, setButtonText] = useState("Submit");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const AddPost = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const removePost = (title) => {
    setPosts(posts.filter((item) => item.title !== title));
  };

  const addPost = (title) => {
    setPosts(posts.find((add) => add.description !== title));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEdited([
      ...editId,
      {
        title,
        description,
      },
    ]);
    //setButtonText("Update");
    setTitle("");
    setDescription("");
  };

  useEffect(() => {});
  console.log(editId);
  return (
    <div className="wrapper">
      <div className="note">
        <div className="row">
          <div className="local_storage">
            <h1>Image Holder</h1>
            <form onSubmit={AddPost}>
              <div className="form-container">
                <br></br>
                <label for="myfile">Select a file:</label>
                <br></br>
                <br></br>
                <input
                  type="file"
                  id="myFile"
                  name="myFile"
                  onChange={(e) => {
                    if (!e.target.files.length) return;
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = () => {
                      setImage(reader.result);
                    };

                    reader.readAsDataURL(file);
                  }}
                ></input>
                <br></br>
                <br></br>
                <label for="title">Title</label>
                <br></br>
                <input
                  type="text"
                  value={title}
                  onChange={handleTitle}
                  required
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="description" className="label">
                  Description
                </label>
                <br></br>
                <textarea
                  type="text"
                  value={description}
                  rows="10"
                  cols="70"
                  onChange={handleDescription}
                  required
                />
              </div>
              <br></br>
              {editId === null ? (
                <button type={addPost}>{buttonText}</button>
              ) : (
                <button type={handleClick}>Update</button>
              )}
            </form>

            <br></br>
            <div className="block">
              {posts.map((item, index) => (
                <div className="post" key={item.title}>
                  <img src={image} width="50px" height="50px" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <br></br>
                  <span className="edit">
                    <button
                      onClick={() => {
                        setTitle(item.title);
                        setDescription(item.description);
                        setEditId(index);
                      }}
                    >
                      Edit
                    </button>
                  </span>
                  <span className="delete">
                    <button onClick={() => removePost(item.title)}>
                      Delete
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
