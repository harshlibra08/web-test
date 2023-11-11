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
			<Paper h={{ base: 500, lg: 1064 }} w={{ base: 360, lg: 1440 }} bg={"#000"}>
				<Text
					fz={{ lg: 14, base: 10 }}
					fw={600}
					ml={{ lg: 114, base: 17 }}
					pt={{ lg: 108, base: 56 }}
					c={"#E4E8ED"}
				>
					WHO ARE WE ?
				</Text>
				<Text
					fz={{ lg: 32, base: 18 }}
					w={{ lg: 562, base: 210 }}
					fw={600}
					ml={{ lg: 114, base: 17 }}
					mt={{ lg: 16, base: 8 }}
					c={"#E4E8ED"}
					hiddenFrom="xs"
				>
					Our Strengths
				</Text>
				<Group wrap="nowrap" gap={0} visibleFrom="md">
					<Box w={1270}>
						<Divider
							size="sm"
							my={30}
							mr={17}
							label={
								<Text
									fw={600}
									fz={{ lg: 32, base: 20 }}
									ml={{ lg: 114, base: 17 }}
									style={{ color: "#F6F6F6", lineHeight: "40px" }}
								>
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
					h={{ lg: 585, base: 295 }}
					slideSize={"33.3%"}
					slideGap={{ lg: 184, base: 47 }}
					loop
					align={"start"}
					slidesToScroll={3}
					orientation="horizontal"
					ml={{ base: 16, lg: 114 }}
					pt={{ base: 17 }}
					getEmblaApi={setEmbla}
					withControls={false}
					maw={{ lg: 1440, base: 360 }}
				>
					<Carousel.Slide w={{ lg: 329, base: 197 }} ml={{ lg: 114, base: 24 }}>
						<Card w={329} bg={"#000"}>
							<Card.Section>
								<Image
									src={Strength1}
									w={{ lg: 329, base: 197 }}
									h={{ lg: 417, base: 251 }}
									style={{ opacity: 0.5 }}
									ml={{ base: 24 }}
								/>
								<Text
									fz={{ lg: 32, base: 20 }}
									mt={{ lg: -100, base: -43 }}
									w={{ lg: 249, base: 200 }}
									fw={600}
									c={"#f6f6f6"}
									pos={"absolute"}
								>
									Latest Technology
								</Text>
								<Text
									w={{ lg: 288, base: 195 }}
									mt={{ lg: 12, base: -8 }}
									fz={{ lg: 14, base: 10 }}
									fw={400}
									c={"#f6f6f6"}
								>
									We use the latest available and accessible technology for long lasting and
									trouble-free field performance.
								</Text>
							</Card.Section>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide w={{ lg: 329, base: 197 }} ml={{ base: 24 }}>
						<Card w={329} bg={"#000"}>
							<Card.Section>
								<Image
									src={Strength2}
									w={{ lg: 329, base: 197 }}
									h={{ lg: 417, base: 251 }}
									style={{ opacity: 0.5 }}
									ml={{ base: 47 }}
								/>
								<Text
									fz={{ lg: 32, base: 20 }}
									mt={{ lg: -100, base: -43 }}
									w={{ lg: 249, base: 200 }}
									fw={600}
									c={"#f6f6f6"}
									pos={"absolute"}
									ml={{ base: 24 }}
								>
									Global Standards
								</Text>
								<Text
									w={{ lg: 288, base: 195 }}
									mt={{ lg: 12, base: -8 }}
									fz={{ lg: 14, base: 10 }}
									fw={400}
									c={"#f6f6f6"}
									ml={{ base: 24 }}
								>
									We use the latest available and accessible technology for long lasting and
									trouble-free field performance.
								</Text>
							</Card.Section>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide w={{ lg: 329, base: 197 }} ml={{ base: 24 }}>
						<Card w={329} bg={"#000"}>
							<Card.Section>
								<Image
									src={Strength3}
									w={{ lg: 329, base: 197 }}
									h={{ lg: 417, base: 251 }}
									style={{ opacity: 0.5 }}
									ml={{ base: 47 }}
								/>
								<Text
									fz={{ lg: 32, base: 20 }}
									mt={{ lg: -100, base: -43 }}
									w={{ lg: 347, base: 200 }}
									fw={600}
									c={"#f6f6f6"}
									pos={"absolute"}
									ml={{ base: 24 }}
								>
									Client Centered Approach
								</Text>
								<Text
									w={{ lg: 288, base: 195 }}
									mt={{ base: 16 }}
									fz={{ lg: 14, base: 10 }}
									fw={400}
									c={"#f6f6f6"}
									ml={{ base: 24 }}
								>
									We use the latest available and accessible technology for long lasting and
									trouble-free field performance.
								</Text>
							</Card.Section>
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Paper>
			{/**Mobile View */}
			{/*
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
			</Carousel> */}

			{/**Tablet View */}

			{/* <Box w={768} bg={"#000"} hiddenFrom="md" visibleFrom="xs">
				<Text fw={600} fz={14} pt={69} ml={90} c={"#f6f6f6"}>
					WHO ARE WE ?
				</Text>
				<Group wrap="nowrap" gap={10} w={768}>
					<Text fz={26} fw={600} c={"#f6f6f6"} ml={90} mt={12}>
						Our Strengths
					</Text>
					<Divider orientation="horizontal" size={"sm"} w={252} ml={10} mt={4} />
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
			</Box> */}
			{/* <Carousel
				h={600}
				slideSize={"33.3%"}
				loop
				align={"start"}
				slidesToScroll={3}
				orientation="horizontal"
				bg={"#000"}
				pl={90}
				pt={40}
				getEmblaApi={setEmbla}
				withControls={false}
				w={768}
				hiddenFrom="md"
				visibleFrom="xs"
			>
				<Carousel.Slide>
					<Card w={270} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength1} w={239} h={303} style={{ opacity: 0.5 }} ml={48} />
							<Text fz={32} mt={-100} w={249} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Latest Technology
							</Text>
							<Text w={288} mt={24} fz={12} fw={400} c={"#f6f6f6"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>
				<Carousel.Slide ml={40}>
					<Card w={270} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength2} w={239} h={303} style={{ opacity: 0.5 }} ml={48} />
							<Text fz={32} mt={-100} w={249} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Global Standards
							</Text>
							<Text w={288} mt={24} fz={12} fw={400} c={"#f6f6f6"}>
								Our products are performing in nearly all the states in the country and in more than
								25 countries around the world
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide>
				<Carousel.Slide ml={40}>
					<Card w={270} h={517} bg={"#000"}>
						<Card.Section>
							<Image src={Strength3} w={239} h={303} style={{ opacity: 0.5 }} ml={48} />
							<Text fz={32} mt={-100} w={281} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Client Centered Approach
							</Text>
							<Text w={288} mt={24} fz={12} fw={400} c={"#f6f6f6"}>
								Our products are performing in nearly all the states in the country and in more than
								25 countries around the world
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide> */}

			{/* <Carousel.Slide >
					<Card w={329} h={517} bg={"#000"} ml={85}>
						<Card.Section>
							<Image src={Strength2} w={239} h={303} style={{ opacity: 0.5 }} ml={48} />
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

				<Carousel.Slide >
					<Card w={329} h={517} bg={"#000"} ml={85}>
						<Card.Section>
							<Image src={Strength3} w={239} h={303} style={{ opacity: 0.5 }} ml={48} />
							<Text fz={20} h={60} mt={-43} w={200} fw={600} c={"#f6f6f6"} pos={"absolute"}>
								Client Centered Approach{" "}
							</Text>
							<Text w={195} fz={10} fw={400} c={"#e4e8ed"}>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Card.Section>
					</Card>
				</Carousel.Slide> */}
			{/* </Carousel> */}
		</>
	);
};

export default OurStrengths;
