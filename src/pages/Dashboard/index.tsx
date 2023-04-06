import { useEffect, useState } from "react";
import { PathEnum } from "../../enum/path.enum";
import MenuBar from "../../components/menu";
import HeaderPage from "../../components/headerPage";
import NewsServices from "../../services/newsServices";
import initEditor from "../../common/EditorCommon";
import GetNewsResponse from "../../models/Response/GetNewsResponse";

export default function ResponsiveDrawer() {
  const [topic, setTopic] = useState("กำลังโหลด...");
  const [newsList, setNewsList] = useState<GetNewsResponse[]>([]);

  useEffect(() => {
    setTimeout(() => initEditor(), 100);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    setTopic(PathEnum.filter((item) => item.path === path)[0].topic);
  }, [topic]);

  useEffect(() => {
    NewsServices.getNewsService().then((res) => {
      setNewsList(res.data);
    });
  }, []);

  return (
    <div id="wrapper">
      <MenuBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderPage />
          <div className="container-fluid">
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
              <div className="card-footer text-center">
                <button type="button" className="btn btn-primary col-3">
                  บันทึก
                </button>
              </div>
            </div>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  ข้อมูลข่าว Popup
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>order</th>
                        <th>date</th>
                        <th>topic</th>
                        <th>detail</th>
                        <th>manage</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {newsList.map((item, index) => (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.topic}</td>
                            <td>{item.detail}</td>
                            <td>
                              <div className="row text-center">
                                <div className="col-6">
                                  <button className="btn btn-warning">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="btn btn-danger">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
