import React from 'react'
import {useState} from 'react'
import './Upload.css'
const Upload = () => {
    const formattypes = ['csv','json'];
    const encoding = ['UTF-8','ASCII'];
    const delimitertypes = ['comma','pipe','semicolon','space'];
    const [format, setformat] = useState(formattypes[0]);
    const [Encoding, setEncoding] = useState(encoding[0]);
    const [delimiter, setdelimiter] = useState(delimitertypes[0]);
  return (
    <div className="page">
        <div className="heading">
            Import Products
        </div>
        <div className="section1">
            <div className="upload">
            <div>
            <b>
            Step1: 
            </b>
                <label htmlFor="file" style={{marginLeft:'10px'}}>Select File</label>
            </div>
                <input type="file" name="file" id="file" />
                Supported file type: .JSON, .CSV
            </div>
            <div className="format">
                <div>
                <b>
                Step2:
                </b>
                 Specify Format
                </div>
                <div>

                <label htmlFor="formatOption">File Type</label>
                 <select id="formatOption" value={format} onChange={(event)=>{
                    setformat(event.target.value)
                 }}>
                 {
                    formattypes.map((f)=><option value={f}>{f}</option>)
                 }
                </select>
                </div>
                <div>

                <label htmlFor="CharacterEncoding">Character Encoding</label>
                 <select id="CharacterEncoding" value={Encoding} onChange={(event)=>{
                    setEncoding(event.target.value)
                 }}>
                 {
                    encoding.map((f)=><option value={f}>{f}</option>)
                 }
                </select>
                </div>
                <div>

                <label htmlFor="delimiter">Delimeter</label>
                 <select id="delimiter" value={delimiter} onChange={(event)=>{
                    setdelimiter(event.target.value)
                 }}>
                 {
                    delimitertypes.map((f)=><option value={f}>{f}</option>)
                 }
                </select>
                </div>
            </div>
        </div>
        <div className="section2">

        </div>
        <div className="options">
        <div className="button">Next</div>
        <div className="cancel">Cancel</div>
        </div>
    </div>
  )
}

export default Upload
