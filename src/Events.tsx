import { Paper, Group, Box, Divider, Grid, UnstyledButton, Text, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import Event1 from "./Assets/event1.png";
import Event2 from "./Assets/event2.png";
import Event3 from "./Assets/event3.png";
import Event4 from "./Assets/event4.png";
import EventBg from "./Assets/eventbg.png";
type Props = {};

const Events = (props: Props) => {
	return (
		<>
			<Paper
				w={{ base: 360, lg: 1440 }}
				h={{ base: 887, lg: 1000 }}
				bg={"#000"}
				mt={{ base: 30, lg: 0 }}
			>
				<Text c={"#e4e8ed"} fz={{ base: 10, lg: 14 }} pt={{ base: 64 }} ml={{ base: 17, lg: 116 }}>
					WHAT HAVE WE BEEN DOING
				</Text>
				<Group wrap="nowrap" gap={0}>
					<Text
						fz={{ base: 20, lg: 32 }}
						ml={{ base: 16, lg: 116 }}
						mt={{ base: 8, lg: 12 }}
						c="#FFF"
					>
						Events
					</Text>
					<Divider size="sm" w={1087} ml={21} mr={114} visibleFrom="md" />
				</Group>

				<Grid justify="flex-start" mt={{ base: 22, lg: 87 }}>
					<Grid.Col span={{ base: 6, lg: 4 }} maw={{ lg: 420 }}>
						<Box pos="relative" w={{ lg: 768 }} h={280}>
							<Image
								src={EventBg}
								h={{ base: 147, lg: 202 }}
								w={{ base: 60, lg: 82 }}
								pos="absolute"
								top={0}
								left={{ base: 16, lg: 114 }}
							/>
							<Image
								src={Event1}
								h={{ base: 119, lg: 164 }}
								w={{ base: 120, lg: 164 }}
								pos="absolute"
								top={{ base: 15 }}
								left={{ base: 31, lg: 134 }}
							/>
							<Text
								c={"#e4e8ed"}
								fz={{ base: 10, lg: 12 }}
								ml={{ base: 23, lg: 319 }}
								pt={{ base: 157, lg: 18 }}
							>
								22nd January, 2023.
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 12, lg: 16 }}
								ml={{ base: 23, lg: 319 }}
								w={{ base: 149, lg: 186 }}
								mt={{ base: 9 }}
							>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ base: 6, lg: 4 }} maw={{ lg: 420 }}>
						<Box pos="relative" w={{ lg: 768 }} h={280}>
							<Image
								src={EventBg}
								h={{ base: 147, lg: 202 }}
								w={{ base: 60, lg: 82 }}
								pos="absolute"
								top={0}
								left={{ base: 16, lg: 114 }}
							/>
							<Image
								src={Event1}
								h={{ base: 119, lg: 164 }}
								w={{ base: 120, lg: 164 }}
								pos="absolute"
								top={{ base: 15 }}
								left={{ base: 31, lg: 134 }}
							/>
							<Text
								c={"#e4e8ed"}
								fz={{ base: 10, lg: 12 }}
								ml={{ base: 23, lg: 319 }}
								pt={{ base: 157, lg: 18 }}
							>
								22nd January, 2023.
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 12, lg: 16 }}
								ml={{ base: 23, lg: 319 }}
								w={{ base: 149, lg: 186 }}
								mt={{ base: 9 }}
							>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ base: 6, lg: 4 }} maw={{ lg: 420 }}>
						<Box pos="relative" w={{ lg: 768 }} h={280}>
							<Image
								src={EventBg}
								h={{ base: 147, lg: 202 }}
								w={{ base: 60, lg: 82 }}
								pos="absolute"
								top={0}
								left={{ base: 16, lg: 114 }}
							/>
							<Image
								src={Event1}
								h={{ base: 119, lg: 164 }}
								w={{ base: 120, lg: 164 }}
								pos="absolute"
								top={{ base: 15 }}
								left={{ base: 31, lg: 134 }}
							/>
							<Text
								c={"#e4e8ed"}
								fz={{ base: 10, lg: 12 }}
								ml={{ base: 23, lg: 319 }}
								pt={{ base: 157, lg: 18 }}
							>
								22nd January, 2023.
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 12, lg: 16 }}
								ml={{ base: 23, lg: 319 }}
								w={{ base: 149, lg: 186 }}
								mt={{ base: 9 }}
							>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ base: 6, lg: 4 }} maw={{ lg: 420 }}>
						<Box pos="relative" w={{ lg: 768 }} h={280}>
							<Image
								src={EventBg}
								h={{ base: 147, lg: 202 }}
								w={{ base: 60, lg: 82 }}
								pos="absolute"
								top={0}
								left={{ base: 16, lg: 114 }}
							/>
							<Image
								src={Event1}
								h={{ base: 119, lg: 164 }}
								w={{ base: 120, lg: 164 }}
								pos="absolute"
								top={{ base: 15 }}
								left={{ base: 31, lg: 134 }}
							/>
							<Text
								c={"#e4e8ed"}
								fz={{ base: 10, lg: 12 }}
								ml={{ base: 23, lg: 319 }}
								pt={{ base: 157, lg: 18 }}
							>
								22nd January, 2023.
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 12, lg: 16 }}
								ml={{ base: 23, lg: 319 }}
								w={{ base: 149, lg: 186 }}
								mt={{ base: 9 }}
							>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ base: 6, lg: 4 }} visibleFrom="md" maw={{ lg: 420 }}>
						<Box pos="relative" w={{ lg: 768 }} h={280}>
							<Image
								src={EventBg}
								h={{ base: 147, lg: 202 }}
								w={{ base: 60, lg: 82 }}
								pos="absolute"
								top={0}
								left={{ base: 16, lg: 114 }}
							/>
							<Image
								src={Event1}
								h={{ base: 119, lg: 164 }}
								w={{ base: 120, lg: 164 }}
								pos="absolute"
								top={{ base: 15 }}
								left={{ base: 31, lg: 134 }}
							/>
							<Text
								c={"#e4e8ed"}
								fz={{ base: 10, lg: 12 }}
								ml={{ base: 23, lg: 319 }}
								pt={{ base: 157, lg: 18 }}
							>
								22nd January, 2023.
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 12, lg: 16 }}
								ml={{ base: 23, lg: 319 }}
								w={{ base: 149, lg: 186 }}
								mt={{ base: 9 }}
							>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ base: 6, lg: 4 }} visibleFrom="md" maw={{ lg: 420 }}>
						<Box pos="relative" w={{ lg: 768 }} h={280}>
							<Image
								src={EventBg}
								h={{ base: 147, lg: 202 }}
								w={{ base: 60, lg: 82 }}
								pos="absolute"
								top={0}
								left={{ base: 16, lg: 114 }}
							/>
							<Image
								src={Event1}
								h={{ base: 119, lg: 164 }}
								w={{ base: 120, lg: 164 }}
								pos="absolute"
								top={{ base: 15 }}
								left={{ base: 31, lg: 134 }}
							/>
							<Text
								c={"#e4e8ed"}
								fz={{ base: 10, lg: 12 }}
								ml={{ base: 23, lg: 319 }}
								pt={{ base: 157, lg: 18 }}
							>
								22nd January, 2023.
							</Text>
							<Text
								c={"#ffffff"}
								fz={{ base: 12, lg: 16 }}
								ml={{ base: 23, lg: 319 }}
								w={{ base: 149, lg: 186 }}
								mt={{ base: 9 }}
							>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
				</Grid>
				<Group justify="center">
					<UnstyledButton>
						<Text fz={{ base: 14 }} c={"#ffffff"}>
							Show more
						</Text>
					</UnstyledButton>
					{<IconChevronDown size="20px" color="#FFF" />}
				</Group>
			</Paper>

			{/**Mobile View */}
			{/* <Paper w={360} h={780} bg={"#000"} mt={64} hiddenFrom="xs">
				<Text c={"#e4e8ed"} fz={10} pt={64} ml={17}>
					LOREM IPSUM
				</Text>

				<Text fz={20} ml={16} c={"#FFF"}>
					Events
				</Text>

				<Grid maw={360}>
					<Grid.Col span={6}>
						<Box pos="relative" w={{ lg:768}} h={230}>
							<Image src={EventBg} h={147} w={60} pos="absolute" top={22} left={14} />
							<Image src={Event1} h={119} w={120} pos="absolute" top={37} left={31} />
							<Text c={"#e4e8ed"} pos={"absolute"} mt={179} fz={10} ml={23}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} pos={"absolute"} fz={12} ml={23} mt={202} w={149}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Box pos="relative" w={{ lg:768}} h={230}>
							<Image src={EventBg} h={147} w={60} pos="absolute" top={22} left={14} />
							<Image src={Event2} h={119} w={120} pos="absolute" top={37} left={31} />
							<Text c={"#e4e8ed"} pos={"absolute"} mt={179} fz={10} ml={23}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} pos={"absolute"} fz={12} ml={23} mt={202} w={149}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Box pos="relative" w={{ lg:768}} h={280}>
							<Image src={EventBg} w={60} pos="absolute" top={22} left={14} />
							<Image src={Event3} h={119} w={120} pos="absolute" top={37} left={31} />
							<Text c={"#e4e8ed"} pos={"absolute"} mt={179} fz={10} ml={23}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} pos={"absolute"} fz={12} ml={23} mt={202} w={149}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={6}>
						<Box pos="relative" w={{ lg:768}} h={280}>
							<Image src={EventBg} w={60} pos="absolute" top={22} left={14} />
							<Image src={Event4} h={119} w={120} pos="absolute" top={37} left={31} />
							<Text c={"#e4e8ed"} pos={"absolute"} mt={179} fz={10} ml={23}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} pos={"absolute"} fz={12} ml={23} mt={202} w={149}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
				</Grid>
				<Group justify="flex-start" ml={127} mt={57}>
					<UnstyledButton>
						<Text size="md" c={"#ffffff"}>
							Show more
						</Text>
					</UnstyledButton>
					{<IconChevronDown size="20px" color="#FFF" />}
				</Group>
			</Paper> */}

			{/**Tablet View */}
			{/* <Paper w={768} h={946} bg={"#000"} mt={64} hiddenFrom="md" visibleFrom="xs">
				<Text c={"#e4e8ed"} fz={12} pt={64} ml={30}>
					WHAT HAVE WE BEEN DOING
				</Text>

				<Text fz={28} ml={30} c={"#FFF"}>
					Events
				</Text>

				<Grid maw={768} mt={87}>
					<Grid.Col span={4}>
						<Box pos="relative" w={768} h={280}>
							<Image src={EventBg} h={152} w={52} pos="absolute" top={0} left={30} />
							<Image src={Event1} h={114} w={114} pos="absolute" top={20} left={51} />
							<Text c={"#e4e8ed"} fz={8} ml={169}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} fz={10} ml={169} mt={15} w={100}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={768} h={280}>
							<Image src={EventBg} h={152} w={52} pos="absolute" top={0} left={30} />
							<Image src={Event1} h={114} w={114} pos="absolute" top={20} left={51} />
							<Text c={"#e4e8ed"} fz={8} ml={169}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} fz={10} ml={169} mt={15} w={100}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={768} h={280}>
							<Image src={EventBg} h={152} w={52} pos="absolute" top={0} left={30} />
							<Image src={Event1} h={114} w={114} pos="absolute" top={20} left={51} />
							<Text c={"#e4e8ed"} fz={8} ml={169}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} fz={10} ml={169} mt={15} w={100}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={768} h={280}>
							<Image src={EventBg} h={152} w={52} pos="absolute" top={0} left={30} />
							<Image src={Event1} h={114} w={114} pos="absolute" top={20} left={51} />
							<Text c={"#e4e8ed"} fz={8} ml={169}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} fz={10} ml={169} mt={15} w={100}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={768} h={280}>
							<Image src={EventBg} h={152} w={52} pos="absolute" top={0} left={30} />
							<Image src={Event1} h={114} w={114} pos="absolute" top={20} left={51} />
							<Text c={"#e4e8ed"} fz={8} ml={169}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} fz={10} ml={169} mt={15} w={100}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={768} h={280}>
							<Image src={EventBg} h={152} w={52} pos="absolute" top={0} left={30} />
							<Image src={Event1} h={114} w={114} pos="absolute" top={20} left={51} />
							<Text c={"#e4e8ed"} fz={8} ml={169}>
								22nd January, 2023.
							</Text>
							<Text c={"#ffffff"} fz={10} ml={169} mt={15} w={100}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
				</Grid>
				<Group justify="flex-start" ml={350}>
					<UnstyledButton>
						<Text size="md" c={"#ffffff"}>
							Show more
						</Text>
					</UnstyledButton>
					{<IconChevronDown size="20px" color="#FFF" />}
				</Group>
			</Paper> */}
		</>
	);
};

export default Events;
