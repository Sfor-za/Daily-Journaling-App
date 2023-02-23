import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Beditor() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey='znbw9drmenwk35mt4i9th3zsg4a0eh1o0vy3htdt86c3ik2i'
        onInit={(evt, editor) => editorRef.current = editor}
        // initialValue="<p>So... what's on your mind today?</p>"
        init={{
          height: 500,
          placeholder: "So... what's on your mind today?",
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    //       selector: "textarea",
    // placeholder: "Ask a question or post an update...",
    // menubar: false,
    // skin: "outside",
    // toolbar_location: "bottom"
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}