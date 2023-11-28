import { Container } from "./container";
import { Display } from "./display";
import { Quote } from "./quote";

const Main = () => {
  return (
    <Container>
      <h3>Main</h3>
      <Quote />
      <Display />
    </Container>
  );
};

export { Main };
