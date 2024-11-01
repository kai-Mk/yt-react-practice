import React, { useContext, useEffect } from "react";
import styles from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AddBlog = () => {
    const { formData, setFormData, isEdit, setIsEdit } =
        useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSaveBlogToDatabase = async () => {
        const response = isEdit
            ? await axios.put(
                  `http://localhost:5000/api/blog/update/${location.state.getCurrentBlogItem._id}`,
                  {
                      title: formData.title,
                      description: formData.description,
                  }
              )
            : await axios.post("http://localhost:5000/api/blog/add", {
                  title: formData.title,
                  description: formData.description,
              });

        const result = await response.data;

        if (result) {
            setFormData({
                title: "",
                description: "",
            });
            navigate("/");
        }
    };

    useEffect(() => {
        if (location.state) {
            const { getCurrentBlogItem } = location.state;
            setIsEdit(true);
            setFormData({
                title: getCurrentBlogItem.title,
                description: getCurrentBlogItem.description,
            });
        }
    }, [location]);
    return (
        <div className={styles.wrapper}>
            <h1>{isEdit ? "Edit a blog" : "Add a Blog"}</h1>
            <div className={styles.formWrapper}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Blog Title"
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                />
                <textarea
                    name="description"
                    placeholder="Enter Blog Description"
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        })
                    }
                ></textarea>
                <button onClick={handleSaveBlogToDatabase}>
                    {isEdit ? "Edit blog" : "Add New Blog"}
                </button>
            </div>
        </div>
    );
};

export default AddBlog;
