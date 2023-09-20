import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
    const [fileNames, setFileNames] = useState([]);

    useEffect(() => {
        axios.get('/list-files')
            .then((response) => {
                setFileNames(response.data.files);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h2>File List</h2>
            <ul>
                {fileNames.map((fileName, index) => (
                    <li key={index}>{fileName}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
