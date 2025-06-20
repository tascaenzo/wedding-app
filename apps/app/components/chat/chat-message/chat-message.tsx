import { PRIMARY_LIGHT } from '@wedding/app/constants';
import { ChatMessageProps } from './chat-message.interface';
import { Container, Msg, MsgContainer, Text } from './chat-message.styled';
import Avatar from 'react-nice-avatar';
import { avatars } from '../../commons';

// Funzione per verificare se un URL è un file audio
const isAudioUrl = (url: string): boolean => {
  const audioExtensions = [
    '.mp3',
    '.wav',
    '.ogg',
    '.m4a',
    '.aac',
    '.flac',
    '.wma',
  ];
  const lowerUrl = url.toLowerCase();
  return (
    audioExtensions.some((ext) => lowerUrl.includes(ext)) ||
    lowerUrl.includes('audio') ||
    lowerUrl.includes('soundcloud') ||
    lowerUrl.includes('spotify')
  );
};

// Funzione per renderizzare il testo con link cliccabili e audio player
const renderMessageWithLinks = (message: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = message.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      // Se è un file audio, mostra il player
      if (isAudioUrl(part)) {
        return (
          <div key={index} style={{ margin: '8px 0', width: '100%' }}>
            <audio
              controls
              style={{
                width: '100%',
                maxWidth: '300px',
                height: '40px',
              }}
              preload="metadata"
            >
              <source src={part} />
              Il tuo browser non supporta l'audio.
              <a
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'inherit',
                  textDecoration: 'underline',
                  wordBreak: 'break-all',
                }}
              >
                Ascolta audio
              </a>
            </audio>
            <div style={{ fontSize: '10px', color: '#888', marginTop: '2px' }}>
              🎵 File audio
            </div>
          </div>
        );
      }

      // Altrimenti mostra il link normale
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'underline',
            wordBreak: 'break-all',
          }}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

// Funzione per formattare la data con giorno e orario
const formatDateTime = (time: string | Date) => {
  try {
    const date = typeof time === 'string' ? new Date(time) : time;

    // Verifica se la data è valida
    if (isNaN(date.getTime())) {
      return time.toString(); // Ritorna il valore originale se non è una data valida
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short', // Lun, Mar, Mer, etc.
      //day: '2-digit', // 01, 02, etc.
      hour: '2-digit', // 09, 10, etc.
      minute: '2-digit', // 30, 45, etc.
      hour12: false, // Formato 24 ore
    };

    return date.toLocaleString('it-IT', options);
  } catch (error) {
    return time.toString(); // Fallback in caso di errore
  }
};

export const ChatMessage = ({
  author,
  rightAlign,
  message,
  time,
}: ChatMessageProps) => {
  const formattedTime = formatDateTime(time);
  const messageWithLinks = renderMessageWithLinks(message);

  if (rightAlign) {
    return (
      <Container
        style={{ justifyContent: 'right', flexDirection: 'row-reverse' }}
      >
        <Avatar
          style={{ width: '3rem', height: '3rem', float: 'left' }}
          {...avatars.get(author.avatar)}
        />
        <MsgContainer>
          <Text style={{ textAlign: 'right' }}>
            {`${author.firstName} ${author.lastName} `}
          </Text>
          <Msg
            style={{
              borderRadius: '12px 0 12px 12px',
              backgroundColor: PRIMARY_LIGHT,
            }}
          >
            <span style={{ color: '#464646' }}>{messageWithLinks}</span>
            <Text
              style={{
                textAlign: 'right',
                padding: '0px',
              }}
            >
              {formattedTime}
            </Text>
          </Msg>
        </MsgContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Avatar
        style={{ width: '3rem', height: '3rem', float: 'left' }}
        {...avatars.get(author.avatar)}
      />
      <MsgContainer>
        <Text> {`${author.firstName} ${author.lastName} `}</Text>
        <Msg>
          <span style={{ color: '#464646' }}>{messageWithLinks}</span>
          <Text style={{ textAlign: 'right', padding: '0px' }}>
            {formattedTime}
          </Text>
        </Msg>
      </MsgContainer>
    </Container>
  );
};
