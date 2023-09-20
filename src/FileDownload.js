import React from 'react';
import axios from 'axios';

const FileDownload = ({ fileName }) => {
    const handleDownload = () => {
        axios.get(`/download/${fileName}`, { responseType: 'blob' })
            .then((response) => {
                // Create a download link for the file
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={handleDownload}>Download {fileName}</button>
        </div>
    );
};

export default FileDownload;
