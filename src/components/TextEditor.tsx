import React from "react";

export default function TextEditor() {
  return (
    <div className="card card-outline card-info">
      <div className="card-header">
        <h3 className="card-title">Summernote</h3>
      </div>
      <div className="card-body">
        <textarea
          id="summerNote"
          defaultValue={
            "      Place <em>some</em> <u>text</u> <strong>here</strong>\n    "
          }
        />
      </div>
      <div className="card-footer">
        Visit <a href="https://github.com/summernote/summernote/">Summernote</a>{" "}
        documentation for more examples and information about the plugin.
      </div>
    </div>
  );
}
