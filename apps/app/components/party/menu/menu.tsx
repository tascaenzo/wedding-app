import { Accordion } from '../../commons';
import { AccordionContainer, Container, P } from './menu.styled';

export const Menu = () => {
  return (
    <Container>
      <br />
      <Accordion title="Antipasto">
        <AccordionContainer>
          <P>L’Isola dell’Impepata di Cozze</P>
          <P>L’Isola dei Quadrucci di Pesce</P>
          <P>L’Angolo Sfizioso</P>
          <P>L’ Isola dei Gratinati di mare</P>
          <P>L’ Angolo delle Fritturine di Paranza</P>
          <P>L’ Isola del Polpo con Pinzimonio</P>
          <P>ll Buffet dei Formaggi e dei Salumi</P>
          <P>ll Buffet dei Fritti</P>
          <P>L’Isola del Cous Cous</P>
          <P>L’Isola del Fornaio </P>
          <P>L’Isola delle Conserve</P>
          <P>L’Isola dei Finger Food</P>
          <P>L’Isola Vegetariana</P>
          <P>L’Isola del Pizzicagnolo</P>
          <P>L’Isola del Rustico</P>
          <P>L’Isola dei Marinati</P>
          <P>L’Isola delle Ostriche e dei Fasolari</P>
          <P>L’Isola dei Crudi</P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Cena">
        <AccordionContainer>
          <strong style={{ paddingBottom: '5px' }}>Primi Piatti: </strong>
          <P>
            Le Gemme di Riso Vialone Nano con Polpa di Aragosta, Scorzette di
            Limone Verdello Mantecato allo Champagne
          </P>
          <br />
          <P>
            La Doppia Sfoglia al Nero di Seppia Farciti di Ricotta e
            Finocchietto Selvatico Salsa alla Cernia Su Crema di Piselli e
            Scaglie di Mandorle Tostate
          </P>
          <br />
          <strong style={{ paddingBottom: '5px' }}>Secondi Piatti: </strong>
          <P>Il Trancio di Pescato del Giorno con Souté di Cozze</P>
          <P>Il Rotolino di Pesce Spada alla Palermitana</P>
          <P>Gli Asparagi Bardat</P>
          <br />
          <P>Il Sorbetto agli Agrumi di Sicilia al Buffet</P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Buffet Dolci">
        <AccordionContainer>
          <P>Il Gran Buffet di Dolci della tradizione</P>
          <P>La Tagliata di Frutta Fresca di stagione</P>
          <P>La Fontana di Cioccolato Nero </P>
          <P>L’Isola Delle Crepes e dei Waffle</P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="La Cantina">
        <AccordionContainer>
          <P>Vino Oniris Bianco Duca di Salaparuta</P>
          <P>Acqua Effervescente</P>
          <P>Coca Cola in caraffa</P>
          <P>Spumante Brut e Dolce</P>
          <P>Caffè e Digestivi</P>
        </AccordionContainer>
      </Accordion>
    </Container>
  );
};
