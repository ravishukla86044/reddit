import styled from 'styled-components'


const ImageInput = ({handleFile,fileName}) => {
  return (
    <StyleImageInput>
      <div>{fileName}

      <div className="upload-btn-wrapper">
        <button className="btn">Upload</button>
        <input onChange={handleFile} type="file" name="myfile" />
      </div>

      </div>

     
    </StyleImageInput>
  )
}

const StyleImageInput = styled.div`
  width: 98%;
  margin: auto;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  border: 1px dashed #ccc;
  margin-top: 0.5rem;
  color: #0079d3;
  font-size: 110%;
  & > div {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }


.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

& .btn {
  margin-left: .5rem;
  border: 1px solid #0079D3;
  color: #0079D3;
  background-color: white;
  padding: .45rem .9rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.upload-btn-wrapper input[type=file] {
  font-size: 20px;
  position: absolute;
  left: -100px;
  top: 0;
  cursor: pointer;
  transform: rotate(180deg);
  opacity: 0;
}
`

export default ImageInput
