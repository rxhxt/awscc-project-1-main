"use client"
import styles from './rekognition.module.css'
import React, { useEffect, useState } from "react";



function Upload() {
    const [file, setFile] = useState()

    // State to store the base64
    const [base64, setBase64] = useState()
    const onFileChange = (e) => {
        if (!e.target.files) {
            return;
        }

        setFile(e.target.files[0]);
    };
    const onClick = (e) => {
        e.currentTarget.value = "";
    };
    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            return;
        }

        // Convert the file to base64
        const base64 = await toBase64(file);

        console.log(base64, "BASSEE")

        setBase64(base64);

        // Clear the states after upload
        setFile(null);
        setBase64(null);
    };
   
    return (
        <div>
            <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="file" name="avatar" accept="image/*" style={{ color: "white", fontSize: 28, backgroundColor: "inherit", marginTop: "4%" }} onChange={onFileChange}
                    onClick={onClick} />
                <button type="submit" className={styles.uploadBtn}>Upload</button>
            </form>


        </div>
    )
}

export default Upload;