import { useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Paper, Group, Box, Divider, Card, Text, Image, Container, Grid } from "@mantine/core";
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
		<>
			<Paper w={1440} h={840} bg={"#000"} mt={200} visibleFrom="md">
				<Text fz={14} c={"#FFF"} ml={116} pt={64} bg={"#000"}>
					WHAT PEOPLE ARE SAYING
				</Text>
				<Group wrap="nowrap" gap={0} bg={"#000"}>
					<Box w="100%" bg={"#000"}>
						<Divider
							size="md"
							mr={45}
							mt={4}
							label={
								<Text fz={32} ml={116} c={"#FFF"}>
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
					bg={"#000"}
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
							radius={20}
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
							<Text c={"#FFF"} fz={14} w={368} h={110} mt={122} ml={22} mr={23} fw={400}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>

							<Image src={Avatar1} w={56} h={56} pos={"absolute"} mt={309} left={32} />
							<Text pos={"absolute"} c={"#FFF"} mt={309} left={98} size="sm" fw={400}>
								Varuni Vij
							</Text>
							<Text pos={"absolute"} c={"#FFF"} mt={341} left={98} size="xs" fw={400}>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>

					<Carousel.Slide>
						<Card
							w={423}
							radius={20}
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
							<Text c={"#FFF"} fz={14} w={368} h={110} mt={122} ml={22} mr={23} fw={400}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Image src={Avatar2} w={56} h={56} pos={"absolute"} mt={309} left={32} />
							<Text pos={"absolute"} c={"#FFF"} mt={309} left={98} size="sm" fw={400}>
								Varuni Vij
							</Text>
							<Text pos={"absolute"} c={"#FFF"} mt={341} left={98} size="xs" fw={400}>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card
							w={423}
							radius={20}
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
							<Text c={"#FFF"} fz={14} w={368} h={110} mt={122} ml={22} mr={23} fw={400}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>

							<Image src={Avatar3} w={56} h={56} pos={"absolute"} mt={309} left={32} />
							<Text pos={"absolute"} c={"#FFF"} mt={309} left={98} size="sm" fw={400}>
								Varuni Vij
							</Text>
							<Text pos={"absolute"} c={"#FFF"} mt={341} left={98} size="xs" fw={400}>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Paper>

			{/**Mobile View */}
			<Paper w={360} h={840} bg={"#000"} mt={56} hiddenFrom="xs">
				<Text fz={10} c={"#FFF"} ml={17} pt={64} bg={"#000"}>
					WHAT PEOPLE ARE SAYING ?
				</Text>

				<Text fz={20} ml={16} c={"#FFF"} mt={8}>
					Client Testimonals
				</Text>

				<Carousel
					bg={"#000"}
					mt={32}
					withControls={false}
					height={308}
					slideSize="1%"
					slideGap="16px"
					loop
					pl={16}
					align="start"
					style={{
						alignContent: "center",
					}}
					getEmblaApi={setEmbla}
				>
					<Carousel.Slide>
						<Card w={312} radius={20} h={308} bg="#222222">
							<Group mt={19} ml={27}>
								<Image src={Tifr} w={85} h={41} />
								<Image src={Quote} w={36.014} h={32} mt={14} ml={108} />
							</Group>
							<Text c={"#FFF"} fz={10} w={270} ml={14} fw={400} mt={43}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Grid mt={35}>
								<Grid.Col span={2}>
									<Image src={Avatar1} w={48} h={48} />
								</Grid.Col>
								<Grid.Col span={10}>
									<Text c={"#FFF"} fz={16} fw={400} ml={10}>
										Varuni Vij
									</Text>
									<Text c={"#FFF"} fz={10} fw={400} ml={10}>
										Former Media Planning & Content Lead, Reckitt India
									</Text>
								</Grid.Col>
							</Grid>
						</Card>
					</Carousel.Slide>

					<Carousel.Slide>
						<Card w={312} radius={20} h={308} bg="#222222">
							<Group mt={19} ml={27}>
								<Image src={Tifr} w={85} h={41} />
								<Image src={Quote} w={36.014} h={32} mt={14} ml={108} />
							</Group>
							<Text c={"#FFF"} fz={10} w={270} ml={14} fw={400} mt={43}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Grid mt={35}>
								<Grid.Col span={2}>
									<Image src={Avatar1} w={48} h={48} />
								</Grid.Col>
								<Grid.Col span={10}>
									<Text c={"#FFF"} fz={16} fw={400} ml={10}>
										Varuni Vij
									</Text>
									<Text c={"#FFF"} fz={10} fw={400} ml={10}>
										Former Media Planning & Content Lead, Reckitt India
									</Text>
								</Grid.Col>
							</Grid>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card w={312} radius={20} h={308} bg="#222222">
							<Group mt={19} ml={27}>
								<Image src={Tifr} w={85} h={41} />
								<Image src={Quote} w={36.014} h={32} mt={14} ml={108} />
							</Group>
							<Text c={"#FFF"} fz={10} w={270} ml={14} fw={400} mt={43}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Grid mt={35}>
								<Grid.Col span={2}>
									<Image src={Avatar1} w={48} h={48} />
								</Grid.Col>
								<Grid.Col span={10}>
									<Text c={"#FFF"} fz={16} fw={400} ml={10}>
										Varuni Vij
									</Text>
									<Text c={"#FFF"} fz={10} fw={400} ml={10}>
										Former Media Planning & Content Lead, Reckitt India
									</Text>
								</Grid.Col>
							</Grid>
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Paper>

			{/**Tablet View */}
			<Paper w={768} h={580} bg={"#000"} pt={69} hiddenFrom="md" visibleFrom="xs">
				<Text fz={14} c={"#FFF"} ml={90} bg={"#000"}>
					WHAT PEOPLE ARE SAYING ??
				</Text>
				<Group mt={12}>
					<Text fz={32} ml={90} c={"#FFF"}>
						Client Testimonals
					</Text>
					<Divider size={"sm"} w={183} ml={18} mr={11} />
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
					bg={"#000"}
					mt={32}
					withControls={false}
					height={308}
					slideSize="1%"
					slideGap="16px"
					loop
					ml={90}
					align="start"
					style={{
						alignContent: "center",
					}}
					getEmblaApi={setEmbla}
				>
					<Carousel.Slide>
						<Card w={312} radius={20} h={308} bg="#222222">
							<Group mt={19} ml={27}>
								<Image src={Tifr} w={85} h={41} />
								<Image src={Quote} w={36.014} h={32} mt={14} ml={108} />
							</Group>
							<Text c={"#FFF"} fz={10} w={270} ml={14} fw={400} mt={43}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Grid mt={35}>
								<Grid.Col span={2}>
									<Image src={Avatar1} w={48} h={48} />
								</Grid.Col>
								<Grid.Col span={10}>
									<Text c={"#FFF"} fz={16} fw={400} ml={10}>
										Varuni Vij
									</Text>
									<Text c={"#FFF"} fz={10} fw={400} ml={10}>
										Former Media Planning & Content Lead, Reckitt India
									</Text>
								</Grid.Col>
							</Grid>
						</Card>
					</Carousel.Slide>

					<Carousel.Slide>
						<Card w={312} radius={20} h={308} bg="#222222">
							<Group mt={19} ml={27}>
								<Image src={Tifr} w={85} h={41} />
								<Image src={Quote} w={36.014} h={32} mt={14} ml={108} />
							</Group>
							<Text c={"#FFF"} fz={10} w={270} ml={14} fw={400} mt={43}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Grid mt={35}>
								<Grid.Col span={2}>
									<Image src={Avatar1} w={48} h={48} />
								</Grid.Col>
								<Grid.Col span={10}>
									<Text c={"#FFF"} fz={16} fw={400} ml={10}>
										Varuni Vij
									</Text>
									<Text c={"#FFF"} fz={10} fw={400} ml={10}>
										Former Media Planning & Content Lead, Reckitt India
									</Text>
								</Grid.Col>
							</Grid>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card w={312} radius={20} h={308} bg="#222222">
							<Group mt={19} ml={27}>
								<Image src={Tifr} w={85} h={41} />
								<Image src={Quote} w={36.014} h={32} mt={14} ml={108} />
							</Group>
							<Text c={"#FFF"} fz={10} w={270} ml={14} fw={400} mt={43}>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Grid mt={35}>
								<Grid.Col span={2}>
									<Image src={Avatar1} w={48} h={48} />
								</Grid.Col>
								<Grid.Col span={10}>
									<Text c={"#FFF"} fz={16} fw={400} ml={10}>
										Varuni Vij
									</Text>
									<Text c={"#FFF"} fz={10} fw={400} ml={10}>
										Former Media Planning & Content Lead, Reckitt India
									</Text>
								</Grid.Col>
							</Grid>
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Paper>
		</>
	);
};

export default Testimonials;
