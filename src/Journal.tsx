import {
	Paper,
	Group,
	Box,
	Divider,
	Card,
	UnstyledButton,
	Grid,
	Container,
	// Col,
	Image,
	Text,
} from "@mantine/core";
import React from "react";
import WHO from "./Assets/who.png";

import RectangleOmega from "./Assets/RectangleOmega.png";
import RectangleJournal from "./Assets/RectangleJournal.png";

//import FooterBg from "./footerbg.png";
//import FooterGrad from "./footergradient.png";

import Journal1 from "./Assets/journal1.png";
import Journal2 from "./Assets/journal2.png";
import Industry1 from "./Assets/ind1.png";
import Industry2 from "./Assets/ind2.png";
import Industry3 from "./Assets/ind3.png";
import Industry4 from "./Assets/ind4.png";
import Event1 from "./Assets/event1.png";
import Event2 from "./Assets/event2.png";
import Event3 from "./Assets/event3.png";
import Event4 from "./Assets/event4.png";
import Event5 from "./Assets/event5.png";
import Event6 from "./Assets/event6.png";
import EventBg from "./Assets/eventbg.png";
import DAQ from "./Assets/dataacc.png";
type Props = {};

const Journal = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={964} withBorder bg={"black"}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={40} ml={114} color="#F6F6F6">
							Journal
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>

				<Group justify="center" gap="lg">
					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Image
									src={RectangleJournal}
									height={172}
									width={325}
									alt="Client"
									pos="absolute"
									top={10}
									left={0}
									w="100%"
									h="100%"
								/>
								<Image
									src={Journal1}
									height={292}
									width={293}
									alt="Client"
									pos="absolute"
									top={26}
									left={16}
									w="100%"
									h="100%"
								/>
								<Text fw={400} h={92} w={347} size="xl" pos="absolute" mt={350} color="#F6F6F6">
									Industries
								</Text>

								<Text
									size="16px"
									fw={400}
									w={325}
									h={46}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={2}
								>
									Libratherm has supplied various types of temperature controllers, thyristor power
									controllers and control panels to the industries manufacturing Files, Diamond
									Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and
									circular blades etc… The temperature of the electrical or fuel fired heating
									systems, used for annealing, hardening, steam bluing and similar such processes,
									has been in use for precise control up to 1200-C, using our models PRC-300,
									PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from
									thermocouples or infrared non contact sensors.
								</Text>
							</Box>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" mt={32} fw={400}>
										Know more
									</Text>
								</Group>
							</UnstyledButton>
						</Card.Section>
					</Card>

					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Image
									src={RectangleJournal}
									height={172}
									width={325}
									alt="Client"
									pos="absolute"
									top={10}
									left={0}
									w="100%"
									h="100%"
								/>
								<Image
									src={Journal2}
									height={292}
									width={293}
									alt="Client"
									pos="absolute"
									top={26}
									left={16}
									w="100%"
									h="100%"
								/>
								<Text fw={400} h={92} w={347} size="xl" pos="absolute" mt={350} color="#F6F6F6">
									Services
								</Text>

								<Text
									size="16px"
									fw={400}
									w={325}
									h={46}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={2}
								>
									Libratherm has supplied various types of temperature controllers, thyristor power
									controllers and control panels to the industries manufacturing Files, Diamond
									Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and
									circular blades etc… The temperature of the electrical or fuel fired heating
									systems, used for annealing, hardening, steam bluing and similar such processes,
									has been in use for precise control up to 1200-C, using our models PRC-300,
									PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from
									thermocouples or infrared non contact sensors.
								</Text>
							</Box>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" mt={32} fw={400}>
										Know more
									</Text>
								</Group>
							</UnstyledButton>
						</Card.Section>
					</Card>

					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Image
									src={RectangleJournal}
									height={172}
									width={325}
									alt="Client"
									pos="absolute"
									top={10}
									left={0}
									w="100%"
									h="100%"
								/>
								<Image
									src={WHO}
									height={292}
									width={293}
									alt="Client"
									pos="absolute"
									top={26}
									left={16}
									w="100%"
									h="100%"
								/>
								<Text fw={400} h={92} w={347} size="xl" pos="absolute" mt={350} color="#F6F6F6">
									Applications
								</Text>

								<Text
									size="16px"
									fw={400}
									w={325}
									h={46}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={2}
								>
									Libratherm has supplied various types of temperature controllers, thyristor power
									controllers and control panels to the industries manufacturing Files, Diamond
									Tools, Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and
									circular blades etc… The temperature of the electrical or fuel fired heating
									systems, used for annealing, hardening, steam bluing and similar such processes,
									has been in use for precise control up to 1200-C, using our models PRC-300,
									PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from
									thermocouples or infrared non contact sensors.
								</Text>
							</Box>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" mt={32} fw={400}>
										Know more
									</Text>
								</Group>
							</UnstyledButton>
						</Card.Section>
					</Card>
				</Group>
			</Paper>
			<Paper w={1440} h={3140} withBorder bg={"black"}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
							Industry
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Grid>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry1} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Glass Manufacture
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry2} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Jewelry Manufacture
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry3} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Pharmaceuticals
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry4} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Steel Plants
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry2} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Jewelry Manufacture
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry3} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Pharmaceuticals
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4} pt={120}>
						<Box pos="relative" w={1200} h={280}>
							<Image src={Industry4} height={327} width={358} pos="absolute" top={64} left={116} />
							<Text color="#E4E8ED" size="sm" ml={530} pt={128}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size="xl" ml={530} mt={16}>
								Steel Plants
							</Text>
							<Text color="#E4E8ED" size="sm" ml={530} mt={16} w={868} lineClamp={2}>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc… The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
							<UnstyledButton>
								<Group>
									<Text size="20px" color="white" ml={530} mt={32} fw={400}>
										Read more
									</Text>
								</Group>
							</UnstyledButton>
						</Box>
					</Grid.Col>
				</Grid>
			</Paper>
			<br />
			<br />
			<br />
			<br />
			<Paper w={1440} h={3140} withBorder bg={"black"}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
							Industry
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Container mt={-73}>
					<Grid gutter="lg">
						<Grid.Col span={6}>
							<Text size="sm" fw={600} color="#E4E8ED" pt={191} ml={-160} mt={10}>
								22nd January, 2023
							</Text>
							<Box>
								<Text
									size="32px"
									w={558}
									h={102}
									fw={600}
									pt={16}
									style={{ lineHeight: "51.2px" }}
									color="#F6F6F6"
									ml={-160}
								>
									Glass Manufacture
								</Text>
							</Box>
							<Text h={154} w={590} color="#E4E8ED" size="sm" fw={400} mb={40} ml={-160}>
								Libratherm is an innovation-driven manufacturer of Process Control Instruments and
								Systems since 1991. We cater to a wide range of industries, by providing accurate
								measurement, precise control, and implementing modern standards in data logging and
								industrial communication. Glass is one of the industries where we have been
								supplying numerous process control instruments and control panels for various
								processes such as Glass Bending, Glass Toughening, and Glass Melting.
							</Text>
						</Grid.Col>
						<Grid.Col span={6}>
							<Image
								src={RectangleOmega}
								bg={"black"}
								width={509}
								height={696}
								pos={"absolute"}
								left={931}
								pr={0}
								mt={0}
							/>

							<Image
								src={Industry1}
								alt="Sample"
								width={493}
								height={451}
								pos={"absolute"}
								mt={126}
								mr={112}
							/>
						</Grid.Col>
					</Grid>
				</Container>

				<Group justify="center" gap="lg" pt={308}>
					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Text fw={400} h={92} w={347} size="md" mt={0} color="#F6F6F6">
									Glass Bending
									<Divider size="lg" mr={22} my={14} />
								</Text>
							</Box>
							<Image
								src={RectangleJournal}
								height={172}
								width={325}
								alt="Client"
								pos="absolute"
								top={55}
								left={0}
								w="100%"
								h="100%"
							/>
							<Image
								src={Journal1}
								height={292}
								width={293}
								alt="Client"
								pos="absolute"
								top={73}
								left={16}
								w="100%"
								h="100%"
							/>

							<Text
								size="14px"
								fw={400}
								w={325}
								h={136}
								pos="absolute"
								top={414}
								color="#E4E8ED"
								lineClamp={5}
							>
								Libratherm offers Ramp Soak PID Temperature Controller - PRC-300, High Temperature
								Ramp Soak PID Controller - PRC-309 and Three Phase Thyristor Power Controller -
								POW-3-PA-CL for the Glass Bending Process.
							</Text>
						</Card.Section>
					</Card>

					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Text fw={400} h={92} w={347} size="md" mt={0} color="#F6F6F6">
									Glass Toughening
									<Divider size="lg" mr={22} my={14} />
								</Text>
								<Image
									src={RectangleJournal}
									height={172}
									width={325}
									alt="Client"
									pos="absolute"
									top={55}
									left={0}
									w="100%"
									h="100%"
								/>
								<Image
									src={Journal2}
									height={292}
									width={293}
									alt="Client"
									pos="absolute"
									top={73}
									left={16}
									w="100%"
									h="100%"
								/>

								<Text size="14px" fw={400} w={325} h={136} pos="absolute" top={414} color="#E4E8ED">
									Libratherm offers Multizone (upto 72 zones) Ramp Soak Temperature Controller -
									PRC-8000 with Three Phase Thyristor Power Controller - POW-3-PA-CL for the Glass
									Toughening Process.
								</Text>
							</Box>
						</Card.Section>
					</Card>

					<Card h={700} w={391} bg={"black"}>
						<Card.Section>
							<Box pos="relative" w={391} h={450} bg={"black"}>
								<Text fw={400} h={92} w={347} size="md" mt={0} color="#F6F6F6">
									Glass Melting
									<Divider size="lg" mr={22} my={14} />
								</Text>
								<Image
									src={RectangleJournal}
									height={172}
									width={325}
									alt="Client"
									pos="absolute"
									top={55}
									left={0}
									w="100%"
									h="100%"
								/>
								<Image
									src={WHO}
									height={292}
									width={293}
									alt="Client"
									pos="absolute"
									top={73}
									left={16}
									w="100%"
									h="100%"
								/>

								<Text
									size="14px"
									fw={400}
									w={325}
									h={136}
									pos="absolute"
									top={414}
									color="#E4E8ED"
									lineClamp={5}
								>
									Libratherm offers Thyristor Control Panel incorporating 250KW-500KW Three Phase
									Thyristor Power Controller - POW-12-PA-CL and Advanced PID Temperature Controller
									- PID-966 for Furnace Oil Heating.
								</Text>
							</Box>
						</Card.Section>
					</Card>
				</Group>

				<Group justify="center" gap="sm">
					<Grid gutter="sm">
						<Grid.Col span={4}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event1}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event2}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300 2
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event3}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300 3
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event4}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300 4
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event5}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event6}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event6}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event3}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
						<Grid.Col span={4}>
							<Box pos="relative" w={1200} h={280}>
								<Image
									src={EventBg}
									height={202}
									width={82}
									pos="absolute"
									top={0}
									left={114}
									w="100%"
									h="100%"
								/>
								<Image
									src={Event1}
									height={164}
									width={164}
									pos="absolute"
									top={20}
									left={135}
									w="100%"
									h="100%"
								/>
								<Text color="#E4E8ED" size="xs" ml={319}>
									PRC 300
								</Text>
								<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
									Ramp Soak PID Temperature Controller
								</Text>
								<UnstyledButton>
									<Group>
										<Text size="16px" color="white" ml={315} mt={32} fw={400}>
											View
										</Text>
									</Group>
								</UnstyledButton>
							</Box>
						</Grid.Col>
					</Grid>
				</Group>
			</Paper>
			<Paper w={1440} h={3500} withBorder bg={"black"}>
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
							Services
						</Text>
						<Divider size="md" my={23} mr={114} ml={114} pb={40} />
					</Box>
				</Group>
				<Container>
					<Text color="#F6F6F6" ta="center" size="xl" pt={64}>
						Data Acquisition Software (DAQ)
					</Text>
					<Text color="#E4E8ED" ta="left" size="sm" pt={34} w={1006} fw="normal">
						Libratherm offers Data Acquisition Software - which uploads the stored data from
						Libratherm devices and it saves on the computer. We offer customized software to meet
						the user's specific requirement of acquiring the process data for further analysis and
						record logging.
					</Text>
					<Image src={DAQ} width={802} height={501} pt={64} mx={"auto"} />

					<Text color="#F6F6F6" ta="left" size="md" pt={128}>
						Salient Features of the Standard Software
					</Text>
					<Text color="#E4E8ED" ta="left" size="sm" pt={32} w={1006} fw="normal">
						<li>
							The PC software version EDATALOG is available on a single CD. This software is to be
							loaded on to the computer's hard disk, and it allows interfacing of DATALOG to the
							computer.
						</li>
						<br />
						<li>
							The interfacing with the computer is made either on serial com port or on USB port.
						</li>
						<br />
						<li>
							The front panel screen GUI (Graphical User Interface), in general, allows the user to
							configure:
						</li>
						<ol type="a">
							<li>COM port settings</li>
							<li> DATALOG input selection</li>
							<li> Setting of log interval</li>
							<li> Setting of security passwords</li>
							<li>
								Viewing of current data and historical data in the tabular and graphical format.
							</li>
						</ol>
						<br />

						<li>
							{" "}
							The data of all channels are stored on the computer's hard disk by start date and
							time, continuously at the rate of programmed log interval.
						</li>
						<br />

						<li>
							Print out of the report and graph can be taken for the selected channel, with the real
							date and time.{" "}
						</li>
						<br />

						<li>
							{" "}
							The X and Y coordinates of the graph are automatically adjusted based on the process
							value so that the pattern is visible on the center of the screen. This is called
							auto-scaling which applies to all the channel.{" "}
						</li>
						<br />

						<li>
							Customer or user can enter their own desired alphanumeric field, such as company name,
							operator name, channel nomenclature, unit of measurement, process name, etc. to
							customize the software as per their requirements while generating the report or graph
							on-screen or on the hard copy.{" "}
						</li>
						<br />

						<li>Any other software facility can be customized as per the user's requirements. </li>
					</Text>

					<Text color="#F6F6F6" ta="left" size="md" pt={128} mb={86}>
						Products with Data Aquisition Software
					</Text>
					<Group justify="center" gap="sm">
						<Grid gutter="sm">
							<Grid.Col span={4}>
								<Box pos="relative" w={1440} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event1}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event2}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300 2
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event3}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300 3
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event4}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300 4
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event5}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event6}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event6}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event3}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
							<Grid.Col span={4}>
								<Box pos="relative" w={1200} h={280}>
									<Image
										src={EventBg}
										height={202}
										width={82}
										pos="absolute"
										top={0}
										left={114}
										w="100%"
										h="100%"
									/>
									<Image
										src={Event1}
										height={164}
										width={164}
										pos="absolute"
										top={20}
										left={135}
										w="100%"
										h="100%"
									/>
									<Text color="#E4E8ED" size="xs" ml={319}>
										PRC 300
									</Text>
									<Text color="#F6F6F6" size="sm" ml={319} mt={15} w={186}>
										Ramp Soak PID Temperature Controller
									</Text>
									<UnstyledButton>
										<Group>
											<Text size="16px" color="white" ml={315} mt={32} fw={400}>
												View
											</Text>
										</Group>
									</UnstyledButton>
								</Box>
							</Grid.Col>
						</Grid>
					</Group>
				</Container>
			</Paper>
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default Journal;
