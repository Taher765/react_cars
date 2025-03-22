import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { ImBin, ImNotification, ImPencil } from "react-icons/im";
import "./style.css";
import axios from "axios";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [cars, setCars] = useState([]);

  // Get Cars From API
  const getCrars = async () => {
    const { data } = await axios.get("https://tset-19uo.onrender.com/cubes");
    setCars(data);
    console.log(data);
  };

  useEffect(() => {
    getCrars();
  }, []);

  // handle Search
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
            <table className="table table-sm text-center table-hover align-middle table-bordered table-striped">
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
                {cars.map((item, index) => (
                  <tr key={item.id}>
                    <th>{index + 1}</th>
                    <th>{item.car.number}</th>
                    <th>{item.car.letters}</th>
                    <th>{item.trailer.number}</th>
                    <th>{item.trailer.letters}</th>
                    <th>{item.cube}</th>
                    <th>{item.eng}</th>

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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
