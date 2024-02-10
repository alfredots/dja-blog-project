import * as S from './styles';

export const BackButton = () => {
  return (
    <S.Link href="/">
      <S.IconContainer>
        <S.Icon size={20} />
      </S.IconContainer>

      <S.Text>Voltar à listagem</S.Text>
    </S.Link>
  );
};
