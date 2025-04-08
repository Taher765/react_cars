import React, { useEffect, useState } from "react";
import noImage from "../../images/noImage.webp";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);
  const [msgError, setMsgError] = useState({});

  const { id } = useParams();

  const getCarWithId = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://tset-19uo.onrender.com/cubes/${id}`
      );
      setCar(data);
      setLoading(false);
    } catch (err) {
      setMsgError({ error: err.message });
      setLoading(false);
    }
  };

  useEffect(() => {
    getCarWithId();
  }, []);

  return (
    <section className="details py-2">
      <Container className="container">
        <h3 className="my-3 text-center">تفاصيل التكعيب</h3>
        <div className="card">
          <img src={noImage} className="card-img-top" alt="noImage" />
          <div className="card-body">
            <Row>
              <Col md={6}>
                <h3>بيانات السيارة</h3>
                <ul>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    رقم السيارة : 2222
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    حروف السيارة : س س س
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">طول الوش : 2</li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    {" "}
                    عرض الوش : 2
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    ارتفاع الوش : 1.7
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    كوريك : لا يوجد
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    تكعيب الوش : نعم
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h3>بيانات المقطورة</h3>
                <ul>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    رقم المقطورة : 2222
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    حروف المقطورة : س س س
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">طول الوش : 2</li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    {" "}
                    عرض الوش : 2
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    ارتفاع الوش : 1.7
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    كوريك : لا يوجد
                  </li>
                  <li className="mt-2 border-bottom py-1 pe-2">
                    تكعيب الوش : نعم
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="more-details">
              <h3 className="my-3">مزيد من التفاصيل</h3>
              <div className="p-2 border rounded my-2">
                التكعيب الاجمالى : 65 متر
              </div>
              <div className="p-2 border rounded my-2">
                القائم بالتكعيب : طاهر ابوزيد
              </div>
              <div className="p-2 border rounded my-2">الوظيفة : مشرف</div>
              <div className="p-2 border rounded my-2">
                تاريخ التكعيب : الجمعة ٢٩ نوفمبر ٢٠٢٤ ٢٠:٢٢
              </div>
              <div className="p-2 border rounded my-2">
                تاريخ اخر تعديل : لم يتم التعديل عليها
              </div>
              <div className="p-2 border rounded my-2">
                ملحوظــــه : لايوجــــد
              </div>
            </div>
          </div>
          <Link to={"/"} className="mb-3 text-center ">
            <MdOutlineSubdirectoryArrowLeft
              size={"30"}
              className="hand border border-primary rounded text-primary"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Details;
