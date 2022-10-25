import React, { useEffect, useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Image } from "react-bulma-components"
import "./ImageUploader.css"

const ImageUploader = ({ setFile }) => {
  const [filePreview, setFilePreview] = useState("")

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0])
    setFilePreview(URL.createObjectURL(acceptedFiles[0]))
  })

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  useEffect(() => () => {
    URL.revokeObjectURL(filePreview)
  }, [filePreview])

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop or Click to select a Picture</p>
      <div style={{ height: "100%" }}>
        <Image
          fallback="https://static.thenounproject.com/png/49665-200.png"
          src={filePreview}
        />
      </div>
    </div>
  )
}

export default ImageUploader