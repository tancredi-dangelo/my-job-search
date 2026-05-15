import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleFavoriteJob } from "../redux/actions/index.js";

const Job = ({ data }) => {
  const isFavorite = useSelector((state) =>
    state.favoriteJobs.some((job) => job._id === data._id),
  );
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-4 glass"
      style={{
        border: "none",
        borderRadius: "12px",
      }}
    >
      <Col xs={2} className="d-flex align-items-center justify-content-start">
        <Link
          className="nav-link text-primary fw-semibold"
          to={`/${data.company_name}`}
        >
          {data.company_name}
        </Link>
      </Col>

      <Col xs={7} className="d-flex align-items-center justify-content-start">
        <a
          className="nav-link text-primary d-flex align-items-center gap-2"
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          {data.title}
          <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </Col>
      <Col xs={3} className="d-flex align-items-center justify-content-end">
        <Button
          onClick={() => {
            dispatch(handleFavoriteJob(isFavorite, data));
          }}
          className={isFavorite ? "btn btn-danger" : "btn btn-success"}
        >
          {isFavorite ? "Remove" : "Add to Favorites"}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
