import { data } from "../data";

import { Flex2, Flex3 } from "./styles/Flex.styled";
import StyledHeader, { Image } from "./styles/Header.styled";
const Courses = () => {
  console.log(data);
  return (
    <StyledHeader>
      <Flex2>
        {" "}
        {data.map((item) => {
          const { id, body, image, title } = item;
          return (
            <Flex3 key={id}>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <Image src={image} alt={id} />
            </Flex3>
          );
        })}
      </Flex2>
    </StyledHeader>
  );
};

export default Courses;
