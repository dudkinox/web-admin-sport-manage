import { useEffect, useRef, useState } from "react";
import { PathEnum } from "../../enum/path.enum";
import MenuBar from "../../components/menu";
import HeaderPage from "../../components/headerPage";
import NewsServices from "../../services/newsServices";
import initEditor from "../../common/EditorCommon";
import GetNewsResponse from "../../models/Response/GetNewsResponse";

export default function ResponsiveDrawer() {
  const [topic, setTopic] = useState<string>("กำลังโหลด...");
  const [topicInput, setTopicInput] = useState<string>("");
  const [newsList, setNewsList] = useState<GetNewsResponse[]>([]);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    const detail = document.querySelector("#summerNote");
    NewsServices.addNewsService("popup", {
      topic: topicInput,
      detail: (detail as any).value,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <form onSubmit={handlerSubmit}>
                  <div className="form-group">
                    <label>topic</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter ..."
                      onChange={(e) => setTopicInput(e.target.value)}
                    />
                  </div>
                  <textarea id="summerNote" />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary col-3 mr-3 mb-3 align-self-center "
                    >
                      บันทึก
                    </button>
                  </div>
                </form>
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
                            <td>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.detail,
                                }}
                              ></div>
                            </td>
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
