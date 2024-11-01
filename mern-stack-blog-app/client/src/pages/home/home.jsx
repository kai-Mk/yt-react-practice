import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import Styles from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { blogList, setBlogList, pending, setPending } =
        useContext(GlobalContext);
    const navigate = useNavigate();

    const fetchListOfBlogs = async () => {
        setPending(true);
        const response = await axios.get("http://localhost:5000/api/blog");
        const result = response.data;

        if (result && result.blogList && result.blogList.length) {
            setBlogList(result.blogList);
            setPending(false);
        } else {
            setPending(false);
            setBlogList([]);
        }
    };
    useEffect(() => {
        fetchListOfBlogs();
    }, []);

    const handleDeleteBlog = async (getCurrentId) => {
        const response = await axios.delete(
            `http://localhost:5000/api/blog/delete/${getCurrentId}`
        );

        const result = await response.data;

        if (result?.message) {
            fetchListOfBlogs();
            // navigate(0);
        }
    };

    const handleEdit = (getCurrentBlogItem) => {
        navigate("/add_Blog", { state: { getCurrentBlogItem } });
    };

    return (
        <div className={Styles.wrapper}>
            <h1>Blog List</h1>
            {pending ? (
                <h1>Loading Blogs ! Please wait</h1>
            ) : (
                <div className={Styles.blogList}>
                    {blogList && blogList.length ? (
                        blogList.map((blogItem) => (
                            <div key={blogItem._id}>
                                <p>{blogItem.title}</p>
                                <p>{blogItem.description}</p>
                                <FaEdit
                                    onClick={() => handleEdit(blogItem)}
                                    size={30}
                                />
                                <FaTrash
                                    onClick={() =>
                                        handleDeleteBlog(blogItem._id)
                                    }
                                    size={30}
                                />
                            </div>
                        ))
                    ) : (
                        <h3>No Blogs Added</h3>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
