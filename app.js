
import React, { Component } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
export default function App()
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        toolbar: [ 'undo', 'redo', 'bold', 'italic', 'numberedList', 'bulletedList' ]
    } )
    .catch( error => {
        console.log( error );
    } );
    import React, { Component } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
export default function App() {


    <div>
      <CKEditor
        editor={ ClassicEditor }
        onInit={ editor => {
          // You can customize the editor here
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          // You can do something with the editor data here
        } }
        onBlur={ ( event, editor ) => {
          // You can handle the blur event here
        } }
        onFocus={ ( event, editor ) => {
          // You can handle the focus event here
        } }
      />
      onInit={ editor => {
  editor.ui.getEditableElement().parentElement.insertBefore(
    editor.ui.view.toolbar.element,
    editor.ui.getEditableElement()
  );
} }
    </div>}
  
      