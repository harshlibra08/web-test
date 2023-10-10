import {
	Paper,
	Group,
	Box,
	Divider,
	UnstyledButton,
	Grid,
	Container,
	Image,
	Text,
} from "@mantine/core";
import React from "react";

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
