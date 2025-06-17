import { Accordion } from '../../commons';
import { AccordionContainer, Container, P } from './menu.styled';

export const Menu = () => {
  return (
    <Container>
      <br />
      <Accordion title="Antipasti">
        <AccordionContainer>
          <P>Gran Parata di Così Licchi</P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Primi">
        <AccordionContainer>
          <P>
            Riso di Donna Franca Florio: Chicco lungo trattato a vapore agli
            agrumi di Sicilia, con aragosta, gambero rosso di Mazara, crema di
            ostriche e riduzione di verdello dell Jaci
          </P>
          <br />
          <P>
            La Panzuta delle Aci: Medaglione rosa di pasta fresca, ripieno di
            capesante, con cubetti di ombrina, su vellutata di rucola e crema di
            mandorla di Avola integrale
          </P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Secondi Piatti">
        <AccordionContainer>
          <P>
            Il Filettino di Triglia Imperiale: Con pane di tumminia, uvetta
            candita pinoli dell'Etna con polpettina di biete, sfoglia di patata
            al tartufo, crema bianca di crostacei ed olio verde
          </P>
          <br />
          <P>
            Sapori Mediterranei 2: Cernia al profumo di Marsala DOC Fine I.P e
            limone di Sicilia IGP su crema di patate di carruba ai fiori di
            sambuco, accompagnata da salvia croccante
          </P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Contorno">
        <AccordionContainer>
          <P>L'Insalata di finocchio croccante con arance, zammu' e capperi</P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Menu' Bimbi">
        <AccordionContainer>
          <P>Lasagnetta pomodoro e formaggio</P>
          <P>Cotoletta di pollo</P>
          <P>Patatine fritte</P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Dolci">
        <AccordionContainer>
          <P>Gran Buffet di Così Duci + Confettata</P>
          <br />
          <strong style={{ paddingBottom: '5px' }}>Torta Nuziale: </strong>
          <P>
            Mandorla con crema chantilly alla mandorla con croccante di mandorla
          </P>
        </AccordionContainer>
      </Accordion>
      <br />
      <Accordion title="Vino">
        <AccordionContainer>
          <P>Leone - Tasca d'Almerita</P>
        </AccordionContainer>
      </Accordion>
      <br />
    </Container>
  );
};
