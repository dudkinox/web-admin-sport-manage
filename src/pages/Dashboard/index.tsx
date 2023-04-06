import { useEffect, useState } from "react";
import { PathEnum } from "../../enum/path.enum";
import MenuBar from "../../components/menu";
import HeaderPage from "../../components/headerPage";

export default function ResponsiveDrawer() {
  const [topic, setTopic] = useState("กำลังโหลด...");

  useEffect(() => {
    const path = window.location.pathname;
    setTopic(PathEnum.filter((item) => item.path === path)[0].topic);
  }, [topic]);

  return (
    <div id="wrapper">
      <MenuBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderPage />
          <div className="container-fluid">
            {/* summernote */}
            <div className="card card-outline card-info">
              <div className="card-header">
                <h3 className="card-title">{topic}</h3>
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
                Visit <a href="">Summernote</a> documentation for more examples
                and information about the plugin.
              </div>
            </div>
            {/* summernote */}
          </div>
        </div>
      </div>
    </div>
  );
}
