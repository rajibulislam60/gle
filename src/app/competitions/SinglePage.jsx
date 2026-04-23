import React from "react";
import Container from "./../../container/Container";
import { useParams } from "next/navigation";

export default function SinglePage() {
  const { id } = useParams();
  return (
    <div>
      <Container>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Title</h2>
            <h3>Registration Date line</h3>
            <p>Description</p>
            <button>Resgistration</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
