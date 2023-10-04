import { useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Paper, Group, Box, Divider, Card, Text, Image } from "@mantine/core";
import { IconCircleChevronLeft, IconCircleChevronRight } from "@tabler/icons-react";
import React from "react";
import Tifr from "./Assets/tifr.png";
import Quote from "./Assets/quote.png";
import Bhel from "./Assets/bhel.png";
import Avatar1 from "./Assets/avatar1.png";
import Avatar2 from "./Assets/avatar2.png";
import Avatar3 from "./Assets/avatar3.png";

type Props = {};

const Testimonials = (props: Props) => {
	const [embla, setEmbla] = useState<Embla | null>(null);
	return (
		<Paper w={1440} h={856} withBorder style={{ backgroundColor: "black" }}>
			<Text fz={14} style={{ color: "#FFF" }} ml={116} mt={96}>
				WHAT PEOPLE ARE SAYING
			</Text>
			<Group wrap="nowrap" gap={0}>
				<Box w="100%">
					<Divider
						size="md"
						mr={45}
						mt={4}
						label={
							<Text fz={32} ml={116} style={{ color: "#FFF" }}>
								Client Testimonals
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
						color="#FFFFFF"
						onClick={() => embla?.scrollPrev()}
					/>
				}
				{
					<IconCircleChevronRight
						width={37}
						height={37}
						stroke={1}
						color="#FFFFFF"
						onClick={() => embla?.scrollNext()}
					/>
				}
			</Group>
			<Carousel
				mt={64}
				withControls={false}
				height={417}
				slideSize="33.333333%"
				slideGap={64}
				loop
				pl={114}
				align="start"
				style={{
					alignContent: "center",
				}}
				getEmblaApi={setEmbla}
			>
				<Carousel.Slide>
					<Card
						w={423}
						h={417}
						bg="#222222"
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "space-between",
							border: "#222222",
						}}
					>
						<Image src={Tifr} w={127} h={61} pos={"absolute"} mt={22} ml={22} />
						<Image src={Quote} w={36.014} h={32} pos={"absolute"} mt={31} ml={348} />
						<Text
							style={{ color: "#FFF" }}
							fz={14}
							w={368}
							h={110}
							mt={122}
							ml={22}
							mr={23}
							fw={400}
						>
							Libratherm products are performing in nearly all the states in the country and in more
							than 25 countries around the world. While designing and manufacturing their products,
							they sustain a way in which their services benefit us.
						</Text>

						<Image src={Avatar1} w={56} h={56} pos={"absolute"} mt={309} left={32} />
						<Text pos={"absolute"} style={{ color: "#FFF" }} mt={309} left={98} size="sm" fw={400}>
							Varuni Vij
						</Text>
						<Text pos={"absolute"} style={{ color: "#FFF" }} mt={341} left={98} size="xs" fw={400}>
							Former Media Planning & Content Lead, Reckitt India
						</Text>
					</Card>
				</Carousel.Slide>

				<Carousel.Slide>
					<Card
						w={423}
						h={417}
						bg="#222222"
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "space-between",
							border: "#222222",
						}}
					>
						<Image src={Bhel} w={83} h={79} pos={"absolute"} mt={22} ml={22} />
						<Image src={Quote} w={36.014} h={32} pos={"absolute"} mt={31} ml={348} />
						<Text
							style={{ color: "#FFF" }}
							fz={14}
							w={368}
							h={110}
							mt={122}
							ml={22}
							mr={23}
							fw={400}
						>
							Libratherm products are performing in nearly all the states in the country and in more
							than 25 countries around the world. While designing and manufacturing their products,
							they sustain a way in which their services benefit us.
						</Text>
						<Image src={Avatar2} w={56} h={56} pos={"absolute"} mt={309} left={32} />
						<Text pos={"absolute"} style={{ color: "#FFF" }} mt={309} left={98} size="sm" fw={400}>
							Varuni Vij
						</Text>
						<Text pos={"absolute"} style={{ color: "#FFF" }} mt={341} left={98} size="xs" fw={400}>
							Former Media Planning & Content Lead, Reckitt India
						</Text>
					</Card>
				</Carousel.Slide>
				<Carousel.Slide>
					<Card
						w={423}
						h={417}
						bg="#222222"
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "space-between",
							border: "#222222",
						}}
					>
						<Image src={Tifr} w={127} h={61} pos={"absolute"} mt={22} ml={22} />
						<Image src={Quote} w={36.014} h={32} pos={"absolute"} mt={31} ml={348} />
						<Text
							style={{ color: "#FFF" }}
							fz={14}
							w={368}
							h={110}
							mt={122}
							ml={22}
							mr={23}
							fw={400}
						>
							Libratherm products are performing in nearly all the states in the country and in more
							than 25 countries around the world. While designing and manufacturing their products,
							they sustain a way in which their services benefit us.
						</Text>

						<Image src={Avatar3} w={56} h={56} pos={"absolute"} mt={309} left={32} />
						<Text pos={"absolute"} style={{ color: "#FFF" }} mt={309} left={98} size="sm" fw={400}>
							Varuni Vij
						</Text>
						<Text pos={"absolute"} style={{ color: "#FFF" }} mt={341} left={98} size="xs" fw={400}>
							Former Media Planning & Content Lead, Reckitt India
						</Text>
					</Card>
				</Carousel.Slide>
			</Carousel>
		</Paper>
	);
};

export default Testimonials;
