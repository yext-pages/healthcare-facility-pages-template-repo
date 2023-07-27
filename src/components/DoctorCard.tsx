import { ComplexImageType, ImageType } from "@yext/pages/components";
import HStack from "./atoms/HStack";
import VStack from "./atoms/VStack";
import HeadingText from "./atoms/HeadingText";
import BodyText from "./atoms/BodyText";
import Avatar from "./atoms/Avatar";
import Icon, { IconName } from "./atoms/Icon";
import GridContainer from "./atoms/GridContainer";
import { twMerge } from "tailwind-merge";

export interface DoctorCardProps {
  name: string;
	addressLine1?: string,
	addressLine2?: string,
	addressLine3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
  headshot: ComplexImageType | ImageType;
  containerClassname?: string;
}

const sellingPoints: { icon: IconName; name: string }[] = [
  {
    icon: "hand",
    name: "Loyal Patients",
  },
  {
    icon: "star",
    name: "Highly Recommended",
  },
];

export default function DoctorCard({
  name,
  addressLine1,
  addressLine2,
  city,
  region,
  headshot,
  postalCode,
  countryCode,
  containerClassname,
}: DoctorCardProps) {
  return (
    <VStack classname={twMerge("gap-y-3", containerClassname)}>
      <HStack>
        <HStack classname="gap-2.5">
          <Avatar image={headshot} />
          <VStack classname="py-2.5 gap-y-3">
            <VStack classname="gap-y-1">
              <HeadingText text={name} level="Heading 3" />
              <BodyText text={addressLine1} weight="Regular" color="text-green" />
              <BodyText text={addressLine2} weight="Regular" color="text-green" /> 
              <BodyText text={city + ", " + region + " " + postalCode} weight="Regular" color="text-green" />  
              <BodyText text={countryCode} weight="Regular" color="text-green" />        
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      <GridContainer
        backgroundColor="#ffffff"
        rowCount={2}
        columnCount={2}
        // columnGap="0"
        // rowGap="6"
      >
      </GridContainer>
    </VStack>
  );
}
