import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { ImBin, ImNotification, ImPencil } from "react-icons/im";

import "./style.css";
const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
  };

  return (
    <div className="home">
      <h1 className="p-3 text-center bg-light">
        تكعيبات السيارات (الكتيبه 70 طرق)
      </h1>
      <Container>
        <Link to={"/addCar"} className="btn btn-dark my-2">
          <RiAddCircleLine size={"20"} className="ms-1" />
          اضافة تكعيب
        </Link>
        <form onSubmit={handelSubmit}>
          <div className="form-group d-flex gap-1">
            <input
              className="form-control"
              type="text"
              placeholder="بحث ....."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <button className="btn btn-primary">بحث</button>
          </div>
        </form>
        <div className="cars-list">
          <h3 className="text-center my-4">جدول التكعيبات</h3>
          <div className="table-responsive">
            <table className="table text-center table-hover align-middle table-bordered table-striped">
              <thead className="align-middle">
                <tr>
                  <th>#</th>
                  <th>رقم السيارة</th>
                  <th>حروف السيارة</th>
                  <th>رقم المقطورة</th>
                  <th>حروف المقطورة</th>
                  <th>تكعيب السيارة</th>
                  <th>القائم بالتكعيب</th>
                  <th>تفاصيل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>2</th>
                  <td>1111</td>
                  <td>ن م ح</td>
                  <td>1256</td>
                  <td>ت ن م</td>
                  <td>49.60</td>
                  <td>صلاح</td>
                  <td className="d-flex justify-content-center align-items-center gap-2">
                    <NavLink
                      to={"/details"}
                      className="btn btn-sm btn-warning text-light"
                    >
                      <ImNotification size={"15"} />
                    </NavLink>
                    <button className="btn btn-sm btn-danger text-light">
                      <ImBin size={"15"} />
                    </button>
                    <button className="btn btn-sm btn-success text-light">
                      <ImPencil size={"15"} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>1111</td>
                  <td>ن م ح</td>
                  <td>1256</td>
                  <td>ت ن م</td>
                  <td>49.60</td>
                  <td>صلاح</td>
                  <td className="d-flex justify-content-center align-items-center gap-2">
                    <NavLink
                      to={"/details"}
                      className="btn btn-sm btn-warning text-light"
                    >
                      <ImNotification size={"15"} />
                    </NavLink>
                    <button className="btn btn-sm btn-danger text-light">
                      <ImBin size={"15"} />
                    </button>
                    <button className="btn btn-sm btn-success text-light">
                      <ImPencil size={"15"} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>1111</td>
                  <td>ن م ح</td>
                  <td>1256</td>
                  <td>ت ن م</td>
                  <td>49.60</td>
                  <td>صلاح</td>
                  <td className="d-flex justify-content-center align-items-center gap-2">
                    <NavLink
                      to={"/details"}
                      className="btn btn-sm btn-warning text-light"
                    >
                      <ImNotification size={"15"} />
                    </NavLink>
                    <button className="btn btn-sm btn-danger text-light">
                      <ImBin size={"15"} />
                    </button>
                    <button className="btn btn-sm btn-success text-light">
                      <ImPencil size={"15"} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
