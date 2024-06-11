import * as S from "./styles";

export function Loading() {
  return (
    <S.Container>
      <S.Box>
        <S.CircularProgressItem>
          <div className="leftRight">
            <S.Item id="item1_0deg" />
            <S.Item id="item2_0deg" />
          </div>
          <div className="bottomTop">
            <S.Item id="item3_0deg" />
            <S.Item id="item4_0deg" />
          </div>
        </S.CircularProgressItem>
        <S.CircularProgressItem >
          <div className="leftRight">
            <S.Item id="item1_90deg" />
            <S.Item id="item2_90deg" />
          </div>
          <div className="bottomTop">
            <S.Item id="item3_90deg" />
            <S.Item id="item4_90deg" />
          </div>
        </S.CircularProgressItem>
      </S.Box>
    </S.Container>
  );
}