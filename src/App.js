import React from 'react'
import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import FileList from './FileList';
import FileDownload from './FileDownload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AWS S3 File Uploader and Downloader</h1>
            <FileUpload />
            <FileList />
            <FileDownload fileName="example.txt" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
