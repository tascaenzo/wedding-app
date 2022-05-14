import {
  BottomBar,
  Circle,
  Content,
  TopBar,
  BtnContainer,
  Text,
  TextBold,
  TextContainer,
} from './home-nav.style';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';
import { PRIMARY, WHITE } from '@wedding/app/constants';

export const HomeNav = () => {
  return (
    <>
      <TopBar />
      <Content>
        <BtnContainer>
          <Circle>
            <MdNotificationsActive size={28} color={WHITE} />
          </Circle>
          <TextContainer>
            <TextBold>10</TextBold>
            <Text>Notifiche</Text>
          </TextContainer>
        </BtnContainer>
        <BtnContainer>
          <Circle>
            <BsFillChatDotsFill size={28} color={WHITE} />
          </Circle>
          <TextContainer>
            <TextBold>18</TextBold>
            <Text>Notifiche</Text>
          </TextContainer>
        </BtnContainer>
      </Content>
      <div style={{ backgroundColor: PRIMARY }}>
        <BottomBar />
      </div>
    </>
  );
};
