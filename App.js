// This sample assumes that the application is using a CKEditor 5 editor built from source.

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