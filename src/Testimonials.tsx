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
			<Paper w={{ base: 360 }} h={{ base: 522 }} bg={"#000"} mt={200}>
				<Text fz={{ base: 10 }} c={"#FFF"} ml={{ base: 17 }} pt={{ base: 64 }} bg={"#000"}>
					WHAT PEOPLE ARE SAYING
				</Text>
				<Group wrap="nowrap" gap={0} bg={"#000"}>
					<Text fz={{ base: 20 }} ml={{ base: 12 }} c={"#FFF"}>
						Client Testimonals
					</Text>
					<Divider size="md" mr={45} mt={4} />

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
					mt={{ base: 32 }}
					withControls={false}
					height={417}
					slideSize="13.333333%"
					slideGap={{ base: 16 }}
					loop
					pl={{ base: 16 }}
					align="start"
					style={{
						alignContent: "center",
					}}
					getEmblaApi={setEmbla}
				>
					<Carousel.Slide>
						<Card
							w={{ base: 312 }}
							h={{ base: 308 }}
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
								w={{ base: 85 }}
								h={{ base: 41 }}
								pos={"absolute"}
								mt={22}
								ml={22}
							/>
							<Image src={Quote} w={36.014} h={32} pos={"absolute"} mt={31} ml={{ base: 228 }} />
							<Text
								c={"#FFF"}
								fz={{ base: 11 }}
								w={{ base: 280 }}
								h={{ base: 80 }}
								mt={{ base: 108 }}
								ml={{ base: 10 }}
								fw={400}
							>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>

							<Image
								src={Avatar1}
								w={{ base: 48 }}
								h={{ base: 48 }}
								pos={"absolute"}
								mt={{ base: 219 }}
								left={{ base: 16 }}
							/>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 219 }}
								left={{ base: 80 }}
								fz={{ base: 14 }}
								fw={400}
							>
								Varuni Vij
							</Text>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 249 }}
								left={{ base: 80 }}
								fz={{ base: 8 }}
								fw={400}
							>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>

					<Carousel.Slide>
						<Card
							w={{ base: 312 }}
							h={{ base: 308 }}
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
								src={Bhel}
								w={{ base: 85 }}
								h={{ base: 41 }}
								pos={"absolute"}
								mt={22}
								ml={22}
							/>
							<Image src={Quote} w={36.014} h={32} pos={"absolute"} mt={31} ml={{ base: 228 }} />
							<Text
								c={"#FFF"}
								fz={{ base: 11 }}
								w={{ base: 280 }}
								h={{ base: 80 }}
								mt={{ base: 108 }}
								ml={{ base: 10 }}
								fw={400}
							>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Image
								src={Avatar2}
								w={{ base: 48 }}
								h={{ base: 48 }}
								pos={"absolute"}
								mt={{ base: 219 }}
								left={{ base: 16 }}
							/>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 219 }}
								left={{ base: 80 }}
								fz={{ base: 14 }}
								fw={400}
							>
								Varuni Vij
							</Text>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 249 }}
								left={{ base: 80 }}
								fz={{ base: 8 }}
								fw={400}
							>
								Former Media Planning & Content Lead, Reckitt India
							</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card
							w={{ base: 312 }}
							h={{ base: 308 }}
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
								src={Bhel}
								w={{ base: 85 }}
								h={{ base: 41 }}
								pos={"absolute"}
								mt={22}
								ml={22}
							/>
							<Image src={Quote} w={36.014} h={32} pos={"absolute"} mt={31} ml={{ base: 228 }} />
							<Text
								c={"#FFF"}
								fz={{ base: 11 }}
								w={{ base: 280 }}
								h={{ base: 80 }}
								mt={{ base: 108 }}
								ml={{ base: 10 }}
								fw={400}
							>
								Libratherm products are performing in nearly all the states in the country and in
								more than 25 countries around the world. While designing and manufacturing their
								products, they sustain a way in which their services benefit us.
							</Text>
							<Image
								src={Avatar3}
								w={{ base: 48 }}
								h={{ base: 48 }}
								pos={"absolute"}
								mt={{ base: 219 }}
								left={{ base: 16 }}
							/>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 219 }}
								left={{ base: 80 }}
								fz={{ base: 14 }}
								fw={400}
							>
								Varuni Vij
							</Text>
							<Text
								pos={"absolute"}
								c={"#FFF"}
								mt={{ base: 249 }}
								left={{ base: 80 }}
								fz={{ base: 8 }}
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
