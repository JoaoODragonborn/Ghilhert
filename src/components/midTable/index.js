import { Mount, MainCard, FlexDiv, DoubleCards}from './styled'

export default function MidTable(){

    return(
        <FlexDiv>
            <DoubleCards>
                <Mount/>
                <Mount/>
            </DoubleCards>
            <DoubleCards>
                <MainCard/>
                <MainCard/>
            </DoubleCards>
            <Mount/>
        </FlexDiv>
    );
};