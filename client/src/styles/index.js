import styled, {css} from "styled-components";

const onZoom = css`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const fontSizes = { h1: '64px' , h2: '48px'}

export const CardSmall = styled.div`
  max-width: 100px;
  ${onZoom}
`;

//headings

export const Heading1 = styled.h1`
color: ${({theme}) => theme.headBlue}; 
font-family: 'Open Sans Condensed', sans-serif; 
font-size: ${fontSizes.h1}; 
font-weight: 700; 
line-height: 64px; 
margin: 0 0 0; 
padding: 20px 30px; 
text-align: center; 
text-transform: uppercase;
text-shadow: 2px 2px 4px #000000;

`;

export const Heading2 = styled.h2`
color: ${({theme}) => theme.headBlue};
font-family: 'Open Sans Condensed', sans-serif; 
font-size: ${fontSizes.h2}; 
font-weight: 700; 
line-height: 48px; 
margin: 0 0 24px; 
padding: 0 30px; 
text-align: center; 
text-transform: uppercase; 
text-shadow: 2px 2px 4px #000000;
`



export const PersonPhoto = styled.img`
 border-radius: 50%;
`;


export const Ribbon = styled.span`
color:white;
font-weight: bold;
padding:3px 10px;
border-radius:4px;
background-color: ${(props) => props.color ? props.color : 'black'};
`

//person picture
export const Button = styled.button`
background: ${({ theme }) => theme.backgroundToggle};
border: 2px solid ${({ theme }) => theme.toggleBorder};
color: ${({ theme }) => theme.toggleText};
cursor: pointer;
font-size:0.8rem;
padding: 0.6rem;
border-radius:6px;
}
`;

export const Username = styled.span`
color: ${({ theme }) => theme.text};
`