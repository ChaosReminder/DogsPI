import React from "react";
import styled from "styled-components";

export default function Card({ name, image, temperament, weight }) {
  return (
    <CARD>
      <h2>{name}</h2>
      <div>
        <PHOTO src={image} alt="Not a dog" />
      </div>
      <div>
        <p>Standard weight: {weight} Kgs</p>
        <p>Usual temperaments: {temperament}</p>
      </div>
    </CARD>
  );
}
export const CARD = styled.div`
  font-size: 1.2rem;
  background-color: rgba(28, 27, 27, 0.74);
  box-shadow: 0px 1px 18px 5px rgba(121, 255, 244, 0.76),
    0px 1px 5px 4px rgba(121, 255, 185, 0.85) inset;
  width: 200px;
  height: 400px;
  margin: 40%;
  text-align: center;
  object-fit: cover;
  word-wrap: break-word;
`;
export const PHOTO = styled.img`
  border-radius: 3%;
  max-width: 70%;
  height: auto;
  object-fit: fill;
  &:hover {
    animation: myAnim 1s ease 0s 1 normal forwards,
      picho 2600ms cubic-bezier(0.33, 1, 0.68, 1) 78ms 1 normal forwards;
    @keyframes myAnim {
      0% {
        transform: scale(1);
      }

      100% {
        transform: scale(1.3);
      }
    }
    @keyframes picho {
      0%,
      100% {
        transform: translateX(0);
      }

      10%,
      30%,
      50%,
      70% {
        transform: translateX(-10px);
      }

      20%,
      40%,
      60% {
        transform: translateX(10px);
      }

      80% {
        transform: translateX(8px);
      }

      90% {
        transform: translateX(-8px);
      }
    }
  }
`;
export const HIDD = styled.div`
diplay: hidden;
&hover(
  display:
)
`;
