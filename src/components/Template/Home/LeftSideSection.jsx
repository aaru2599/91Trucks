import styled from "styled-components";
import { mostPopulaTruck } from "../../../data/MostPopulaData";
import { truckDealer } from "../../../data/TruckDealer";
import PopularTrucks from "../../Molecule/PopularTrucks";
import { popularBuses } from "../../../data/PopularBuses";
import { blogData } from "../../../data/BlogData";
const truckData = mostPopulaTruck;
const truckDealerData = truckDealer;
const popularBusData = popularBuses;
const blogsData = blogData;
const LeftSideSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <Wrapper>
        <PopularTrucks popularData={truckData} />
      </Wrapper>
      <Wrapper>
        <PopularTrucks popularData={truckDealerData} />
      </Wrapper>
      <Wrapper>
        <PopularTrucks popularData={popularBusData} />
      </Wrapper>
      <Wrapper>
        <PopularTrucks popularData={blogsData} />
      </Wrapper>
    </section>
  );
};

export default LeftSideSection;

export const Wrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;
