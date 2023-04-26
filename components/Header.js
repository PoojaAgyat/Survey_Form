import React, { useState, useContext, useEffect } from "react";
import "./Styles/header.css"
import "./Styles/theme.css"
import image from "./images/profile.svg"
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeContext } from "../App";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
const Header = () => {
    const { themes, setThemes, first, setFirst } = useContext(ThemeContext)
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [url, setUrl] = useState("")
    const [profile, setProfile] = useState("")
    const navigate = useNavigate()
    const fetchtheme = async () => {
        await fetch("https://survey-backend-gg92.onrender.com/api/themes")
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (!token) {
            navigate("/")
        }
        setThemes("Default")
    }, [])
    useEffect(() => {
        fetchtheme()
    }, [first])
    const handleTheme = async () => {
        if (!open) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
        if (first < data.length - 1) {
            setFirst(first + 1)
        }
        else {
            setFirst(0)
        }
    }
    useEffect(() => {
        console.log(url)
        if (url) {
            const formData = new FormData();
            formData.append("image", url)
            fetch("https://survey-backend-gg92.onrender.com/profile", {
                method: "POST",
                body: formData
            })
            fetch("https://survey-backend-gg92.onrender.com/profile")
                .then(res => res.json())
                .then(data => { setProfile(data.image) })
            setUrl("")
        }
    }, [url])
    useEffect(() => {
        fetch("https://survey-backend-gg92.onrender.com/profile")
            .then(res => res.json())
            .then(data => { setProfile(data.image[0].image) })
        console.log(profile)
    }, [])
    const uploadProfile = (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "yngaacgy");
        formData.append("cloud_name", "dbktreuss");
        console.log(image)
        fetch("https://api.cloudinary.com/v1_1/dbktreuss/image/upload", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url);
            })
    }
    return (
        <div className="container" >
            <div className={`header-container ${themes ? `header-container-${themes}` : null}`}>
                <h3 className={`logo ${themes ? `logo-${themes}` : null}`}>LOGO</h3>
                <div className="profile" >
                    <div className="theme-div dropdown-wrapper " >
                        <button className={`theme-btn trigger-button ${themes ? `theme-btn-${themes}` : null} dropdown-toggle `}
                            onClick={handleTheme} >Change Theme <ArrowDropDownIcon /></button>
                        <div  >
                            <ul className={` ${open ? 'open' : null}`}>
                                {<div >
                                    <div className='theme-container'>
                                        <header className='list-header border-bot'>
                                            <h3>Theme Settings</h3>
                                            <div id='close-icon'></div>
                                        </header>
                                        <form className='theme-form'>
                                            <div>
                                                <label>Theme</label>
                                                <select>
                                                    <option >Pink</option>
                                                    <option>Dark</option>
                                                </select>
                                            </div>
                                            <div className='grid-form'>
                                                <div>
                                                    <div>
                                                        <label>Theme name</label>
                                                        <input id='themename' type='text' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label>All Questions Mandatory</label>
                                                        <select>
                                                            <option defaultChecked disabled>Select</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label>Enable Skip</label>
                                                        <select>
                                                            <option defaultChecked disabled>Select</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <label>Select Font</label>
                                                    <select >
                                                        <option defaultChecked disabled>Select</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label>Color</label>
                                                    <input id='color' type='color' />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="util theme-btn">
                                            <div id="cancel-btn">
                                                <button onClick={handleTheme} >Cancel</button>
                                            </div>
                                            <div id="next-btn">
                                                <button>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </ul>
                        </div>
                    </div>
                    <input type="file" accept="image/*" name="upload profile" className="profile-input"
                        onChange={(e) => uploadProfile(e.target.files[0])} />
                    <img src={profile ? profile : image} alt="profile" className="profile-pic" />
                    <div className="logout-div" onClick={() => {
                        sessionStorage.removeItem('token')
                        navigate("/")
                    }}  >
                        <LogoutIcon />
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;