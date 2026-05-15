import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { handleFavoriteCompany } from "../redux/actions/index.js";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const isFavorite = useSelector((state) =>
    state.favoriteCompanies.includes(params.company),
  );

  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex align-items-center my-5">
            <h1 className="display-4 me-5">
              Job posting for: <b>{params.company}</b>
            </h1>
            <Button
              className={isFavorite ? "btn btn-danger" : "btn btn-success"}
              style={{ height: "50%" }}
              onClick={() => {
                dispatch(handleFavoriteCompany(isFavorite, params.company));
              }}
            >
              {isFavorite
                ? "Remove Company from Favorites"
                : "Add Company to Favorites"}
            </Button>
          </div>

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center my-5">
        <Col
          xs={3}
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            variant="outline-primary bg-white border-0 text-primary shadow"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
