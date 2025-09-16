import React from 'react';
import './Documents.scss';
import { listFileNames } from './data';
import { FaArrowDown as ArrowDownIcon } from "react-icons/fa";

const Documents = () => {

  // Прямое скачивание через статику
  const handleDownloadClick = (filename) => {
    const downloadUrl = `http://localhost:5001/documents/${filename}`;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="Documents">
      <div className="Documents__wrapper">
        <div className="Documents__container">
          <div className="Documents__content">
            <h2 className="Documents__header">Документы</h2>
            <div className="Documents__body-cards">
              {
                listFileNames.map((file) => (
                  <div 
                    key={file.id} 
                    className="Documents__card-item"
                    onClick={() => handleDownloadClick(file.filename)}
                  >
                    <div className="Documents__card-header">{file.name}</div>
                    <div className="Documents__card-footer">
                      <ArrowDownIcon className='icon' />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documents;