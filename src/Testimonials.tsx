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
		<Paper w={1440} h={696} withBorder style={{ backgroundColor: "black" }}>
			<Group wrap="nowrap" gap={0}>
				<Box w="100%">
					<Divider
						size="md"
						my={"60px"}
						mr={"157px"}
						label={
							<Text size={"32px"} ml={140} color="#FFFFFF">
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
				// breakpoints={[
				// 	{ maxWidth: "md", slideSize: "50%" },
				// 	{ maxWidth: "sm", slideSize: "100%", slideGap: 0 },
				// ]}
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
						}}
					>
						<Image src={Tifr} width={127} height={61} pos={"absolute"} top={32} left={32} />
						<Image src={Quote} width={36.014} height={32} pos={"absolute"} top={31} right={29} />
						<Text color="#FFFFFF" size="sm" w={368} h={110} mt={112} ml={32} mr={23} fw={400}>
							Libratherm products are performing in nearly all the states in the country and in more
							than 25 countries around the world. While designing and manufacturing their products,
							they sustain a way in which their services benefit us.
						</Text>

						<Image src={Avatar1} width={56} height={56} pos={"absolute"} top={329} left={32} />
						<Text pos={"absolute"} color="#FFF" top={329} left={98} size="sm" fw={400}>
							Varuni Vij
						</Text>
						<Text pos={"absolute"} color="#FFF" top={361} left={98} size="xs" fw={400}>
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
						}}
					>
						<Image src={Bhel} width={83} height={79} pos={"absolute"} top={15} left={26} />
						<Image src={Quote} width={36.014} height={32} pos={"absolute"} top={31} right={29} />
						<Text color="#FFFFFF" size="sm" w={368} h={110} mt={112} ml={32} mr={23} fw={400}>
							Libratherm products are performing in nearly all the states in the country and in more
							than 25 countries around the world. While designing and manufacturing their products,
							they sustain a way in which their services benefit us.
						</Text>
						<Image src={Avatar2} width={56} height={56} pos={"absolute"} top={329} left={32} />
						<Text pos={"absolute"} color="#FFF" top={329} left={98} size="sm" fw={400}>
							Varuni Vij
						</Text>
						<Text pos={"absolute"} color="#FFF" top={361} left={98} size="xs" fw={400}>
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
						}}
					>
						<Image src={Tifr} width={127} height={61} pos={"absolute"} top={32} left={32} />
						<Image src={Quote} width={36.014} height={32} pos={"absolute"} top={31} right={29} />
						<Text color="#FFFFFF" size="sm" w={368} h={110} mt={112} ml={32} mr={23} fw={400}>
							Libratherm products are performing in nearly all the states in the country and in more
							than 25 countries around the world. While designing and manufacturing their products,
							they sustain a way in which their services benefit us.
						</Text>
						<Image src={Avatar3} width={56} height={56} pos={"absolute"} top={329} left={32} />
						<Text pos={"absolute"} color="#FFF" top={329} left={98} size="sm" fw={400}>
							Varuni Vij
						</Text>
						<Text pos={"absolute"} color="#FFF" top={361} left={98} size="xs" fw={400}>
							Former Media Planning & Content Lead, Reckitt India
						</Text>
					</Card>
				</Carousel.Slide>
			</Carousel>
		</Paper>
	);
};

export default Testimonials;
