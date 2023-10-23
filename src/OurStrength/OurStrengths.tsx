import { Paper, Group, Box, Divider, Card, Text, Image, Grid } from "@mantine/core";
import { IconCircleChevronLeft, IconCircleChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";
import Strength1 from "../Assets/strength1.png";
import Strength2 from "../Assets/strength2.png";
import Strength3 from "../Assets/strength3.png";
import { Carousel, Embla } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

type Props = {};

const OurStrengths = (props: Props) => {
	const [embla, setEmbla] = useState<Embla | null>(null);

	return (
		<>
			<Group wrap="nowrap" gap={0} bg={"#000"} maw={1440} visibleFrom="xs">
				<Box w={1270}>
					<Divider
						size="sm"
						my={"60px"}
						mr={"17px"}
						label={
							<Text fw={600} fz={32} ml={114} style={{ color: "#F6F6F6", lineHeight: "40px" }}>
								Our Strengths
							</Text>
						}
						labelPosition="left"
					/>
				</Box>

				{
					<IconCircleChevronLeft
						width={37}
						height={37}
						stroke={1}
						color="#FFF"
						onClick={() => embla?.scrollPrev()}
					/>
				}
				{
					<IconCircleChevronRight
						width={37}
						height={37}
						stroke={1}
						color="#FFF"
						onClick={() => embla?.scrollNext()}
					/>
				}
			</Group>
			<Carousel
				h={585}
				slideSize={"33.3%"}
				slideGap={184}
				loop
				align={"start"}
				slidesToScroll={3}
				orientation="horizontal"
				bg={"#000"}
				pl={114}
				getEmblaApi={setEmbla}
				withControls={false}
				maw={1440}
				visibleFrom="xs"
			>
				<Carousel.Slide w={329}>
					<Card w={329} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength1} w={329} h={417} style={{ opacity: 0.5 }} ml={62} />
							<Text fz={32} mt={-100} w={249} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Latest Technology
							</Text>
							<Text w={288} mt={29} fz={14} fw={400} c={"#f6f6f6"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>

				<Carousel.Slide w={329}>
					<Card w={329} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength2} w={329} h={417} style={{ opacity: 0.5 }} ml={62} />
							<Text fz={32} mt={-100} w={249} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Global Standards
							</Text>
							<Text mt={29} w={288} fz={14} fw={400} c={"#f6f6f6"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>

				<Carousel.Slide>
					<Card w={329} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength3} w={329} h={417} style={{ opacity: 0.5 }} ml={62} />
							<Text fz={32} mt={-100} w={347} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Client Centered Approach{" "}
							</Text>
							<Text mt={29} w={288} fz={14} fw={400} c={"#f6f6f6"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>
			</Carousel>

			{/**Mobile View */}

			<Box maw={360} bg={"#000"} hiddenFrom="xs">
				<Text fw={600} fz={10} pt={56} ml={16} c={"#f6f6f6"}>
					WHO ARE WE ?
				</Text>
				<Text fw={600} fz={20} ml={17} mt={6} c={"#f6f6f6"}>
					Our Strengths
				</Text>
			</Box>
			<Carousel
				h={785}
				slideSize={"33.3%"}
				slideGap={47}
				loop
				align={"start"}
				slidesToScroll={3}
				orientation="horizontal"
				bg={"#000"}
				pl={16}
				pt={17}
				getEmblaApi={setEmbla}
				withControls={false}
				maw={360}
				hiddenFrom="xs"
			>
				<Carousel.Slide w={197}>
					<Card w={329} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength1} w={197} h={251} style={{ opacity: 0.5 }} ml={24} />
							<Text fz={20} mt={-43} w={200} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Latest Technology
							</Text>
							<Text w={195} mt={-8} fz={10} fw={400} c={"#e4e8ed"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>

				<Carousel.Slide w={197}>
					<Card w={329} h={517} bg={"#000"} ml={47}>
						<Card.Section>
							<Image src={Strength2} w={197} h={251} style={{ opacity: 0.5 }} ml={24} />
							<Text fz={20} mt={-43} w={200} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Global Standards
							</Text>
							<Text w={195} mt={-8} fz={10} fw={400} c={"#e4e8ed"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>

				<Carousel.Slide w={197}>
					<Card w={329} h={517} bg={"#000"} ml={47}>
						<Card.Section>
							<Image src={Strength3} w={197} h={251} style={{ opacity: 0.5 }} ml={24} />
							<Text fz={20} h={60} mt={-43} w={200} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Client Centered Approach{" "}
							</Text>
							<Text w={195} fz={10} fw={400} c={"#e4e8ed"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>
			</Carousel>
		</>
	);
};

export default OurStrengths;
