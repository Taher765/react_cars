import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chosePhoto from "../../images/addCar.jpg";
import "./style.css";
const AddCar = () => {
  return (
    <section>
      <h1 className="text-center p-2 bg-light">اضافة تكعيب جديد</h1>
      <Container>
        <div className="car-data">
          <h4>بيانات التكعيب</h4>
          <div className="border rounded p-3">
            <Row>
              <Col className="mb-2" md={3}>
                <div className="input-group d-flex">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle order-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    كعب
                  </button>
                  <ul className="dropdown-menu p-2 text-end">
                    <li>
                      <input
                        type="text"
                        className="form-control input-calc"
                        id="heightCar"
                        placeholder="الطول"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control my-1 input-calc"
                        id="widthCar"
                        placeholder="العرض"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control input-calc"
                        id="lengthCar"
                        placeholder="الارتفاع"
                      />
                    </li>
                    <li className="mt-1 d-flex align-items-center gap-1">
                      <input className="korek" type="checkbox" id="korekCar" />
                      <label htmlFor="korekCar">يوجد كوريك</label>
                    </li>
                  </ul>
                  <input
                    type="text"
                    id="carNumber"
                    placeholder=" ادخل رقم السياره"
                    className="form-control"
                  />
                </div>
              </Col>
              <Col md={3} className="mb-2">
                <div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ادخل حروف الوش"
                  />
                </div>
              </Col>
              <Col className="mb-2" md={3}>
                <div className="input-group d-flex">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle order-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    كعب
                  </button>
                  <ul className="dropdown-menu p-2 text-end">
                    <li>
                      <input
                        type="text"
                        className="form-control input-calc"
                        id="heightCar"
                        placeholder="الطول"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control my-1 input-calc"
                        id="widthCar"
                        placeholder="العرض"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control input-calc"
                        id="lengthCar"
                        placeholder="الارتفاع"
                      />
                    </li>
                    <li className="mt-1 d-flex align-items-center gap-1">
                      <input
                        className="korek"
                        type="checkbox"
                        id="korekTrailer"
                      />
                      <label htmlFor="korekTrailer">يوجد كوريك</label>
                    </li>
                  </ul>
                  <input
                    type="text"
                    id="carTrailer"
                    placeholder=" ادخل رقم المقطورة"
                    className="form-control"
                  />
                </div>
              </Col>
              <Col md={3} className="mb-2">
                <div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ادخل حروف المقطورة"
                  />
                </div>
              </Col>
            </Row>
            <div className="form-group mt-2">
              <label htmlFor="photo" className="hand">
                <img src={chosePhoto} width={"40px"} alt="" />
                <span> صوره السيارة</span>
              </label>
              <input type="file" hidden id="photo" />
            </div>
          </div>
        </div>
        <div className="eng my-4">
          <h4>بيانات القائم التكعيب</h4>
          <div className="border rounded p-3">
            <Row>
              <Col md={4}>
                <div className="form-group">
                  <label htmlFor="form-select">الوظيفة :</label>
                  <select
                    className="form-select mb-2"
                    id="form-select"
                    dir="rtl"
                  >
                    <option selected="true" hidden="true">
                      اختر الوظيفه
                    </option>
                    <option value="مهندس">مهندس</option>
                    <option value="مساح">مساح</option>
                    <option value="مكتب فني">مكتب فني</option>
                    <option value="مشرف">مشرف</option>
                  </select>
                </div>
              </Col>
              <Col md={4}>
                <div className="form-group">
                  <label htmlFor="engCube">القائم بالتكعيب :</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="القائم بالتكعيب"
                    id="engCube"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="form-group">
                  <label htmlFor="cubeCar">تكعيب السيارة :</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="تكعيب السياره"
                    id="cubeCar"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="note">
          <h4>ملحوظـــة</h4>
          <textarea
            className="form-control"
            style={{ height: "80px" }}
            placeholder="ملحوظة"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2">إضافة تكعيب جديد</button>
      </Container>
    </section>
  );
};

export default AddCar;
