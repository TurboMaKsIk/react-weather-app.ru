import React from 'react'

const DataModuls = ({ children, dataText, propImg }) => {
  return (
    <>
        <div className="dataModules-block">
            <div className="dataModules-block-title">
                <img src={propImg} alt="" />
                <h2>{children}</h2>
            </div>
            <span></span>
            <div className="dataModules-block-data">
                {dataText}
            </div>
        </div>
    </>
  )
}

export default DataModuls;