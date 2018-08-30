import React from "react";
import { Container, Row, Col } from "../Grid";
import "./article.css";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>
            Summary: {props.summary}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >
            Go to article!
          </a> <button 
          className="save-button"
          onClick={props.removeSaved}
          >
          Remove This Article
          </button>
        </Col>
      </Row>
    </Container>
  </li>
);
