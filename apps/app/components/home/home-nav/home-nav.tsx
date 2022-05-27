import {
  BottomBar,
  Circle,
  Content,
  TopBar,
  BtnContainer,
  Text,
  TextBold,
  TextContainer,
} from './home-nav.styled';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';
import { CHAT, NOTIFICATIONS, PRIMARY, WHITE } from '@wedding/app/constants';
import { useRouter } from 'next/router';
import { HomeNavProps } from './home-nav.interface';

export const HomeNav = ({ messageCount, notificationCount }: HomeNavProps) => {
  const router = useRouter();

  return (
    <>
      <TopBar />
      <Content>
        <BtnContainer>
          <Circle onClick={() => router.push(NOTIFICATIONS)}>
            <MdNotificationsActive size={28} color={WHITE} />
          </Circle>
          <TextContainer onClick={() => router.push(NOTIFICATIONS)}>
            <TextBold>{notificationCount}</TextBold>
            <Text>Notifiche</Text>
          </TextContainer>
        </BtnContainer>
        <BtnContainer>
          <Circle onClick={() => router.push(CHAT)}>
            <BsFillChatDotsFill size={28} color={WHITE} />
          </Circle>
          <TextContainer onClick={() => router.push(CHAT)}>
            <TextBold>{messageCount}</TextBold>
            <Text>Chat</Text>
          </TextContainer>
        </BtnContainer>
      </Content>
      <div style={{ backgroundColor: PRIMARY }}>
        <BottomBar />
      </div>
    </>
  );
};
