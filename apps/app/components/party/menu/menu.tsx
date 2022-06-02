import { Accordion } from '../../commons';
import { Container } from './menu.styled';

export const Menu = () => {
  return (
    <Container>
      <br />
      <Accordion title="Antipasto">
        <h1>test</h1>
      </Accordion>
      <br />
      <Accordion title="Cena">
        <h1>test</h1>
      </Accordion>
      <br />
      <Accordion title="Buffe Dolci">
        <h1>test</h1>
      </Accordion>
    </Container>
  );
};
