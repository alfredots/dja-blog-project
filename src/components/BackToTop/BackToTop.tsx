'use client';
import * as S from './styles';
import { useBackToTop } from './useBackToTop';

export const BackToTop = () => {
  const { show } = useBackToTop();

  return (
    <>
      {show && (
        <S.Container>
          <S.Button
            title="Voltar ao topo"
            aria-label="Voltar ao topo"
            onClick={() => window.scrollTo(0, 0)}
          >
            <S.Icon />
          </S.Button>
        </S.Container>
      )}
    </>
  );
};
