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
			<Paper w={{ base: 360, lg: 1440 }} h={{ base: 522, lg: 853 }} bg={"#000"} mt={200}>
				<Text
					fz={{ base: 10, lg: 14 }}
					c={"#FFF"}
					ml={{ base: 17, lg: 116 }}
					pt={{ base: 64, lg: 96 }}
					bg={"#000"}
				>
					WHAT PEOPLE ARE SAYING
				</Text>

				<Group wrap="nowrap" gap={0} bg={"#000"}>
					<Text fz={{ lg: 32 }} ml={{ lg: 116, base: 16 }} c={"#FFF"} mt={{ lg: 12, base: 8 }}>
						Client Testimonals
					</Text>
					<Divider size="sm" w={821} ml={20} mr={45} mt={4} visibleFrom="md" />
					<Group visibleFrom="md">
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
				</Group>
				<Carousel
					bg={"#000"}
					mt={{ base: 32, lg: 64 }}
					withControls={false}
					height={417}
					slideSize={{ base: "13.33%", lg: "26.33%" }}
					slideGap={{ base: 16, lg: 64 }}
					loop
					pl={{ base: 16, lg: 114 }}
					align="start"
					style={{
						alignContent: "center",
					}}
					getEmblaApi={setEmbla}
				>
					<Carousel.Slide>
						<Card
							w={{ base: 312, lg: 423 }}
							h={{ base: 308, lg: 417 }}
							radius={20}
							bg="#222222"
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "space-between",
								border: "#222222",
							}}
						>
							<Image
								src={Tifr}
								w={{ base: 85, lg: 127 }}
								h={{ base: 41, lg: 61 }}
								pos={"absolute"}
								mt={{ base: 22, lg: 32 }}
								ml={{ base: 22, lg: 32 }}
							/>
							<Image
								src={Quote}
								w={36}
								h={32}
								pos={"absolute"}
								mt={31}
								ml={{ base: 228, lg: 358 }}
							/>
							<Text
								c={"#FFF"}
								fz={{ base: 11, lg: 16 }}
								w={{ base: 280, lg: 368 }}
								h={{ base: 80, lg: 110 }}
								mt={{ base: 108, lg: 122 }}
								ml={{ base: 10, lg: 28 }}
								fw={400}
							>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>

							<Image
								src={Avatar1}
								w={{ base: 48, lg: 56 }}
								h={{ base: 48, lg: 56 }}
								pos={"absolute"}
								mt={{ base: 219, lg: 329 }}
								left={{ base: 16, lg: 32 }}
							/>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 219, lg: 329 }}
								left={{ base: 80, lg: 98 }}
								fz={{ base: 14, lg: 18 }}
								fw={400}
							>
								Varuni Vij
							</Text>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 249, lg: 361 }}
								left={{ base: 80, lg: 98 }}
								fz={{ base: 8, lg: 12 }}
								fw={400}
							>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>

					<Carousel.Slide>
						<Card
							w={{ base: 312, lg: 423 }}
							h={{ base: 308, lg: 417 }}
							radius={20}
							bg="#222222"
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "space-between",
								border: "#222222",
							}}
						>
							<Image
								src={Tifr}
								w={{ base: 85, lg: 127 }}
								h={{ base: 41, lg: 61 }}
								pos={"absolute"}
								mt={{ base: 22, lg: 32 }}
								ml={{ base: 22, lg: 32 }}
							/>
							<Image
								src={Quote}
								w={36}
								h={32}
								pos={"absolute"}
								mt={31}
								ml={{ base: 228, lg: 358 }}
							/>
							<Text
								c={"#FFF"}
								fz={{ base: 11, lg: 16 }}
								w={{ base: 280, lg: 368 }}
								h={{ base: 80, lg: 110 }}
								mt={{ base: 108, lg: 122 }}
								ml={{ base: 10, lg: 28 }}
								fw={400}
							>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>

							<Image
								src={Avatar1}
								w={{ base: 48, lg: 56 }}
								h={{ base: 48, lg: 56 }}
								pos={"absolute"}
								mt={{ base: 219, lg: 329 }}
								left={{ base: 16, lg: 32 }}
							/>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 219, lg: 329 }}
								left={{ base: 80, lg: 98 }}
								fz={{ base: 14, lg: 18 }}
								fw={400}
							>
								Varuni Vij
							</Text>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 249, lg: 361 }}
								left={{ base: 80, lg: 98 }}
								fz={{ base: 8, lg: 12 }}
								fw={400}
							>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card
							w={{ base: 312, lg: 423 }}
							h={{ base: 308, lg: 417 }}
							radius={20}
							bg="#222222"
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "space-between",
								border: "#222222",
							}}
						>
							<Image
								src={Tifr}
								w={{ base: 85, lg: 127 }}
								h={{ base: 41, lg: 61 }}
								pos={"absolute"}
								mt={{ base: 22, lg: 32 }}
								ml={{ base: 22, lg: 32 }}
							/>
							<Image
								src={Quote}
								w={36}
								h={32}
								pos={"absolute"}
								mt={31}
								ml={{ base: 228, lg: 358 }}
							/>
							<Text
								c={"#FFF"}
								fz={{ base: 11, lg: 16 }}
								w={{ base: 280, lg: 368 }}
								h={{ base: 80, lg: 110 }}
								mt={{ base: 108, lg: 122 }}
								ml={{ base: 10, lg: 28 }}
								fw={400}
							>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>

							<Image
								src={Avatar1}
								w={{ base: 48, lg: 56 }}
								h={{ base: 48, lg: 56 }}
								pos={"absolute"}
								mt={{ base: 219, lg: 329 }}
								left={{ base: 16, lg: 32 }}
							/>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 219, lg: 329 }}
								left={{ base: 80, lg: 98 }}
								fz={{ base: 14, lg: 18 }}
								fw={400}
							>
								Varuni Vij
							</Text>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 249, lg: 361 }}
								left={{ base: 80, lg: 98 }}
								fz={{ base: 8, lg: 12 }}
								fw={400}
							>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Paper>

			{/**Mobile View */}
			{/* <Paper w={360} h={840} bg={"#000"} mt={56} hiddenFrom="xs">
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
			</Paper> */}

			{/**Tablet View */}
			{/* <Paper w={768} h={580} bg={"#000"} pt={69} hiddenFrom="md" visibleFrom="xs">
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
			</Paper> */}
		</>
	);
};

export default Testimonials;
